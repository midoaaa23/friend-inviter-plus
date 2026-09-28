/*
 * Tsunami game integration:
 * - Monetag rewarded ads only (zone 11884483). No other ad network.
 * - Telegram WebApp login.
 * - Neon-backed leaderboard + coins + referrals.
 */
(function () {
  "use strict";

  var MONETAG_ZONE = "11884483";
  var MONETAG_FN = "show_" + MONETAG_ZONE;
  var BOT_USERNAME = "tsunamy_game_bot";
  var API = location.origin + "/api/public/tsunami";

  var state = {
    initData: "",
    user: null,
    profile: null,
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
    if (!state.initData) return Promise.resolve(null);
    return post("/sync", { initData: state.initData, ref: referralCode() })
      .then(function (profile) {
        state.profile = profile;
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

  function submitScore(score) {
    if (!state.initData || !score) return Promise.resolve(null);
    return post("/score", { initData: state.initData, score: Number(score) || 0 })
      .then(function (data) {
        if (state.profile) state.profile.coins = data.coins;
        renderCoins();
        return data;
      })
      .catch(function (err) {
        console.warn("score failed", err);
        return null;
      });
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
    if (!coinsEl) return;
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
        players.forEach(function (p, i) {
          var row = document.createElement("div");
          css(row, {
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
            padding: "10px 12px",
            marginBottom: "6px",
            borderRadius: "10px",
            background: i < 3 ? "rgba(255,210,74,0.15)" : "rgba(255,255,255,0.06)",
          });
          var left = document.createElement("span");
          left.textContent = i + 1 + ". " + p.name;
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

  function buildHud() {
    var hud = document.createElement("div");
    css(hud, {
      position: "fixed",
      top: "10px",
      left: "10px",
      right: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "8px",
      zIndex: 99999,
      pointerEvents: "none",
      font: "700 14px/1 system-ui, sans-serif",
    });

    coinsEl = document.createElement("div");
    css(coinsEl, {
      background: "rgba(12,16,32,0.8)",
      color: "#ffd24a",
      padding: "8px 14px",
      borderRadius: "999px",
      pointerEvents: "auto",
    });
    renderCoins();

    var inviteBtn = document.createElement("button");
    inviteBtn.textContent = "👥 دعوة أصدقاء (+500)";
    css(inviteBtn, {
      background: "linear-gradient(180deg,#4f8cff,#2f5ed6)",
      color: "#fff",
      border: "none",
      padding: "10px 16px",
      borderRadius: "999px",
      fontWeight: "700",
      fontSize: "14px",
      pointerEvents: "auto",
      boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
    });
    inviteBtn.onclick = invite;

    hud.appendChild(coinsEl);
    hud.appendChild(inviteBtn);
    document.body.appendChild(hud);
  }

  /* ---------------- boot ---------------- */

  function boot() {
    initTelegram();
    buildHud();
    sync();
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
    showLeaderboard: showLeaderboard,
    invite: invite,
    sync: sync,
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
