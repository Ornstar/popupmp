(() => {
"use strict";

/* ================= CONFIG ================= */
const BTN1_URL = "https://speed-ly.com/WHATSAPP_OFFICIAL_MAUPOKER";
const BTN2_URL = "https://speed-ly.com/PengaduanMemberMauPoker";
const BTN3_URL = "https://speed-ly.com/MAUPOKER_GROUP";
const BTN4_URL = "https://speed-ly.com/APK_WEB_MAUPOKER";

const SLIDES = [
  "http://plcl.me/images/Mk3qe.png",
  "http://plcl.me/images/3xzU2.jpg"
];

/* ================= STYLE ================= */
function injectStyle() {
  if (document.getElementById("popup_pasjackpot")) return;

  const style = document.createElement("style");
  style.id = "popup_pasjackpot";

  style.textContent = `

    @keyframes shineMove {
      0%   { left: -120% }
      100% { left:  120% }
    }
    @keyframes hotPulse {
      0%,100% { transform: scale(1) }
      50%      { transform: scale(1.22) }
    }

    /* Masuk */
    @keyframes popupEnter {
      0%   { opacity: 0; transform: translateY(28px) scale(0.8); }
      60%  { opacity: 1; transform: translateY(-5px)  scale(1.03); }
      80%  {             transform: translateY(2px)   scale(0.98); }
      100% { opacity: 1; transform: translateY(0)     scale(1);    }
    }

    /*
      Float — HANYA translateY dalam px bulat.
      Gerakan kecil (±6px) agar masuk dalam padding buffer 20px
      sehingga tepi GPU layer TIDAK pernah bergerak.
    */
    @keyframes popupFloat {
      0%,100% { transform: translateY(0px); }
      30%      { transform: translateY(-6px); }
      70%      { transform: translateY(6px);  }
    }

    /* Keluar */
    @keyframes popupExit {
      0%   { opacity: 1; transform: translateY(0)    scale(1);    }
      100% { opacity: 0; transform: translateY(16px) scale(0.82); }
    }

    @keyframes bgShimmer {
      0%,100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }
    @keyframes borderGlow {
      0%,100% {
        box-shadow: 0 0 18px 2px rgba(200,148,12,0.45),
                    0 24px 60px rgba(0,0,0,0.85);
      }
      50% {
        box-shadow: 0 0 38px 8px rgba(232,185,40,0.82),
                    0 24px 60px rgba(0,0,0,0.85);
      }
    }
    @keyframes btnFloat {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(-3px); }
    }
    @keyframes btnGlowPulse {
      0%,100% {
        box-shadow:
          inset 0 2px 5px rgba(255,210,100,0.22),
          inset 0 -3px 7px rgba(0,0,0,0.7),
          0 0 10px rgba(200,148,12,0.3);
      }
      50% {
        box-shadow:
          inset 0 2px 5px rgba(255,210,100,0.38),
          inset 0 -3px 7px rgba(0,0,0,0.7),
          0 0 24px rgba(232,185,40,0.75),
          0 0 44px rgba(200,148,12,0.28);
      }
    }
    @keyframes btnBgShift {
      0%,100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }
    @keyframes btnBounceIn {
      0%   { opacity: 0; transform: translateY(14px) scale(0.88); }
      70%  { opacity: 1; transform: translateY(-2px) scale(1.02); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
