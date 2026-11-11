// Tech Monster — English masterclass guide renderer (Library, English Book).
// Renders three data files into a topic page mount:
//   data/english-letter-writing-formal.js  (formalLetterMasterclass flag)
//   data/english-essay-writing.js          (essayMasterclass flag)
//   data/english-register.js               (registerGuide flag)
// Exposed as window.renderEnglishGuides(mountId, topic) — called from
// js/library.js after englishTopicView renders the topic page.
(function () {
  function esc(s) {
    return String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  function section(title, html) {
    return "<div class=\"study-section\"><h6>" + title + "</h6>" + html + "</div>";
  }
  function ul(items) {
    return "<ul>" + items.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  }
  function ol(items) {
    return "<ol>" + items.map(x => "<li>" + esc(x) + "</li>").join("") + "</ol>";
  }
  // Steps with a name/detail/example shape (COEMA items, letter rules...).
  function steps(items) {
    return "<div class=\"letter-steps\">" + items.map((s, i) =>
      "<div class=\"letter-step\"><span class=\"step-n\">" + (i + 1) + "</span><div>" +
      "<strong>" + esc(s.name || s.part || "") + (s.marks ? " <span class=\"guide-mark\">(" + esc(s.marks) + ")</span>" : "") + "</strong>" +
      "<p class=\"mb-1 small\">" + esc(s.detail) + "</p>" +
      (s.example ? "<p class=\"mb-0 small letter-ex\">e.g. " + esc(s.example).replaceAll("\n", "<br>") + "</p>" : "") +
      "</div></div>"
    ).join("") + "</div>";
  }
  // Collapsible details block (essay types, register fields...).
  function detailBox(summary, inner) {
    return "<details class=\"letter-type\"><summary>" + summary + "</summary><div class=\"small mt-2\">" + inner + "</div></details>";
  }
  // A full letter/essay model with labelled paragraphs.
  function modelSheet(letter) {
    let html = "<div class=\"model-letter\">";
    if (letter.addressLines && letter.addressLines.length) {
      html += "<div class=\"model-addr\">" + letter.addressLines.map(esc).join("<br>") + (letter.date ? "<br>" + esc(letter.date) : "") + "</div>";
    }
    if (letter.recipient && letter.recipient.length) {
      html += "<div class=\"model-addr-left\">" + letter.recipient.map(esc).join("<br>") + "</div>";
    }
    if (letter.salutation) html += "<p class=\"model-greet\">" + esc(letter.salutation) + "</p>";
    if (letter.heading) html += "<p class=\"model-heading\">" + esc(letter.heading) + "</p>";
    (letter.paragraphs || []).forEach(p => {
      html += "<p class=\"model-para\"><span class=\"model-label\">" + esc(p.label) + "</span>" + esc(p.text) + "</p>";
    });
    if (letter.closing) html += "<p class=\"model-close\">" + esc(letter.closing) + (letter.name ? "<br>" + esc(letter.name) : "") + "</p>";
    return html + "</div>";
  }
  // Question + why-it-scores + the model body (essay types).
  function modelBlock(model) {
    if (!model) return "";
    let html = "<p class=\"small mb-1\"><strong>Question:</strong> " + esc(model.question) + "</p>";
    if (model.materials && model.materials.length) {
      html += "<p class=\"mini-label mt-2\">Materials / ingredients</p><ul>" + model.materials.map(m => "<li>" + esc(m) + "</li>").join("") + "</ul>";
    }
    if (model.whyItScores) html += "<p class=\"small mb-2 letter-ex\">Why it scores: " + esc(model.whyItScores) + "</p>";
    html += "<div class=\"model-letter\">";
    if (model.title) html += "<p class=\"model-heading\">" + esc(model.title) + "</p>";
    (model.paragraphs || []).forEach(p => {
      html += "<p class=\"model-para\"><span class=\"model-label\">" + esc(p.label) + "</span>" + esc(p.text) + "</p>";
    });
    if (model.byline) html += "<p class=\"model-close\">" + esc(model.byline).replaceAll("\n", "<br>") + "</p>";
    html += "</div>";
    return html;
  }

  // ============ 1. FORMAL & SEMI-FORMAL LETTER MASTERCLASS ============
  function renderFormal(g) {
    let html = "";
    if (g.intro) html += "<p class=\"small mb-2\">" + esc(g.intro) + "</p>";
    if (g.coema) {
      html += section("⚖️ " + esc(g.coema.title), steps(g.coema.items) +
        (g.coema.commonLosses ? "<p class=\"mini-label mt-2\">Where candidates lose mechanical-accuracy marks</p>" + ul(g.coema.commonLosses) : ""));
    }
    if (g.components) html += section("🎯 The three components of every letter", steps(g.components));
    if (g.languageTypes) html += section("🗣️ Language families — loose, strict, tepid", g.languageTypes.map(l =>
      "<div class=\"letter-step\"><div><strong>" + esc(l.name) + "</strong><p class=\"mb-0 small\">" + esc(l.detail) + "</p></div></div>").join(""));
    if (g.letterRules) html += section("🧩 Five parts of every letter", steps(g.letterRules));
    if (g.britishVsAmerican) {
      const b = g.britishVsAmerican;
      html += section("🇬🇧 British vs American English — be consistent",
        "<p class=\"small mb-2\">" + esc(b.note) + "</p>" +
        "<div class=\"d-flex flex-wrap gap-3\">" +
        "<div class=\"guide-pair\"><p class=\"mini-label\">Lexis</p>" + (b.lexis || []).map(p =>
          "<p class=\"small mb-1\">🇬🇧 " + esc(p[0]) + " — 🇺🇸 " + esc(p[1]) + "</p>").join("") + "</div>" +
        "<div class=\"guide-pair\"><p class=\"mini-label\">Spelling</p>" + (b.spelling || []).map(p =>
          "<p class=\"small mb-1\">🇬🇧 " + esc(p[0]) + " — 🇺🇸 " + esc(p[1]) + "</p>").join("") + "</div>" +
        "</div>");
    }
    if (g.phraseBanks) html += section("💾 Phrase banks — how to start and end",
      g.phraseBanks.map(b => detailBox("<strong>" + esc(b.kind) + "</strong>",
        "<p class=\"mini-label\">Starting</p>" + ul(b.starting) +
        "<p class=\"mini-label mt-2\">Ending</p>" + ul(b.ending))).join(""));
    if (g.formal) {
      const f = g.formal;
      html += section("🏢 Formal letters — official correspondence",
        "<p class=\"small mb-2\">" + esc(f.definition) + "</p>" + ul(f.advice) +
        (f.types || []).map(t =>
          "<p class=\"small mb-1\"><strong>" + esc(t.name) + "</strong> — " + esc(t.detail) + "</p>" +
          (t.rules && t.rules.length ? ul(t.rules) : "")).join("") +
        (f.addresses ? "<p class=\"mini-label mt-2\">Two addresses — positions and designations</p><p class=\"small mb-2\">" + esc(f.addresses.detail) + "</p>" +
          (f.addresses.examples || []).map(x => "<p class=\"small letter-ex mb-1\">" + esc(x).replaceAll("\n", "<br>") + "</p>").join("") : "") +
        (f.salutations ? "<p class=\"mini-label mt-2\">Salutations</p><p class=\"small mb-1\">" + esc(f.salutations.detail) + "</p>" +
          "<div class=\"register-words\">" + (f.salutations.dignitaries || []).map(d =>
            "<span class=\"register-chip\"><strong>" + esc(d[0]) + "</strong> → " + esc(d[1]) + "</span>").join("") + "</div>" : "") +
        (f.heading ? "<p class=\"mini-label mt-2\">The heading</p><p class=\"small mb-2\">" + esc(f.heading.detail) + "</p>" +
          (f.heading.examples || []).map(x => "<p class=\"small letter-ex mb-1\">" + esc(x) + "</p>").join("") : "") +
        (f.body ? "<p class=\"mini-label mt-2\">The body</p><p class=\"small mb-2\">" + esc(f.body) + "</p>" : "") +
        (f.conclusion ? "<p class=\"mini-label mt-2\">Conclusion & subscription</p><p class=\"small mb-0\">" + esc(f.conclusion) + "</p>" : ""));
    }
    if (g.informalVsFormal) {
      html += section("⚖️ Informal vs formal — side by side",
        "<div class=\"guide-vs\">" + g.informalVsFormal.map(x =>
          "<div class=\"guide-vs-row\"><div class=\"guide-vs-a\">✉️ " + esc(x.a) + "</div><div class=\"guide-vs-b\">🏢 " + esc(x.b) + "</div></div>").join("") + "</div>");
    }
    if (g.semiFormal) {
      const s = g.semiFormal;
      html += section("🤝 Semi-formal letters — the middle course",
        "<p class=\"small mb-2\">" + esc(s.definition) + "</p>" +
        "<p class=\"mini-label\">Who receives a semi-formal letter</p>" + ul(s.who) +
        "<p class=\"mini-label mt-2\">Address</p><p class=\"small mb-2\">" + esc(s.address) + "</p>" +
        "<p class=\"mini-label\">Salutations</p><div class=\"register-words mb-2\">" + s.salutations.map(x =>
          "<span class=\"register-chip\">" + esc(x) + "</span>").join("") + "</div>" +
        "<p class=\"mini-label\">The body</p><p class=\"small mb-2\">" + esc(s.body) + "</p>" +
        "<p class=\"mini-label\">Conclusion</p><p class=\"small mb-0\">" + esc(s.conclusion) + "</p>");
    }
    if (g.models) {
      html += section("👁️ Model letters — copy the positions",
        g.models.map(m => detailBox("<strong>" + esc(m.title) + "</strong> <span class=\"guide-mark\">" + esc(m.kind) + "</span>",
          "<p class=\"small mb-1\"><strong>Question:</strong> " + esc(m.question) + "</p>" +
          "<p class=\"small mb-1 letter-ex\">Why it scores: " + esc(m.whyItScores) + "</p>" + modelSheet(m.letter))).join(""));
    }
    if (g.testYourself) html += section("✍️ Test yourself — WAEC practice questions", ol(g.testYourself));
    return html;
  }

  // ============ 2. ESSAY WRITING MASTERCLASS ============
  function renderEssay(g) {
    let html = "";
    if (g.intro) html += "<p class=\"small mb-2\">" + esc(g.intro) + "</p>";
    if (g.marking) html += section("⚖️ " + esc(g.marking.title), steps(g.marking.items));
    if (g.characteristics) html += section("🌟 Characteristics of a good essay", ol(g.characteristics));
    if (g.types) {
      html += section("🗂️ The seven WAEC essay types — with model answers",
        g.types.map(t => {
          let inner = "<p class=\"mb-2\">" + esc(t.definition) + "</p>";
          if (t.features) inner += "<p class=\"mini-label\">Features that earn marks</p>" + ul(t.features);
          if (t.protocol) inner += "<p class=\"mini-label mt-2\">The debate protocol</p>" + steps(t.protocol.map(p => ({ name: p.step, detail: p.detail })));
          if (t.bylines) inner += "<p class=\"mini-label mt-2\">Byline rules</p>" + ul(t.bylines);
          if (t.sayings) inner += "<p class=\"mini-label mt-2\">Common sayings to illustrate</p><div class=\"register-words\">" +
            t.sayings.map(s => "<span class=\"register-chip\">" + esc(s) + "</span>").join("") + "</div>";
          if (t.model) inner += "<p class=\"mini-label mt-2\">Model answer</p>" + modelBlock(t.model);
          if (t.models) inner += (t.models || []).map((m, i) =>
            "<p class=\"mini-label mt-2\">Model answer " + (i + 1) + "</p>" + modelBlock(m)).join("");
          return detailBox(t.icon + " <strong>" + esc(t.name) + "</strong>", inner);
        }).join(""));
    }
    if (g.practice) html += section("✍️ Practice questions — pick one and write",
      "<ol class=\"guide-practice\">" + g.practice.map(p => "<li>" + esc(p) + "</li>").join("") + "</ol>");
    return html;
  }

  // ============ 3. REGISTER — FIELDS OF HUMAN ACTIVITY ============
  function renderRegister(g) {
    let html = "";
    if (g.intro) html += "<p class=\"small mb-2\">" + esc(g.intro) + "</p>";
    if (g.definition) html += section("📌 Definition", "<p class=\"small mb-0\">" + esc(g.definition) + "</p>");
    if (g.howTested) html += section("❓ How WAEC / GABECE tests register", ul(g.howTested));
    if (g.strategy) html += section("🎯 Strategy — name the field first", ol(g.strategy));
    if (g.fields) {
      html += section("📚 The WAEC syllabus fields — vocabulary lists",
        g.fields.map(f => detailBox(f.icon + " <strong>" + esc(f.name) + "</strong> <span class=\"guide-mark\">" + f.words.length + " words</span>",
          "<div class=\"register-words\">" + f.words.map(w => "<span class=\"register-chip\">" + esc(w) + "</span>").join("") + "</div>")).join(""));
    }
    if (g.workedExamples) {
      html += section("🧪 Worked examples — reasoning shown",
        g.workedExamples.map(x => "<div class=\"letter-step\"><div>" +
          "<p class=\"mb-1\"><strong>\"" + esc(x.sentence) + "\"</strong></p>" +
          "<p class=\"mb-1 small\"><span class=\"guide-mark\">Field: " + esc(x.field) + "</span> → Answer: <strong>" + esc(x.answer) + "</strong></p>" +
          "<p class=\"mb-0 small letter-ex\">" + esc(x.why) + "</p></div></div>").join(""));
    }
    if (g.memoryTip) html += section("🧠 Memory tip", "<p class=\"small mb-0\">" + esc(g.memoryTip) + "</p>");
    return html;
  }

  // ============ PUBLIC ENTRY ============
  window.renderEnglishGuides = function (mountId, topic) {
    const mount = document.getElementById(mountId);
    if (!mount) return false;
    const title = (topic && topic.title) || "";
    const isFormal = !!(topic && topic.formalLetterMasterclass) || (/formal letter/i.test(title) && !/informal/i.test(title));
    try {
      if (isFormal) {
        if (!window.englishFormalLetterGuide) return false;
        mount.innerHTML = renderFormal(window.englishFormalLetterGuide);
        return true;
      }
      if ((topic && topic.essayMasterclass) || /essay writing/i.test(title)) {
        if (!window.englishEssayGuide) return false;
        mount.innerHTML = renderEssay(window.englishEssayGuide);
        return true;
      }
      if ((topic && topic.registerGuide) || /^register\b/i.test(title)) {
        if (!window.englishRegister) return false;
        mount.innerHTML = renderRegister(window.englishRegister);
        return true;
      }
    } catch (_) { /* leave the loading placeholder */ }
    return false;
  };
})();
