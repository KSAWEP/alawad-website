/* ==================== الخطوط ==================== */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&family=Tajawal:wght@300;400;500;700&family=Poppins:wght@600&display=swap');

/* ==================== المتغيرات ==================== */
:root {
  --navy-50:  #E8EEF5;
  --navy-100: #B8C9DD;
  --navy-200: #88A3C5;
  --navy-400: #3D6FA5;
  --navy-600: #1B5FAA;
  --navy-800: #0A1F3D;
  --navy-900: #061530;
  --ice: #1B5FAA;
}

/* ==================== أساسيات ==================== */
* { -webkit-font-smoothing: antialiased; }
body { font-family: 'Tajawal', sans-serif; }
h1, h2, h3, h4, .display { font-family: 'Cairo', serif; }

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: var(--ice); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--navy-800); }

html { scroll-behavior: smooth; }

/* ==================== شاشة الـ Loading ==================== */
#loader-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(135deg, #061530 0%, #0A1F3D 50%, #1B5FAA 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}
#loader-screen.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* ندفة الثلج فوق اللودر */
.loader-snowflake {
  width: 80px;
  height: 80px;
  animation: snowflake-spin 3s linear infinite;
  opacity: 0.85;
}
@keyframes snowflake-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* اللودر الأصلي - ميكانيكا متطابقة لكن العنوان عربي + سرعة 1 ثانية */
.loader-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: auto;
  margin: 0;
  font-family: 'Cairo', "Poppins", sans-serif;
  font-size: 1.4em;
  font-weight: 700;
  user-select: none;
  color: #fff;
  scale: 1.8;
  letter-spacing: 0.05em;
}
.loader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: transparent;
  -webkit-mask: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 6px,
    black 7px,
    black 8px
  );
          mask: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 6px,
    black 7px,
    black 8px
  );
}
.loader::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 50% 50%, #88A3C5 0%, transparent 50%),
    radial-gradient(circle at 45% 45%, #1B5FAA 0%, transparent 45%),
    radial-gradient(circle at 55% 55%, #B8C9DD 0%, transparent 45%),
    radial-gradient(circle at 45% 55%, #3D6FA5 0%, transparent 45%),
    radial-gradient(circle at 55% 45%, #E8EEF5 0%, transparent 45%);
  -webkit-mask: radial-gradient(
    circle at 50% 50%,
    transparent 0%,
    transparent 10%,
    black 25%
  );
          mask: radial-gradient(
    circle at 50% 50%,
    transparent 0%,
    transparent 10%,
    black 25%
  );
  animation:
    transform-animation 0.5s infinite alternate,
    opacity-animation 1s infinite;
  animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
}
@keyframes transform-animation {
  0%   { transform: translate(-55%); }
  100% { transform: translate(55%); }
}
@keyframes opacity-animation {
  0%, 100% { opacity: 0; }
  15%      { opacity: 1; }
  65%      { opacity: 0; }
}
.loader-letter {
  display: inline-block;
  opacity: 0;
  animation: loader-letter-anim 1s infinite linear;
  z-index: 2;
}
/* تأخيرات سريعة عشان الكلمة تخلص بثانية */
.loader-letter:nth-child(1) { animation-delay: 0.025s; }
.loader-letter:nth-child(2) { animation-delay: 0.05s;  }
.loader-letter:nth-child(3) { animation-delay: 0.075s; }
.loader-letter:nth-child(4) { animation-delay: 0.10s;  }
.loader-letter:nth-child(5) { animation-delay: 0.125s; }
.loader-letter:nth-child(6) { animation-delay: 0.15s;  }
.loader-letter:nth-child(7) { animation-delay: 0.175s; }
.loader-letter:nth-child(8) { animation-delay: 0.20s;  }
.loader-letter:nth-child(9) { animation-delay: 0.225s; }
.loader-letter:nth-child(10){ animation-delay: 0.25s;  }
@keyframes loader-letter-anim {
  0%   { opacity: 0; }
  5%   {
    opacity: 1;
    text-shadow: 0 0 4px #fff;
    transform: scale(1.1) translateY(-2px);
  }
  20%  { opacity: 0.2; }
  100% { opacity: 0; }
}

/* ==================== Animations عامة ==================== */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-up { animation: fadeInUp 0.8s ease-out forwards; }
.animate-fade-in { animation: fadeIn 1.2s ease-out forwards; }
.delay-100 { animation-delay: 0.1s; opacity: 0; }
.delay-200 { animation-delay: 0.2s; opacity: 0; }
.delay-300 { animation-delay: 0.3s; opacity: 0; }
.delay-400 { animation-delay: 0.4s; opacity: 0; }
.delay-500 { animation-delay: 0.5s; opacity: 0; }

.glass {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.card-hover {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover:hover { transform: translateY(-8px); }

.snowflake-decoration { animation: snowflake-rotate 60s linear infinite; }
@keyframes snowflake-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--ice);
  font-size: 13px;
  letter-spacing: 0.3em;
  font-weight: 500;
  margin-bottom: 16px;
}
.section-label::before {
  content: '';
  width: 40px;
  height: 2px;
  background: var(--ice);
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ==================== Hero الافتراضي ==================== */
.hero-bg {
  background:
    linear-gradient(135deg, rgba(6,21,48,0.92) 0%, rgba(10,31,61,0.85) 50%, rgba(27,95,170,0.7) 100%),
    url('https://images.unsplash.com/photo-1631545806609-2dffd6db05dc?w=1920&q=80') center/cover;
}

/* Hero للصفحات الداخلية - أصغر */
.page-hero {
  background:
    linear-gradient(135deg, rgba(6,21,48,0.95) 0%, rgba(10,31,61,0.88) 100%),
    url('https://images.unsplash.com/photo-1631545806609-2dffd6db05dc?w=1920&q=80') center/cover;
  min-height: 60vh;
}

/* ==================== Mega Menu ==================== */
.mega-menu {
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  margin-top: 1px;
  width: 720px;
  max-width: 90vw;
  background: white;
  box-shadow: 0 20px 60px rgba(6, 21, 48, 0.15);
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease, margin-top 0.25s ease;
  z-index: 100;
}
.has-mega:hover .mega-menu,
.has-mega:focus-within .mega-menu {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

.mega-menu-grid {
  display: grid;
  grid-template-columns: 220px 1fr;
}
.mega-menu-side {
  background: linear-gradient(135deg, var(--navy-800), var(--navy-900));
  color: white;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
}
.mega-menu-side .mm-side-title {
  font-family: 'Cairo', serif;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
}
.mega-menu-side .mm-side-desc {
  font-size: 12px;
  color: var(--navy-100);
  line-height: 1.7;
  opacity: 0.85;
}
.mega-menu-side .mm-side-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  font-size: 13px;
  color: white;
  font-weight: 500;
  padding: 8px 14px;
  background: rgba(255,255,255,0.1);
  border-radius: 6px;
  transition: background 0.2s;
}
.mega-menu-side .mm-side-link:hover {
  background: rgba(255,255,255,0.2);
}
.mega-menu-side::before {
  content: '';
  position: absolute;
  bottom: -40px;
  left: -40px;
  width: 120px;
  height: 120px;
  border: 2px solid rgba(255,255,255,0.05);
  border-radius: 50%;
}

.mega-menu-list {
  padding: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}
.mega-menu-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 8px;
  transition: background 0.2s;
}
.mega-menu-item:hover {
  background: var(--navy-50);
}
.mega-menu-item .mm-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--navy-50);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--ice);
}
.mega-menu-item:hover .mm-icon {
  background: var(--ice);
  color: white;
}
.mega-menu-item .mm-text {
  flex: 1;
  min-width: 0;
}
.mega-menu-item .mm-title {
  font-weight: 600;
  color: var(--navy-900);
  font-size: 13px;
  margin-bottom: 2px;
}
.mega-menu-item .mm-desc {
  font-size: 11px;
  color: #6b7280;
  line-height: 1.5;
}

/* قائمة منسدلة بسيطة */
.dropdown-simple {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 1px;
  width: 240px;
  background: white;
  box-shadow: 0 20px 60px rgba(6, 21, 48, 0.15);
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease, margin-top 0.25s ease;
  z-index: 100;
}
.has-dropdown:hover .dropdown-simple,
.has-dropdown:focus-within .dropdown-simple {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}
.dropdown-simple a {
  display: block;
  padding: 12px 18px;
  color: var(--navy-900);
  font-size: 13px;
  border-bottom: 1px solid #f3f4f6;
  transition: all 0.2s;
}
.dropdown-simple a:last-child { border-bottom: none; }
.dropdown-simple a:hover {
  background: var(--navy-50);
  color: var(--ice);
  padding-right: 24px;
}

/* الصفحة النشطة */
.nav-link.active-page {
  color: var(--ice) !important;
  position: relative;
}
.nav-link.active-page::after {
  content: '';
  position: absolute;
  bottom: -2px;
  right: 16px;
  left: 16px;
  height: 2px;
  background: var(--ice);
  border-radius: 2px;
}

/* الموبايل - Accordion */
.mobile-accordion {
  border-bottom: 1px solid #f3f4f6;
}
.mobile-accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  font-weight: 500;
  color: var(--navy-900);
  background: none;
  border: none;
  text-align: right;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
}
.mobile-accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: var(--navy-50);
}
.mobile-accordion.open .mobile-accordion-content {
  max-height: 500px;
}
.mobile-accordion-content a {
  display: block;
  padding: 10px 36px;
  font-size: 13px;
  color: var(--navy-900);
  border-bottom: 1px solid rgba(255,255,255,0.5);
}
.mobile-accordion-content a:last-child { border-bottom: none; }
.mobile-accordion .acc-icon {
  transition: transform 0.3s;
}
.mobile-accordion.open .acc-icon {
  transform: rotate(180deg);
}

/* ==================== Snowflake Logo SVG ==================== */
.logo-snowflake-svg {
  width: 100%;
  height: 100%;
}
