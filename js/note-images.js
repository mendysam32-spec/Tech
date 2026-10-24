/* ============================================================
   NOTE IMAGES  -  one resolver for every diagram in the app
   ------------------------------------------------------------
   Resolution order for a note / book topic:
     1. window.noteImages[key]        (data/note-images.js registry)
     2. the picture already stored in the note data (file or inline SVG)
     3. convention path images/notes/<key>.<ext>  (png, svg, jpg)
     4. placeholder

   Because the resolver probes the convention path, dropping a file into
   images/notes/ with the right name is enough - no data file has to be
   edited, and the app picks it up on the next load.
   ============================================================ */
(function () {
    const FOLDER = "images/notes/";
    const EXTENSIONS = ["png", "svg", "jpg"];

    function esc(value) {
        return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
    }
    function slug(value) {
        return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "").slice(0, 60);
    }
    function registry() {
        return (typeof window !== "undefined" && window.noteImages) || {};
    }
    function version() {
        return String((typeof window !== "undefined" && window.noteImageVersion) || "1");
    }
    // Cache buster: bumping noteImageVersion makes every device fetch the
    // replaced file straight away instead of the service-worker copy.
    function bust(path) {
        const p = String(path || "");
        if (!p || p.startsWith("data:")) return p;
        return p + (p.includes("?") ? "&" : "?") + "v=" + encodeURIComponent(version());
    }
    function noteKey(subject, grade, topicNumber) {
        return `${slug(subject)}-${slug(grade)}-${topicNumber}`;
    }
    function topicKey(topicId) {
        return `topic:${topicId}`;
    }
    function unique(list) {
        const seen = new Set();
        const out = [];
        (list || []).forEach(item => {
            if (!item) return;
            const value = String(item);
            if (seen.has(value)) return;
            seen.add(value);
            out.push(value);
        });
        return out;
    }
    function candidates(key, fallback) {
        const list = [];
        const mapped = key ? registry()[key] : null;
        if (mapped) list.push(mapped);
        if (fallback) list.push(fallback);
        if (key) EXTENSIONS.forEach(ext => list.push(`${FOLDER}${slug(key)}.${ext}`));
        return unique(list);
    }
    function expectedPath(key) {
        if (!key) return "";
        const mapped = registry()[key];
        if (mapped) return String(mapped);
        return `${FOLDER}${slug(key)}.png`;
    }

    // Advance to the next candidate; swap in the placeholder when empty.
    function next(img) {
        if (!img) return;
        let rest = [];
        try { rest = JSON.parse(img.getAttribute("data-note-rest") || "[]"); } catch (_) {}
        if (rest.length) {
            img.setAttribute("data-note-rest", JSON.stringify(rest.slice(1)));
            img.src = rest[0];
            return;
        }
        img.removeAttribute("onerror");
        if (img.getAttribute("data-note-optional") === "1") {
            if (img.parentNode) img.parentNode.removeChild(img);
            return;
        }
        const icon = img.getAttribute("data-note-icon") || "\u{1F4D8}";
        const note = img.getAttribute("data-note-note") || "Insert diagram here later.";
        const holder = document.createElement("div");
        holder.className = "study-placeholder";
        holder.innerHTML = `<span>${esc(icon)}</span><p>${esc(note)}</p>`;
        if (img.parentNode) img.parentNode.replaceChild(holder, img);
    }

    // Build the <img> markup for a note / topic.
    function html(options) {
        const opts = options || {};
        const key = opts.key || "";
        const list = candidates(key, opts.fallback);
        const alt = opts.alt || "Diagram";
        const cls = opts.cls || "study-image";
        const icon = opts.icon || "\u{1F4D8}";
        const path = expectedPath(key);
        const base = opts.imageNote || "Insert diagram here later.";
        const note = path ? `${base} - file: ${path}` : base;
        if (!list.length) {
            return `<div class="study-placeholder"><span>${esc(icon)}</span><p>${esc(note)}</p></div>`;
        }
        const first = bust(list[0]);
        const rest = JSON.stringify(list.slice(1).map(bust));
        return `<img class="${esc(cls)}" src="${esc(first)}" alt="${esc(alt)}" loading="lazy"`
            + ` data-note-rest='${esc(rest)}' data-note-icon="${esc(icon)}" data-note-note="${esc(note)}"`
            + (opts.optional ? ` data-note-optional="1"` : "")
            + ` onerror="NoteImages.next(this)">`;
    }

    window.NoteImages = {
        esc, slug, registry, version, bust, noteKey, topicKey,
        candidates, expectedPath, next, html
    };
})();
