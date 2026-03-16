(() => {
  "use strict";

  const LIVECHAT_URL = "https://speed-ly.com/LIVECHAT_MAUPOKER";
  const TELEGRAM_URL = "https://speed-ly.com/TELEGRAM_OFFICIAL_MAUPOKER";
  const BANNER_URL = "http://plcl.me/images/ayPpo.jpg";

  const STORAGE_KEY = "popup_kw_seen_v1";
  const STYLE_ID = "popupkw-style";
  const OVERLAY_ID = "popupkw-overlay";
  const CLOSE_BTN_ID = "popupkw-close-btn";

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      :root{
        --bg:#140c06;
        --card1:#1a0f08;
        --card2:#2a170d;
        --card3:#120904;

        --brown:#c68a3b;
        --brown-2:#a86520;
        --brown-3:#6f3f12;
        --brown-dark:#3f2108;
        --brown-soft:#f5d7a4;

        --gold:#ffd78a;
        --gold-2:#ffbf4d;
        --gold-3:#d58a1f;

        --text:#fff4e3;
        --text-soft:#f1dbc0;
      }

      @keyframes popupkw-cardFloat{
        0%,100%{transform:translateY(0)}
        50%{transform:translateY(-6px)}
      }

      @keyframes popupkw-borderGlow{
        0%,100%{
          box-shadow:
            0 24px 60px rgba(0,0,0,.42),
            0 0 0 1px rgba(255,255,255,.04) inset,
            0 0 24px rgba(214,146,43,.10)
        }
        50%{
          box-shadow:
            0 28px 70px rgba(0,0,0,.50),
            0 0 0 1px rgba(255,255,255,.06) inset,
            0 0 42px rgba(214,146,43,.24)
        }
      }

      @keyframes popupkw-shineSweep{
        0%{transform:translateX(-160%) skewX(-24deg)}
        100%{transform:translateX(220%) skewX(-24deg)}
      }

      @keyframes popupkw-pulseSoft{
        0%,100%{
          transform:scale(1);
          box-shadow:0 8px 20px rgba(0,0,0,.30), 0 0 16px rgba(255,191,77,.14)
        }
        50%{
          transform:scale(1.03);
          box-shadow:0 10px 24px rgba(0,0,0,.34), 0 0 24px rgba(255,191,77,.24)
        }
      }

      @keyframes popupkw-pulseClose{
        0%,100%{
          transform:scale(1);
          box-shadow:
            0 12px 28px rgba(0,0,0,.34),
            0 0 0 2px rgba(255,219,158,.16) inset,
            0 0 20px rgba(255,200,110,.18);
        }
        50%{
          transform:scale(1.03);
          box-shadow:
            0 16px 34px rgba(0,0,0,.40),
            0 0 0 2px rgba(255,224,170,.22) inset,
            0 0 30px rgba(255,200,110,.28);
        }
      }

      @keyframes popupkw-mistMove{
        0%{transform:translate3d(-8px,6px,0) scale(1.02); opacity:.24}
        50%{transform:translate3d(12px,-8px,0) scale(1.08); opacity:.46}
        100%{transform:translate3d(-8px,6px,0) scale(1.02); opacity:.24}
      }

      @keyframes popupkw-sparkleMove{
        0%{transform:translateY(0); opacity:.16}
        50%{transform:translateY(-8px); opacity:.34}
        100%{transform:translateY(-16px); opacity:.12}
      }

      @keyframes popupkw-popIn{
        0%{
          opacity:0;
          transform:translateY(18px) scale(.92) rotate(-2deg);
          filter:blur(2px);
        }
        55%{
          opacity:1;
          transform:translateY(-4px) scale(1.02) rotate(.8deg);
          filter:blur(0);
        }
        100%{
          opacity:1;
          transform:translateY(0) scale(1) rotate(0);
          filter:blur(0);
        }
      }

      #${OVERLAY_ID},
      #${OVERLAY_ID} *{
        box-sizing:border-box;
      }

      #${OVERLAY_ID}{
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:2147483647;
        display:block;
        width:auto;
        height:auto;
        padding:0;
        margin:0;
        background:transparent !important;
        overflow:visible;
        pointer-events:none;
        font-family:Arial,sans-serif;
      }

      #${OVERLAY_ID}::before,
      #${OVERLAY_ID}::after{
        display:none !important;
        content:none !important;
      }

      #${OVERLAY_ID} .sW{
        width:min(380px, calc(100vw - 24px));
        border-radius:22px;
        overflow:hidden;
        position:relative;
        z-index:1;
        pointer-events:auto;
        background:
          radial-gradient(120% 90% at 50% -10%, rgba(255,191,77,.14), transparent 55%),
          radial-gradient(90% 70% at 0% 100%, rgba(198,138,59,.12), transparent 60%),
          linear-gradient(180deg,var(--card1),var(--card2),var(--card3));
        border:1px solid rgba(214,146,43,.72);
        color:var(--text);
        animation:
          popupkw-popIn .75s cubic-bezier(.22,.85,.22,1),
          popupkw-cardFloat 4.8s ease-in-out .75s infinite,
          popupkw-borderGlow 3.8s ease-in-out infinite;
      }

      #${OVERLAY_ID} .sW::before{
        content:"";
        position:absolute;
        inset:8px;
        border-radius:16px;
        border:1px solid rgba(255,255,255,.05);
        pointer-events:none;
      }

      #${OVERLAY_ID} .sW::after{
        content:"";
        position:absolute;
        top:-35%;
        left:-40%;
        width:55%;
        height:170%;
        background:linear-gradient(90deg, rgba(255,255,255,0), rgba(255,222,170,.14), rgba(255,255,255,0));
        transform:skewX(-24deg);
        animation:popupkw-shineSweep 5.2s linear infinite;
        pointer-events:none;
      }

      #${OVERLAY_ID} .sIWrap{
        position:relative;
        overflow:hidden;
      }

      #${OVERLAY_ID} .sIWrap::after{
        content:"";
        position:absolute;
        inset:auto 0 0 0;
        height:80px;
        background:linear-gradient(to top, rgba(18,9,4,.88), transparent);
        pointer-events:none;
      }

      #${OVERLAY_ID} .sI{
        width:100%;
        display:block;
      }

      #${OVERLAY_ID} .sC{
        position:relative;
        padding:14px;
        overflow:hidden;
      }

      #${OVERLAY_ID} .sC::before{
        content:"";
        position:absolute;
        inset:-70px;
        background:
          radial-gradient(380px 220px at 15% 28%, rgba(255,225,180,.08), transparent 72%),
          radial-gradient(420px 260px at 85% 22%, rgba(230,180,120,.06), transparent 72%),
          radial-gradient(460px 300px at 55% 82%, rgba(255,214,150,.05), transparent 74%);
        filter:blur(16px);
        mix-blend-mode:screen;
        opacity:.68;
        pointer-events:none;
        animation:popupkw-mistMove 8s ease-in-out infinite;
      }

      #${OVERLAY_ID} .sC::after{
        content:"";
        position:absolute;
        inset:-24px;
        background:
          radial-gradient(circle at 10% 22%, rgba(255,235,205,.30) 0 1.2px, transparent 2.7px),
          radial-gradient(circle at 25% 66%, rgba(255,220,180,.18) 0 1px, transparent 2.4px),
          radial-gradient(circle at 44% 30%, rgba(255,230,190,.22) 0 1px, transparent 2.4px),
          radial-gradient(circle at 61% 74%, rgba(255,220,180,.14) 0 1px, transparent 2.4px),
          radial-gradient(circle at 78% 44%, rgba(255,235,205,.20) 0 1.1px, transparent 2.5px),
          radial-gradient(circle at 92% 20%, rgba(255,220,180,.16) 0 1px, transparent 2.4px);
        opacity:.26;
        pointer-events:none;
        animation:popupkw-sparkleMove 5.2s ease-in-out infinite;
      }

      #${OVERLAY_ID} .sC > *{
        position:relative;
        z-index:1;
      }

      #${OVERLAY_ID} .sImlek{
        text-align:center;
        padding:8px 12px;
        border-radius:999px;
        background:linear-gradient(180deg, #f0bf76 0%, #b9782f 58%, #5c300e 100%);
        color:#fff7eb;
        font-weight:800;
        font-size:11px;
        letter-spacing:.3px;
        margin-bottom:10px;
        border:1px solid rgba(255,220,170,.48);
        box-shadow:
          0 10px 24px rgba(0,0,0,.26),
          0 0 18px rgba(214,146,43,.14);
      }

      #${OVERLAY_ID} .sSub{
        text-align:center;
        font-size:10.5px;
        color:var(--text-soft);
        line-height:1.45;
        margin-bottom:12px;
        letter-spacing:.2px;
      }

      #${OVERLAY_ID} .sG{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:10px;
      }

      #${OVERLAY_ID} .sK{
        position:relative;
        padding:12px 10px;
        border-radius:14px;
        text-align:center;
        background:
          radial-gradient(130% 100% at 50% -20%, rgba(255,255,255,.08), transparent 55%),
          linear-gradient(180deg, rgba(94,51,18,.76), rgba(28,14,6,.92));
        border:1px solid rgba(214,146,43,.24);
        box-shadow:0 10px 22px rgba(0,0,0,.28), inset 0 0 0 1px rgba(255,255,255,.04);
      }

      #${OVERLAY_ID} .sKTitle{
        display:block;
        font-size:10px;
        font-weight:800;
        letter-spacing:.45px;
        color:#fff1df;
      }

      #${OVERLAY_ID} .sK b{
        display:block;
        margin:5px 0 8px;
        font-size:14px;
        color:var(--gold);
        text-shadow:0 0 12px rgba(255,191,77,.18);
      }

      #${OVERLAY_ID} .sBtn,
      #${OVERLAY_ID} .sClose{
        position:relative;
        overflow:hidden;
        isolation:isolate;
      }

      #${OVERLAY_ID} .sBtn::before,
      #${OVERLAY_ID} .sClose::before{
        content:"";
        position:absolute;
        top:-55%;
        left:-80%;
        width:72%;
        height:230%;
        border-radius:999px;
        background:linear-gradient(90deg, rgba(255,255,255,0), rgba(255,237,205,.88), rgba(255,255,255,0));
        transform:skewX(-24deg);
        opacity:.9;
        pointer-events:none;
        animation:popupkw-shineSweep 2.4s linear infinite;
      }

      #${OVERLAY_ID} .sBtn{
        display:block;
        margin-top:6px;
        padding:8px 10px;
        border-radius:999px;
        background:
          radial-gradient(120% 120% at 30% 15%, rgba(255,255,255,.24), transparent 42%),
          linear-gradient(180deg, #f2c985 0%, #c68739 58%, #6f4315 100%);
        color:#fffaf1;
        text-decoration:none;
        text-align:center;
        font-size:10.5px;
        font-weight:800;
        border:1px solid rgba(255,223,170,.72);
        box-shadow:0 8px 20px rgba(0,0,0,.30), 0 0 16px rgba(214,146,43,.16);
        animation:popupkw-pulseSoft 2.2s ease-in-out infinite;
      }

      #${OVERLAY_ID} .sFooter{
        margin-top:10px;
        text-align:center;
        font-size:10px;
        color:#f2dfc5;
        opacity:.82;
      }

      #${OVERLAY_ID} .sCloseWrap{
        display:flex;
        justify-content:center;
      }

      #${OVERLAY_ID} .sClose{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        min-width:230px;
        margin-top:12px;
        padding:12px 20px;
        text-align:center;
        background:
          radial-gradient(circle at 50% 0%, rgba(255,255,255,.30), transparent 55%),
          linear-gradient(180deg, #fff0ca 0%, #f2c375 35%, #b7772d 70%, #6b3d12 100%);
        border-radius:14px;
        cursor:pointer;
        font-size:12px;
        font-weight:900;
        letter-spacing:.4px;
        color:#2d1606;
        text-shadow:0 1px 0 rgba(255,255,255,.45);
        border:2px solid #ffd58c;
        box-shadow:
          0 14px 30px rgba(0,0,0,.34),
          0 0 0 2px rgba(255,210,120,.14) inset,
          0 0 24px rgba(255,191,77,.18);
        animation:popupkw-pulseClose 2.2s ease-in-out infinite;
        appearance:none;
        -webkit-appearance:none;
      }

      @media (max-width:420px){
        #${OVERLAY_ID} .sW{ width:min(340px, calc(100vw - 16px)); }
        #${OVERLAY_ID} .sC{ padding:11px; }
        #${OVERLAY_ID} .sG{ gap:8px; }
        #${OVERLAY_ID} .sK{ padding:10px 8px; }
        #${OVERLAY_ID} .sK b{ font-size:13px; }
        #${OVERLAY_ID} .sBtn{ font-size:10px; padding:8px; }
        #${OVERLAY_ID} .sClose{ min-width:100%; font-size:11px; padding:11px 14px; }
      }

      @media (prefers-reduced-motion: reduce){
        #${OVERLAY_ID} .sW,
        #${OVERLAY_ID} .sW::after,
        #${OVERLAY_ID} .sC::before,
        #${OVERLAY_ID} .sC::after,
        #${OVERLAY_ID} .sBtn,
        #${OVERLAY_ID} .sBtn::before,
        #${OVERLAY_ID} .sClose,
        #${OVERLAY_ID} .sClose::before{
          animation:none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function buildPopupHTML() {
    return `
      <div class="sW">
        <div class="sIWrap">
          <img class="sI" src="${BANNER_URL}" alt="Banner Popup">
        </div>

        <div class="sC">
          <div class="sImlek">Selamat Menyambut Bulan Suci RAMADHAN</div>
          <div class="sSub">JOIN KOMUNITAS MAUPOKER PRIORITAS RASAKAN MANFAATNYA</div>

          <div class="sG">
            <div class="sK">
              <span class="sKTitle">NEW MEMBER</span>
              <b>100%</b>
              <a class="sBtn" href="${LIVECHAT_URL}" target="_blank" rel="noopener">Livechat</a>
            </div>

            <div class="sK">
              <span class="sKTitle">TURBO REDEPOSIT</span>
              <b>25%</b>
              <a class="sBtn" href="${LIVECHAT_URL}" target="_blank" rel="noopener">Livechat</a>
            </div>

            <div class="sK">
              <span class="sKTitle">SPORTSBOOK WIN-LOSE</span>
              <b>AKTIF</b>
              <a class="sBtn" href="${TELEGRAM_URL}" target="_blank" rel="noopener">Telegram</a>
            </div>

            <div class="sK">
              <span class="sKTitle">POINT LOYALTY</span>
              <b>AKTIF</b>
              <a class="sBtn" href="${TELEGRAM_URL}" target="_blank" rel="noopener">Telegram</a>
            </div>
          </div>

          <div class="sFooter">© MAUPOKER GROUP</div>

          <div class="sCloseWrap">
            <button type="button" class="sClose" id="${CLOSE_BTN_ID}">
              KLIK DISINI UNTUK MENUTUP
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function closePopup(markSeen = true) {
    const overlay = document.getElementById(OVERLAY_ID);
    if (overlay) overlay.remove();

    if (markSeen) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch (_) {}
    }
  }

  function showPopup() {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch (_) {}

    if (document.getElementById(OVERLAY_ID)) return;

    injectStyle();

    const overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.innerHTML = buildPopupHTML();

    document.body.appendChild(overlay);

    const closeBtn = document.getElementById(CLOSE_BTN_ID);
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closePopup(true);
      });
    }
  }

  function init() {
    setTimeout(showPopup, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
