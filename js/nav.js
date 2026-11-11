// Tech Monster — Left Sidebar Navigation (responsive)
// Auto-injects on every page except explicit opt-out via <body data-no-nav>
// Desktop: docked 272px left. Mobile: drawer + overlay, hamburger toggle.
(function () {
  const NAV_ITEMS = [
    { href: "dashboard.html", label: "Dashboard", icon: "🏠", key: "dashboard", match: /dashboard\.html/ },
    { href: "library.html", label: "Library", icon: "📚", key: "library", match: /library\.html(\?tab=notes)?/ },
    { href: "library.html?tab=papers", label: "Past Papers", icon: "📄", key: "papers", match: /library\.html\?tab=papers|papers\.html/ },
    { href: "quiz.html", label: "Start Quiz", icon: "✏️", key: "quiz", match: /quiz\.html/ },
    { href: "review.html", label: "Review", icon: "🔍", key: "review", match: /review\.html/ },
    { href: "settings.html", label: "Settings", icon: "⚙️", key: "settings", match: /settings\.html/ },
    { href: "result.html", label: "Results", icon: "🏆", key: "result", match: /result\.html/ },
    { href: "dashboard.html#liveEvents", label: "Live Events", icon: "⚡", key: "events", match: /events/ }
  ];

  function currentKey() {
    const url = location.pathname + location.search + location.hash;
    for (const item of NAV_ITEMS) {
      if (item.match.test(url)) return item.key;
    }
    // notes.html is legacy -> treat as library
    if (/notes\.html/.test(url)) return "library";
    // index is login
    if (/index\.html$|\/$/.test(location.pathname)) return "login";
    return "";
  }

  function inject() {
    if (document.body.dataset.noNav !== undefined) return;
    const isLogin = /index\.html$|\/$/.test(location.pathname) && !document.body.classList.contains("tm-force-nav");
    // The login screen is the account picker now, so never overlay the
    // in-app sidebar on it (even when a session is remembered).
    if (isLogin) return;

    document.body.classList.add("tm-has-sidebar");

    // Hide in-page duplicates that already live in the sidebar (avoid repetition on dashboard + other pages)
    // Keep primary hero CTA (#startQuizLink) visible; hide other duplicate links
    if (!document.getElementById("tmDuplicateStyle")) {
      const style = document.createElement("style");
      style.id = "tmDuplicateStyle";
      style.textContent = ".tm-has-sidebar .tm-duplicate-hidden{display:none !important;}";
      document.head.appendChild(style);
    }
    try {
      const navHrefs = new Set(NAV_ITEMS.map(i => i.href.split("?")[0].split("#")[0].toLowerCase()));
      const keepIds = new Set(["startQuizLink"]);
      document.querySelectorAll(".container a[href], .hero-panel a[href], .glass-card a[href], .navbar a[href]").forEach(a => {
        if (a.closest("#tmSidebar") || keepIds.has(a.id) || a.classList.contains("tm-nav-keep")) return;
        const raw = (a.getAttribute("href") || "").split("?")[0].split("#")[0].trim().toLowerCase();
        if (!raw || raw === "#") return;
        if (navHrefs.has(raw) || navHrefs.has(raw.replace("./",""))) {
          // also treat quiz.html?mode=paper etc as quiz
          if (raw.includes("quiz.html") || raw.includes("library.html") || raw.includes("review.html") || raw.includes("settings.html") || raw.includes("result.html") || raw.includes("dashboard.html") || raw.includes("notes.html")) {
            a.classList.add("tm-duplicate-hidden");
            a.setAttribute("data-duplicate", "sidebar");
          }
        }
      });
    } catch (_) {}

    // Sidebar shell
    if (!document.getElementById("tmSidebar")) {
      const aside = document.createElement("aside");
      aside.id = "tmSidebar";
      aside.setAttribute("aria-label", "Primary");
      const active = currentKey();
      aside.innerHTML = `
        <div class="tm-sidebar-header">
          <a href="dashboard.html" class="app-logo" style="text-decoration:none;">Tech Monster</a>
          <button id="tmSidebarClose" aria-label="Close navigation">✕</button>
        </div>
        <nav class="tm-nav" aria-label="Site sections">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}" data-nav="${item.key}" class="${active === item.key ? "active" : ""}">
              <span class="tm-nav-icon" aria-hidden="true">${item.icon}</span>
              <span>${item.label}</span>
            </a>
          `).join("")}
          <a href="notes.html" data-nav="notes-legacy" style="font-size:.82rem;opacity:.75;">
            <span class="tm-nav-icon">📝</span><span>Notes (legacy)</span>
          </a>
        </nav>
        <div class="tm-sidebar-footer">
          <div class="signature-mark">S&amp;P Group</div>
          <small class="signature-line">Tech Monster Signature</small>
          <button id="tmNavLogout" class="secondary-btn w-100 mt-3" type="button">Logout</button>
          <div class="small opacity-75 mt-2" style="font-size:.72rem;">Untimed papers • Instant explanations</div>
        </div>
      `;
      document.body.prepend(aside);

      const overlay = document.createElement("div");
      overlay.id = "tmOverlay";
      overlay.className = "tm-overlay";
      overlay.setAttribute("aria-hidden", "true");
      document.body.appendChild(overlay);

      // events
      const closeBtn = aside.querySelector("#tmSidebarClose");
      const logoutBtn = aside.querySelector("#tmNavLogout");
      const persist = (open) => { try { localStorage.setItem("tm_sidebarOpen", open ? "1" : "0"); } catch {} };
      const toggleOpen = () => {
        aside.classList.add("tm-open");
        overlay.classList.add("tm-show");
        document.body.classList.add("tm-sidebar-open");
        persist(true);
        const t = document.getElementById("tmSidebarToggle");
        if (t) t.setAttribute("aria-expanded", "true");
      };
      const toggleClose = () => {
        aside.classList.remove("tm-open");
        overlay.classList.remove("tm-show");
        document.body.classList.remove("tm-sidebar-open");
        persist(false);
        const t = document.getElementById("tmSidebarToggle");
        if (t) t.setAttribute("aria-expanded", "false");
      };
      overlay.addEventListener("click", toggleClose);
      closeBtn.addEventListener("click", toggleClose);
      logoutBtn.addEventListener("click", () => {
        try { Storage.clearSession(); } catch { localStorage.removeItem("tm_currentUser"); localStorage.removeItem("tm_sessionToken"); }
        location.href = "index.html";
      });
      // initial state: desktop open by default, mobile closed; respects saved preference
      const isDesktop = window.innerWidth >= 992;
      const saved = localStorage.getItem("tm_sidebarOpen");
      const shouldOpen = saved !== null ? saved === "1" : isDesktop;
      if (shouldOpen) toggleOpen(); else toggleClose();
      // expose for toggle button
      window.__tmNav = { open: toggleOpen, close: toggleClose, toggle: () => aside.classList.contains("tm-open") ? toggleClose() : toggleOpen() };

      // close on Escape
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleClose(); });
      // close on nav click on mobile (keep open on desktop)
      aside.querySelectorAll(".tm-nav a").forEach(a => a.addEventListener("click", () => {
        if (window.innerWidth < 992) toggleClose();
      }));
    }

    // Hamburger in top navbar — visible on all sizes, toggles hide/show
    const navContainer = document.querySelector(".navbar .container");
    if (navContainer && !document.getElementById("tmSidebarToggle")) {
      const btn = document.createElement("button");
      btn.id = "tmSidebarToggle";
      btn.className = "tm-sidebar-toggle";
      btn.type = "button";
      btn.setAttribute("aria-label", "Toggle navigation menu");
      const initiallyOpen = document.body.classList.contains("tm-sidebar-open");
      btn.setAttribute("aria-expanded", String(initiallyOpen));
      btn.innerHTML = `<span></span>`;
      btn.addEventListener("click", () => {
        window.__tmNav.toggle();
      });
      // insert before logo so logo stays visible
      navContainer.prepend(btn);
    } else if (navContainer) {
      // sync aria on re-inject
      const btn = document.getElementById("tmSidebarToggle");
      if (btn) btn.classList.remove("tm-hide-desktop");
    }

    // Keep accent sync for sidebar active color (listen for accent changes)
    const user = (() => { try { return JSON.parse(localStorage.getItem("tm_currentUser")); } catch { return null; }})();
    if (user && user.profile && user.profile.accent) document.body.dataset.accent = user.profile.accent;
  }

  // Chapter return links for post-quiz navigation (result.html + review.html).
  // Works for every Library subject: given the quiz meta, resolve the exact
  // chapter just practised (via ?note= id when present, else title match)
  // and the next chapter in the same grade so learners keep reading.
  function flatBookTopics(book) {
    const out = [];
    (book || []).forEach(g => {
      const seq = [];
      (g.themes || []).forEach(th => (th.topics || []).forEach(t => {
        seq.push(t);
        out.push({ grade: g, topic: t, seq });
      }));
    });
    return out;
  }
  window.tmChapterLinks = function (subject, topicTitle, noteId) {
    try {
      const books = {
        English: (typeof window !== "undefined" && window.englishBook) || null,
        SES: (typeof window !== "undefined" && window.sesBook) || null,
        Science: (typeof window !== "undefined" && window.scienceBook) || null
      };
      const book = books[subject];
      if (book) {
        const flat = flatBookTopics(book);
        let found = noteId ? flat.find(x => x.topic.id === noteId) : null;
        if (!found && topicTitle) found = flat.find(x => x.topic.title === topicTitle);
        if (found) {
          const seq = found.seq;
          const i = seq.findIndex(t => t.id === found.topic.id);
          const nxt = i >= 0 ? seq[i + 1] : null;
          return {
            backUrl: `library.html?note=${encodeURIComponent(found.topic.id)}`,
            backLabel: `📖 Back to ${found.topic.title}`,
            nextUrl: nxt ? `library.html?note=${encodeURIComponent(nxt.id)}` : null,
            nextLabel: nxt ? `Next: ${nxt.title} →` : null
          };
        }
      }
      if (subject === "Maths") return { backUrl: "library.html", backLabel: "📖 Back to Maths notes", nextUrl: null, nextLabel: null };
      if (subject) return { backUrl: "library.html", backLabel: "📖 Back to Library notes", nextUrl: null, nextLabel: null };
      return {};
    } catch (_) { return {}; }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();
