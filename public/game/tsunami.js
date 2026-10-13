/*
 * Tsunami game integration:
 * - Monetag rewarded ads only (zone 11884483). No other ad network.
 * - Telegram WebApp login.
 * - Neon-backed leaderboard + coins + referrals.
 * - Coins balance + invite button live INSIDE the leaderboard overlay (not on the play screen).
 * - Scores: each finished round's points are ADDED to the player's total on the server (queued + retried).
 * - Developer mode: unlimited hearts, ads auto-rewarded.
 * - Hearts refill automatically at the start of each new calendar day (after midnight),
 *   whether the player opens the game or not, even if it stays open past midnight.
 */
(function () {
  "use strict";

  var MONETAG_ZONE = "11884483";
  var MONETAG_FN = "show_" + MONETAG_ZONE;
  var BOT_USERNAME = "tsunamy_game_bot";
  var API = (location.hostname.indexOf("lovable.app") !== -1 || location.hostname === "localhost" ? location.origin : "https://friend-inviter-plus.lovable.app") + "/api/public/tsunami";
  var DEV_IDS = ["6672432476"];

  var state = {
    initData: "",
    user: null,
    profile: null,
    isDev: false,
    ready: false,
  };

  /* ---------------- Telegram ---------------- */

  function tg() {
    return window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
  }

  function initTelegram() {
    var w = tg();
    if (!w) return;
    try {
      w.ready();
      w.expand();
    } catch (e) {}
    state.initData = w.initData || "";
    var u = w.initDataUnsafe && w.initDataUnsafe.user;
    if (u) {
      state.user = { id: String(u.id), name: u.username || u.first_name || "Player" };
      if (DEV_IDS.indexOf(state.user.id) !== -1) enableDevMode();
    }
  }

  function referralCode() {
    var w = tg();
    var startParam =
      (w && w.initDataUnsafe && w.initDataUnsafe.start_param) ||
      new URLSearchParams(location.search).get("tgWebAppStartParam") ||
      "";
    return String(startParam).replace(/[^0-9]/g, "");
  }

  function post(path, body) {
    return fetch(API + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) throw new Error(data && data.error ? data.error : "Request failed");
        return data;
      });
    });
  }

  function sync() {
    if (!ensureInitData()) return Promise.resolve(null);
    return post("/sync", { initData: state.initData, ref: referralCode() })
      .then(function (profile) {
        state.profile = profile;
        if (profile.isDev) enableDevMode();
        renderCoins();
        if (profile.referralRewarded) {
          toast("🎉 حصلت على 500 عملة من دعوة صديقك!");
        }
        return profile;
      })
      .catch(function (err) {
        console.warn("sync failed", err);
        return null;
      });
  }

  var warnedNoTelegram = false;
  var warnedFail = false;

  function ensureInitData() {
    // Telegram may fill initData slightly after boot: always re-read it.
    if (!state.initData) {
      var w = tg();
      if (w && w.initData) initTelegram();
    }
    return state.initData;
  }

  /* ---------------- Score saving (per finished round) ----------------
   * When a round ends the game calls addRoundScore(points of that round).
   * Each round gets a unique id and is queued in localStorage, then sent to the
   * server which ADDS it to the player's total (duplicates are ignored server-side).
   * Failed sends stay in the queue and are retried every few seconds. */

  var QUEUE_KEY = "tsunami_pending_rounds";
  var flushing = false;

  function loadQueue() {
    try {
      var q = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
      return Array.isArray(q) ? q : [];
    } catch (e) {
      return [];
    }
  }

  function saveQueue(q) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    } catch (e) {}
  }

  function addRoundScore(score) {
    score = Math.floor(Number(score) || 0);
    if (score <= 0) return;
    var q = loadQueue();
    q.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8), score: score });
    saveQueue(q);
    flushQueue();
  }

  function flushQueue() {
    if (flushing) return;
    var q = loadQueue();
    if (!q.length) return;
    if (!ensureInitData()) {
      if (!warnedNoTelegram) {
        warnedNoTelegram = true;
        toast("⚠️ النقاط لا تُحفظ إلا عند فتح اللعبة من زر البوت داخل تليجرام");
      }
      return;
    }
    flushing = true;
    var item = q[0];
    post("/round", { initData: state.initData, roundId: item.id, score: item.score })
      .then(function (data) {
        var rest = loadQueue().filter(function (r) {
          return r.id !== item.id;
        });
        saveQueue(rest);
        if (!state.profile) state.profile = {};
        state.profile.coins = data.coins;
        state.profile.bestScore = data.bestScore;
        state.profile.points = data.points;
        warnedFail = false;
        renderCoins();
        flushing = false;
        if (rest.length) flushQueue();
      })
      .catch(function (err) {
        flushing = false;
        console.warn("round save failed", err);
        if (!warnedFail) {
          warnedFail = true;
          toast("⚠️ تعذر حفظ النقاط: " + (err && err.message ? err.message : "خطأ في الاتصال"));
        }
      });
  }

  /** Kept for older game code: totals are now saved per round, so this just retries the queue. */
  function submitScore() {
    flushQueue();
    return Promise.resolve(null);
  }

  function autoSaveTick() {
    flushQueue();
  }

  /* ---------------- Developer mode ---------------- */

  var devTimer = null;

  function enableDevMode() {
    if (state.isDev) return;
    state.isDev = true;
    devTimer = setInterval(function () {
      try {
        var game = window.__tsunamiGame;
        if (!game) return;
        var hearts = game.getVariables().get("CurrentHearts");
        if (hearts && hearts.getAsNumber() < 50) hearts.setNumber(999);
      } catch (e) {}
    }, 1000);
    setTimeout(function () {
      toast("👑 وضع المطور مُفعّل: لعب بلا توقف وبدون إعلانات");
    }, 1500);
  }

  /* ---------------- Monetag rewarded ads ---------------- */

  var sdkPromise = null;

  function loadMonetag() {
    if (typeof window[MONETAG_FN] === "function") return Promise.resolve();
    if (sdkPromise) return sdkPromise;
    sdkPromise = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "//libtl.com/sdk.js";
      s.async = true;
      s.setAttribute("data-zone", MONETAG_ZONE);
      s.setAttribute("data-sdk", MONETAG_FN);
      s.onload = function () {
        typeof window[MONETAG_FN] === "function"
          ? resolve()
          : reject(new Error("Monetag SDK unavailable"));
      };
      s.onerror = function () {
        sdkPromise = null;
        reject(new Error("Monetag SDK failed to load"));
      };
      document.head.appendChild(s);
    });
    return sdkPromise;
  }

  /** Resolves true only when the rewarded ad was actually watched to the end. */
  function showRewarded() {
    if (state.isDev) return Promise.resolve(true);
    return loadMonetag()
      .then(function () {
        return window[MONETAG_FN]();
      })
      .then(function () {
        return true;
      })
      .catch(function (err) {
        console.warn("Rewarded ad not completed", err);
        return false;
      });
  }

  /* ---------------- UI ---------------- */

  var coinsEl = null;

  function css(el, styles) {
    for (var k in styles) el.style[k] = styles[k];
    return el;
  }

  function toast(text) {
    var t = document.createElement("div");
    t.textContent = text;
    css(t, {
      position: "fixed",
      left: "50%",
      top: "12%",
      transform: "translateX(-50%)",
      background: "rgba(12,16,32,0.95)",
      color: "#ffd24a",
      font: "600 14px/1.4 system-ui, sans-serif",
      padding: "10px 16px",
      borderRadius: "12px",
      zIndex: 100000,
      maxWidth: "80%",
      textAlign: "center",
      boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
    });
    document.body.appendChild(t);
    setTimeout(function () {
      t.remove();
    }, 3500);
  }

  function renderCoins() {
    if (!coinsEl || !coinsEl.isConnected) return;
    var coins = state.profile ? state.profile.coins : 0;
    coinsEl.textContent = "🪙 " + coins;
  }

  function inviteLink() {
    var id = state.user ? state.user.id : "";
    return "https://t.me/" + BOT_USERNAME + "/?start=" + id;
  }

  function invite() {
    if (!state.user) {
      toast("افتح اللعبة من داخل تليجرام لدعوة أصدقائك");
      return;
    }
    var text = "العب Tsunami معي واربح 500 عملة مجاناً! 🎮💰";
    var url =
      "https://t.me/share/url?url=" +
      encodeURIComponent(inviteLink()) +
      "&text=" +
      encodeURIComponent(text);
    var w = tg();
    if (w && w.openTelegramLink) w.openTelegramLink(url);
    else window.open(url, "_blank");
  }

  function myCard() {
    var wrap = document.createElement("div");
    css(wrap, {
      width: "100%",
      maxWidth: "420px",
      background: "linear-gradient(180deg,rgba(255,210,74,0.18),rgba(255,210,74,0.07))",
      border: "1px solid rgba(255,210,74,0.45)",
      borderRadius: "14px",
      padding: "12px 14px",
      marginBottom: "14px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    });

    var top = document.createElement("div");
    css(top, { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" });

    var who = document.createElement("div");
    var name = state.profile ? state.profile.name : state.user ? state.user.name : "ضيف";
    who.textContent = "👤 " + name + (state.isDev ? " 👑" : "");
    css(who, { fontWeight: "700", color: "#ffd24a" });

    coinsEl = document.createElement("div");
    css(coinsEl, {
      background: "rgba(12,16,32,0.75)",
      color: "#ffd24a",
      padding: "6px 12px",
      borderRadius: "999px",
      fontWeight: "700",
    });
    renderCoins();

    top.appendChild(who);
    top.appendChild(coinsEl);

    var pts = document.createElement("div");
    var score = state.profile ? state.profile.points || 0 : 0;
    pts.textContent = "⭐ مجموع نقاطك: " + score;
    css(pts, { fontWeight: "600" });

    var inviteBtn = document.createElement("button");
    inviteBtn.textContent = "👥 دعوة صديق (+500)";
    css(inviteBtn, {
      background: "linear-gradient(180deg,#4f8cff,#2f5ed6)",
      color: "#fff",
      border: "none",
      padding: "11px 16px",
      borderRadius: "999px",
      fontWeight: "700",
      fontSize: "15px",
      width: "100%",
      boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
    });
    inviteBtn.onclick = invite;

    wrap.appendChild(top);
    wrap.appendChild(pts);
    wrap.appendChild(inviteBtn);
    return wrap;
  }

  function showLeaderboard() {
    var overlay = document.createElement("div");
    css(overlay, {
      position: "fixed",
      inset: "0",
      background: "rgba(4,7,18,0.92)",
      zIndex: 100001,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px 16px",
      overflowY: "auto",
      font: "500 15px/1.5 system-ui, sans-serif",
      color: "#f4f6ff",
    });

    var title = document.createElement("h2");
    title.textContent = "🏆 لوحة الصدارة";
    css(title, { margin: "0 0 16px", color: "#ffd24a" });
    overlay.appendChild(title);

    overlay.appendChild(myCard());

    var list = document.createElement("div");
    list.textContent = "جارٍ التحميل...";
    css(list, { width: "100%", maxWidth: "420px" });
    overlay.appendChild(list);

    var close = document.createElement("button");
    close.textContent = "إغلاق";
    css(close, {
      marginTop: "20px",
      padding: "10px 28px",
      borderRadius: "999px",
      border: "none",
      background: "#ffd24a",
      color: "#16110a",
      fontWeight: "700",
      fontSize: "15px",
    });
    close.onclick = function () {
      overlay.remove();
    };
    overlay.appendChild(close);
    document.body.appendChild(overlay);

    // Refresh my own saved name/points from the database each time it opens.
    sync();

    fetch(API + "/leaderboard")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        list.textContent = "";
        var players = (data && data.players) || [];
        if (!players.length) {
          list.textContent = "لا توجد نتائج بعد.";
          return;
        }
        var myId = state.user ? state.user.id : null;
        players.forEach(function (p, i) {
          var mine = myId && String(p.id) === myId;
          var row = document.createElement("div");
          css(row, {
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
            padding: "10px 12px",
            marginBottom: "6px",
            borderRadius: "10px",
            background: mine
              ? "rgba(79,140,255,0.28)"
              : i < 3
                ? "rgba(255,210,74,0.15)"
                : "rgba(255,255,255,0.06)",
            outline: mine ? "1px solid rgba(79,140,255,0.8)" : "none",
          });
          var left = document.createElement("span");
          left.textContent = i + 1 + ". " + p.name + (mine ? " (أنت)" : "");
          var right = document.createElement("span");
          right.textContent = p.score + " | 🪙 " + p.coins;
          row.appendChild(left);
          row.appendChild(right);
          list.appendChild(row);
        });
      })
      .catch(function () {
        list.textContent = "تعذر تحميل لوحة الصدارة.";
      });
  }

  /* ---------------- Daily hearts refill (every new calendar day, after midnight) ----------------
   * The game saves hearts in localStorage "GDJS_Status" as { <playerKey>: { Hearts, Date, ... } }.
   * Every second we check each saved player: if its Date is not today, hearts go back to 5.
   * This works whether the player played or not, and even if the game stays open past midnight. */

  var MAX_HEARTS = 5;

  function todayStr() {
    // Same format the game itself uses: YYYY/M/D (local time)
    var d = new Date();
    return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  }

  function refillTick() {
    if (state.isDev) return;
    try {
      var raw = localStorage.getItem("GDJS_Status");
      var data = {};
      try {
        data = raw ? JSON.parse(raw) || {} : {};
      } catch (e) {
        data = {};
      }
      var today = todayStr();
      var changed = false;
      var refilled = false;
      for (var key in data) {
        if (!Object.prototype.hasOwnProperty.call(data, key)) continue;
        var entry = data[key];
        if (!entry || typeof entry !== "object") continue;
        var dateStr = entry.Date && typeof entry.Date.str === "string" ? entry.Date.str : "";
        if (dateStr === today) continue;
        if (dateStr === "") {
          // The in-game save writes Hearts without a date: just stamp today,
          // do NOT refill (otherwise hearts would reset to 5 after every loss).
          entry.Date = { str: today };
          changed = true;
          continue;
        }
        // A date from a previous day => new day: refill hearts.
        entry.Hearts = { value: MAX_HEARTS };
        entry.Date = { str: today };
        changed = true;
        refilled = true;
      }
      if (!changed) return;
      localStorage.setItem("GDJS_Status", JSON.stringify(data));
      if (!refilled) return;

      var game = window.__tsunamiGame;
      if (!game) return;
      var vars = game.getVariables();
      var hearts = vars.get("CurrentHearts");
      var wasEmpty = hearts && hearts.getAsNumber() <= 0;
      if (hearts && hearts.getAsNumber() < MAX_HEARTS) hearts.setNumber(MAX_HEARTS);
      var lpd = vars.get("LastPlayedDate");
      if (lpd) lpd.setString(today);

      if (wasEmpty || refilled) {
        toast("❤️ يوم جديد! تم تجديد محاولاتك الخمس");
        // Reload the menu so the "Come back tomorrow" message disappears
        try {
          var scene = game.getSceneStack().getCurrentScene();
          if (scene && scene.getName() === "Menu") {
            gdjs.evtTools.runtimeScene.replaceScene(scene, "Menu", false);
          }
        } catch (e) {}
      }
    } catch (e) {}
  }

  // Run once right away (before the game reads saved hearts), then every second
  refillTick();

  /* ---------------- boot ---------------- */

  function boot() {
    initTelegram();
    sync();
    refillTick();
    setInterval(refillTick, 1000);
    setInterval(autoSaveTick, 1000);
    state.ready = true;
  }

  function loadTelegramSdk() {
    if (window.Telegram && window.Telegram.WebApp) return boot();
    var s = document.createElement("script");
    s.src = "https://telegram.org/js/telegram-web-app.js";
    s.onload = boot;
    s.onerror = boot;
    document.head.appendChild(s);
  }

  window.TsunamiGame = {
    showRewarded: showRewarded,
    submitScore: submitScore,
    addRoundScore: addRoundScore,
    showLeaderboard: showLeaderboard,
    invite: invite,
    sync: sync,
    isDev: function () {
      return state.isDev;
    },
    getUser: function () {
      return state.user;
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadTelegramSdk);
  } else {
    loadTelegramSdk();
  }
})();
