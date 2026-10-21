/* Tech Monster — Level-Up Celebration System */
window.LevelUp = (function () {
    const LEVEL_EMOJI = ["👾", "🐉", "🦁", "🐯", "🦊", "🐺", "🐻", "🐘", "🦄", "👑"];
    const METALLIC = ["#ffd700", "#c0c0c0", "#e5e4e2", "#b87333", "#ffd700"];

    function levelColor(level) {
        const hue = ((level - 1) * 47) % 360;
        return `hsl(${hue}, 85%, 55%)`;
    }
    function confettiPalette(level) {
        const p = levelColor(level);
        return [p, levelColor(level + 2), ...METALLIC];
    }

    function playChime() {
        try {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return;
            const ctx = new AC();
            const now = ctx.currentTime;
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((f, i) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.type = "triangle";
                o.frequency.value = f;
                g.gain.setValueAtTime(0, now);
                g.gain.linearRampToValueAtTime(0.12, now + 0.02);
                g.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
                o.connect(g);
                g.connect(ctx.destination);
                o.start(now + i * 0.07);
                o.stop(now + i * 0.07 + 0.5);
            });
            ctx.close();
        } catch (_) {}
    }
    function playCoin() {
        try {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return;
            const ctx = new AC();
            const now = ctx.currentTime;
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = "square";
            o.frequency.setValueAtTime(900, now);
            o.frequency.exponentialRampToValueAtTime(2200, now + 0.08);
            g.gain.setValueAtTime(0.1, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            o.connect(g);
            g.connect(ctx.destination);
            o.start(now);
            o.stop(now + 0.15);
            ctx.close();
        } catch (_) {}
    }

    function runConfetti(durationMs) {
        const canvas = document.createElement("canvas");
        canvas.id = "tmLuConfetti";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        let w, h;
        function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
        resize();
        window.addEventListener("resize", resize);

        const palette = confettiPalette(parseInt(canvas.dataset.level || "1", 10) || 1);
        const particles = [];
        const particleCount = 140;

        for (let i = 0; i < particleCount; i++) {
            const left = i % 2 === 0;
            const x = left ? w * 0.10 : w * 0.90;
            const vx = left ? (2 + Math.random() * 4) : -(2 + Math.random() * 4);
            particles.push({
                x, y: h + 20,
                vx: vx + (Math.random() - 0.5),
                vy: -(6 + Math.random() * 6),
                size: Math.random() * 7 + 3,
                color: palette[Math.floor(Math.random() * palette.length)],
                rot: Math.random() * 360,
                vrot: (Math.random() - 0.5) * 10,
                gravity: 0.15 + Math.random() * 0.15,
                life: 1.0,
                decay: 0.004 + Math.random() * 0.006
            });
        }

        let stopped = false;
        setTimeout(() => { stopped = true; }, durationMs);

        function draw() {
            ctx.clearRect(0, 0, w, h);
            let alive = 0;
            for (const p of particles) {
                if (p.life <= 0) continue;
                alive++;
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.rot += p.vrot;
                p.life -= p.decay;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rot * Math.PI) / 180);
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            }
            if (alive > 0 && !stopped) requestAnimationFrame(draw);
            else {
                ctx.clearRect(0, 0, w, h);
                canvas.remove();
                window.removeEventListener("resize", resize);
            }
        }
        requestAnimationFrame(draw);
    }

    function flyCoins(targetBadge, count) {
        const card = document.getElementById("tmLuCard");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        for (let i = 0; i < Math.min(count, 8); i++) {
            const coin = document.createElement("div");
            coin.textContent = "🪙";
            coin.style.position = "fixed";
            coin.style.left = cx + "px";
            coin.style.top = cy + "px";
            coin.style.fontSize = "18px";
            coin.style.pointerEvents = "none";
            coin.style.zIndex = "100001";
            document.body.appendChild(coin);
            const br = targetBadge.getBoundingClientRect();
            const tx = br.left + br.width / 2 + (Math.random() - 0.5) * 10;
            const ty = br.top + br.height / 2 + (Math.random() - 0.5) * 10;
            coin.animate([
                { transform: "translate(0,0) scale(1)", opacity: 1 },
                { transform: `translate(${tx - cx}px, ${ty - cy}px) scale(0.35)`, opacity: 0 }
            ], {
                duration: 600 + i * 60,
                easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
            });
            setTimeout(() => coin.remove(), 700 + i * 60);
        }
    }

    function ensureCoinBadge() {
        let badge = document.querySelector(".tm-coin-badge");
        if (!badge) {
            const nav = document.querySelector(".navbar .container");
            if (nav) {
                badge = document.createElement("span");
                badge.className = "tm-coin-badge";
                badge.textContent = "0";
                nav.appendChild(badge);
            }
        }
        return badge;
    }

    function updateCoinBadge(badge, value) {
        if (!badge) return;
        badge.textContent = Number(value || 0);
    }

    function unlocksHTML(level) {
        const unlocks = Storage.featureUnlocksForLevel ? Storage.featureUnlocksForLevel(level) : [];
        if (!unlocks.length) return `<li class="tm-none">No new features this level.</li>`;
        return unlocks.map(u => `<li>${u.title}<span class="small d-block" style="color:#94a3b8;font-weight:400;">${u.body}</span></li>`).join("");
    }

    function show(opts = {}) {
        const from = Number(opts.from || 1);
        const to = Number(opts.to || from + 1);
        const coins = Number(opts.coins || 0);
        const user = Storage.getCurrentUser ? Storage.getCurrentUser() : null;

        return new Promise((resolve) => {
            playChime();

            const overlay = document.createElement("div");
            overlay.id = "tmLevelUpOverlay";
            overlay.className = "tm-show";
            const fromEmoji = LEVEL_EMOJI[Math.min(Math.max(from - 1, 0), 9)];
            const toEmoji = LEVEL_EMOJI[Math.min(Math.max(to - 1, 0), 9)];

            overlay.innerHTML = `
                <canvas id="tmLuConfetti" style="display:none"></canvas>
                <div id="tmLuCard">
                    <div id="tmLuStage">
                        <div id="tmLuAvatar">${fromEmoji}</div>
                        <div id="tmLuGlow"></div>
                    </div>
                    <div id="tmLuTitle">LEVEL ${from} COMPLETED!</div>
                    <div id="tmLuSub">Unlocked Level ${to}!</div>
                    <div id="tmLuCoins">+${coins} Tech Coins</div>
                    <div id="tmLuCoinCounter">0</div>
                    <ul id="tmLuUnlocks">
                        <h6>Newly Unlocked</h6>
                        ${unlocksHTML(to)}
                    </ul>
                    <button id="tmLuClaim" class="tm-glowing">CLAIM &amp; CONTINUE</button>
                </div>
            `;
            document.body.appendChild(overlay);

            const confettiCanvas = document.getElementById("tmLuConfetti");
            confettiCanvas.style.display = "block";
            confettiCanvas.className = "tm-show";
            confettiCanvas.dataset.level = to;
            runConfetti(3500);

            const avatar = document.getElementById("tmLuAvatar");
            const title = document.getElementById("tmLuTitle");
            const sub = document.getElementById("tmLuSub");
            const badge = ensureCoinBadge();
            updateCoinBadge(badge, Storage.getCoins ? Storage.getCoins() : 0);
            const counter = document.getElementById("tmLuCoinCounter");

            let t = 0;
            const total = 25;
            const counterTimer = setInterval(() => {
                t++;
                const v = Math.floor((coins / total) * t);
                if (counter) counter.textContent = "+" + v;
                playCoin();
                if (t >= total) {
                    if (counter) counter.textContent = "+" + coins;
                    clearInterval(counterTimer);
                }
            }, 32);

            setTimeout(() => {
                flyCoins(badge, coins);
            }, 500);

            setTimeout(() => {
                avatar.classList.add("tm-pulse");
                setTimeout(() => {
                    avatar.classList.remove("tm-pulse");
                    avatar.classList.add("tm-swap");
                    overlay.classList.add("tm-swapped");
                }, 600);
                setTimeout(() => {
                    avatar.textContent = toEmoji;
                    avatar.classList.remove("tm-swap");
                    avatar.classList.add("tm-swap-back");
                    title.textContent = "UNLOCKED LEVEL " + to + "!";
                }, 1100);
            }, 900);

            document.getElementById("tmLuClaim").addEventListener("click", () => {
                try { overlay.remove(); } catch (_) {}
                const conf = document.getElementById("tmLuConfetti");
                if (conf) conf.remove();
                resolve();
            });
        });
    }

    function pending() {
        try { return JSON.parse(localStorage.getItem("tm_pendingLevelUp") || "null"); } catch (_) { return null; }
    }
    function clearPending() {
        try { localStorage.removeItem("tm_pendingLevelUp"); } catch (_) {}
    }

    return { show, pending, clearPending, ensureCoinBadge, updateCoinBadge };
})();
