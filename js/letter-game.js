// Tech Monster — Informal Letter Word-Card Game
// Practice: tap word cards to fill blanks in order. Marked /100.
// REVIEW RULE: show mistakes ONLY. Never render the full correct letter,
// so learners cannot deliberately fail to harvest the model answer.
(function () {
  function esc(s) {
    return String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  function shuffle(a) {
    const x = a.slice();
    for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = x[i]; x[i] = x[j]; x[j] = t; }
    return x;
  }

  let gameEx = null;       // active exercise object
  let gameOrder = [];      // shuffled card texts for this round
  let gameUsed = [];       // card index -> slot index or -1
  let gameSlots = [];      // slot index -> card text or null
  let gameDone = false;
  let gameScore = null;

  window.openLetterGame = function (exerciseId, mountId) {
    const list = window.englishLetterExercises || [];
    gameEx = list.find(e => e.id === exerciseId) || list[0];
    if (!gameEx) return;
    gameOrder = shuffle(gameEx.cards.map((c, i) => ({ text: c, key: i })));
    gameUsed = gameOrder.map(() => -1);
    gameSlots = gameEx.slots.map(() => null);
    gameDone = false;
    gameScore = null;
    renderLetterGame(mountId);
    const m = document.getElementById(mountId);
    if (m) m.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  window.letterGameReset = function (mountId) {
    if (!gameEx) return;
    gameOrder = shuffle(gameEx.cards.map((c, i) => ({ text: c, key: i })));
    gameUsed = gameOrder.map(() => -1);
    gameSlots = gameEx.slots.map(() => null);
    gameDone = false;
    gameScore = null;
    renderLetterGame(mountId || "letterGameMount");
  };

  window.letterGameUnfill = function (slotIdx, mountId) {
    if (gameDone || !gameEx) return;
    const txt = gameSlots[slotIdx];
    if (!txt) return;
    const oi = gameOrder.findIndex((o, i) => gameUsed[i] === slotIdx && o.text === txt);
    if (oi >= 0) gameUsed[oi] = -1;
    gameSlots[slotIdx] = null;
    renderLetterGame(mountId || "letterGameMount");
  };

  window.letterGamePick = function (orderIdx, mountId) {
    if (gameDone || !gameEx) return;
    if (gameUsed[orderIdx] !== -1) return; // already placed
    const next = gameSlots.findIndex(s => s === null);
    if (next === -1) return; // all filled
    gameSlots[next] = gameOrder[orderIdx].text;
    gameUsed[orderIdx] = next;
    renderLetterGame(mountId || "letterGameMount");
  };

  window.letterGameSubmit = function (mountId) {
    if (!gameEx || gameDone) return;
    if (gameSlots.some(s => !s)) { alert("Fill every blank first — tap the word cards in order, then submit."); return; }
    let correct = 0;
    gameEx.slots.forEach((slot, i) => {
      const got = (gameSlots[i] || "").trim().toLowerCase();
      if ((slot.accept || []).some(a => String(a).trim().toLowerCase() === got)) correct++;
    });
    const per = 100 / gameEx.slots.length;
    gameScore = Math.round(correct * per);
    gameDone = true;
    // Persist best score per exercise for motivation (local only).
    try {
      const k = "tm_letterBest_" + gameEx.id;
      const prev = Number(localStorage.getItem(k) || 0);
      if (gameScore > prev) localStorage.setItem(k, String(gameScore));
    } catch (_) {}
    renderLetterGame(mountId || "letterGameMount");
  };

  function slotState(i) {
    if (!gameDone) return "";
    const got = (gameSlots[i] || "").trim().toLowerCase();
    const ok = (gameEx.slots[i].accept || []).some(a => String(a).trim().toLowerCase() === got);
    return ok ? "slot-ok" : "slot-bad";
  }

  function renderLetterGame(mountId) {
    const mount = document.getElementById(mountId || "letterGameMount");
    if (!mount || !gameEx) return;
    const total = gameEx.slots.length;
    const filled = gameSlots.filter(Boolean).length;
    let best = 0;
    try { best = Number(localStorage.getItem("tm_letterBest_" + gameEx.id) || 0); } catch (_) {}

    // Letter sheet with blanks
    const sheet = gameEx.template.map(part => {
      if (part.t !== undefined) return esc(part.t);
      const i = part.b;
      const val = gameSlots[i];
      const cls = "letter-blank" + (val ? " filled" : "") + (gameDone ? " " + slotState(i) : "");
      const label = val ? esc(val) : ("Blank " + (i + 1));
      const click = (!gameDone && val) ? (" onclick=\"letterGameUnfill(" + i + ",'" + mount.id + "')\" title=\"Tap to return this card\"") : "";
      return "<button type=\"button\" class=\"" + cls + "\"" + click + ">" + label + "</button>";
    }).join("");

    // Card bank
    const bank = gameOrder.map((o, oi) => {
      const used = gameUsed[oi] !== -1;
      return "<button type=\"button\" class=\"word-card" + (used ? " used" : "") + "\" " +
        (used || gameDone ? "disabled" : "onclick=\"letterGamePick(" + oi + ",'" + mount.id + "')\"") + ">" + esc(o.text) + "</button>";
    }).join("");

    // Switcher between exercises
    const list = window.englishLetterExercises || [];
    const switcher = list.length > 1 ? "<div class=\"d-flex flex-wrap gap-2 mb-3\">" + list.map(e =>
      "<button type=\"button\" class=\"secondary-btn chapter-btn" + (e.id === gameEx.id ? " active-ex" : "") + "\" onclick=\"openLetterGame('" + e.id + "','" + mount.id + "')\">" + esc(e.title) + "</button>"
    ).join("") + "</div>" : "";

    // Review: mistakes ONLY — never show correct text or full letter.
    let review = "";
    if (gameDone) {
      const wrong = [];
      gameEx.slots.forEach((slot, i) => {
        const got = (gameSlots[i] || "").trim().toLowerCase();
        const ok = (slot.accept || []).some(a => String(a).trim().toLowerCase() === got);
        if (!ok) wrong.push({ i, slot });
      });
      const mark = gameScore >= 70 ? "good" : gameScore >= 50 ? "mid" : "low";
      review = "<div class=\"letter-score " + mark + "\"><span>Your score: <strong>" + gameScore + " / 100</strong></span>" +
        "<span class=\"small\">" + (wrong.length === 0 ? "Perfect — every card in place." : (wrong.length + " of " + total + " blanks need work.")) + "</span>" +
        (best ? "<span class=\"small opacity-75\">Best on this letter: " + best + " / 100</span>" : "") + "</div>";
      if (wrong.length === 0) {
        review += "<div class=\"letter-review ok\"><h6>🎉 No mistakes — well done.</h6><p class=\"small mb-0\">You placed every block correctly from address to closing. Try the other practice letter to prove it was not luck.</p></div>";
      } else {
        review += "<div class=\"letter-review\"><h6>🔍 Your mistakes (" + wrong.length + ") — fix the idea, not the answer</h6>" +
          "<p class=\"small opacity-75\">We do <strong>not</strong> show the correct letter, so nobody can fail on purpose to copy it. Read each hint, re-open the steps above, then <strong>Try again</strong>.</p>" +
          wrong.map(w =>
            "<div class=\"mistake-row\"><span class=\"mistake-slot\">Blank " + (w.i + 1) + "</span>" +
            "<div><p class=\"mb-1\">You placed: <strong>“" + esc(gameSlots[w.i]) + "”</strong></p>" +
            "<p class=\"mb-1 small\">What this blank needs: " + esc(w.slot.hint) + "</p>" +
            "<p class=\"mb-0 small mistake-rule\">Rule: " + esc(w.slot.rule) + "</p></div></div>"
          ).join("") + "</div>";
      }
    }

    mount.innerHTML =
      "<div class=\"letter-game\">" +
      "<p class=\"mini-label\">🎮 Word-card game • marked /100 • mistakes-only review</p>" +
      "<h5>" + esc(gameEx.title) + "</h5>" +
      "<p class=\"small opacity-75\">" + esc(gameEx.instruction) + "</p>" +
      switcher +
      "<div class=\"letter-progress small\">" + filled + " / " + total + " blanks filled" + (gameDone ? " • submitted" : "") + "</div>" +
      "<div class=\"letter-sheet\">" + sheet + "</div>" +
      (gameDone ? "" : "<p class=\"small opacity-75 mt-2 mb-1\">👆 Tap a card to place it in the next blank. Tap a filled blank to return its card.</p><div class=\"word-bank\">" + bank + "</div>") +
      "<div class=\"d-flex flex-wrap gap-2 mt-3\">" +
      (gameDone
        ? "<button type=\"button\" class=\"glass-btn\" onclick=\"letterGameReset('" + mount.id + "')\">🔁 Try again (cards reshuffled)</button>"
        : "<button type=\"button\" class=\"glass-btn\" onclick=\"letterGameSubmit('" + mount.id + "')\">✅ Submit for marking /100</button>" +
          "<button type=\"button\" class=\"secondary-btn\" onclick=\"letterGameReset('" + mount.id + "')\">🔀 Reshuffle</button>") +
      "</div>" + review + "</div>";
  }

  // Render the static study guide (steps, types, linking words) into a mount.
  window.renderLetterGuide = function (mountId) {
    const g = window.englishLetterGuide;
    const mount = document.getElementById(mountId);
    if (!mount || !g) return;
    mount.innerHTML =
      "<div class=\"study-section\"><h6>⭐ Golden rule</h6><p>" + esc(g.goldenRule) + "</p></div>" +
      (g.examWords ? "<div class=\"study-section\"><h6>📏 Exam rule — minimum 300 words</h6><p>" + esc(g.examWords) + "</p></div>" : "") +
      (g.modelLetter ? "<div class=\"study-section\"><h6>👁️ Model letter — copy the positions</h6>" +
        "<p class=\"small opacity-75\">" + esc(g.modelLetter.caption) + "</p>" +
        "<div class=\"model-letter\">" +
          "<div class=\"model-addr\">" + g.modelLetter.addressLines.map(esc).join("<br>") + "<br>" + esc(g.modelLetter.date) + "</div>" +
          "<p class=\"model-greet\">" + esc(g.modelLetter.greeting) + "</p>" +
          g.modelLetter.paragraphs.map(p =>
            "<p class=\"model-para\"><span class=\"model-label\">" + esc(p.label) + "</span>" + esc(p.text) + "</p>"
          ).join("") +
          "<p class=\"model-close\">" + esc(g.modelLetter.closing) + "<br>" + esc(g.modelLetter.name) + "</p>" +
        "</div></div>" : "") +
      "<div class=\"study-section\"><h6>📝 7 steps — from address to conclusion (informal)</h6>" +
      "<div class=\"letter-steps\">" + g.steps.map(s =>
        "<div class=\"letter-step\"><span class=\"step-n\">" + s.n + "</span><div><strong>" + esc(s.name) + "</strong>" +
        "<p class=\"mb-1 small\">" + esc(s.what) + "</p>" +
        "<p class=\"mb-1 small letter-ex\">e.g. " + esc(s.example).replaceAll("\n", "<br>") + "</p>" +
        "<p class=\"mb-0 small mistake-rule\">⚠ " + esc(s.waecTrap) + "</p></div></div>"
      ).join("") + "</div></div>" +
      "<div class=\"study-section\"><h6>⚖️ Informal vs formal — never mix them</h6><ul>" +
      g.informalVsFormal.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" +
      "<div class=\"study-section\"><h6>🧱 " + esc(g.paragraphMethod.title) + "</h6><ol>" +
      g.paragraphMethod.steps.map(x => "<li>" + esc(x) + "</li>").join("") + "</ol>" +
      "<p class=\"mini-label mt-2\">Linking words bank</p>" +
      g.paragraphMethod.linkingWords.map(l =>
        "<p class=\"mb-1 small\"><strong>" + esc(l.group) + ":</strong> " + l.words.map(esc).join(" ") + "</p>"
      ).join("") + "</div>" +
      "<div class=\"study-section\"><h6>📮 Five exam letter types — paragraph plan for each</h6>" +
      g.fiveTypes.map(t =>
        "<details class=\"letter-type\"><summary><strong>" + esc(t.name) + "</strong></summary>" +
        "<p class=\"small mt-2 mb-1\"><em>" + esc(t.pastStyle) + "</em></p>" +
        "<ol class=\"small\">" + t.plan.map(p => "<li>" + esc(p) + "</li>").join("") + "</ol>" +
        "<p class=\"small letter-ex\">Skeleton: " + esc(t.skeleton) + "</p></details>"
      ).join("") + "</div>";
  };
})();
