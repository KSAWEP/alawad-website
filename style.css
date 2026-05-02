// ==================== Loading Screen ====================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader-screen');
    if (loader) loader.classList.add('hidden');
  }, 1000); // ثانية واحدة بالضبط
});

// ==================== Header Scroll Effect ====================
const header = document.getElementById('header');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');
const logoTextAr = document.getElementById('logoTextAr');
const logoTextEn = document.getElementById('logoTextEn');
const logoIcon = document.getElementById('logoIcon');
const menuBtn = document.getElementById('menuBtn');
const topbar = document.getElementById('topbar');

function applyDarkNav() {
  if (!mainNav) return;
  mainNav.classList.add('bg-white', 'shadow-md');
  mainNav.classList.remove('bg-transparent');
  navLinks.forEach(l => {
    l.classList.add('text-navy-900');
    l.classList.remove('text-white');
  });
  if (logoTextAr) { logoTextAr.classList.add('text-navy-900'); logoTextAr.classList.remove('text-white'); }
  if (logoTextEn) { logoTextEn.classList.add('text-gray-500'); logoTextEn.classList.remove('text-white'); }
  if (logoIcon) { logoIcon.classList.add('text-ice'); logoIcon.classList.remove('text-white'); }
  if (menuBtn) { menuBtn.classList.add('text-navy-900'); menuBtn.classList.remove('text-white'); }
  if (topbar) topbar.classList.add('hidden');
}

function applyLightNav() {
  if (!mainNav) return;
  mainNav.classList.remove('bg-white', 'shadow-md');
  mainNav.classList.add('bg-transparent');
  navLinks.forEach(l => {
    l.classList.remove('text-navy-900');
    l.classList.add('text-white');
  });
  if (logoTextAr) { logoTextAr.classList.remove('text-navy-900'); logoTextAr.classList.add('text-white'); }
  if (logoTextEn) { logoTextEn.classList.remove('text-gray-500'); logoTextEn.classList.add('text-white'); }
  if (logoIcon) { logoIcon.classList.remove('text-ice'); logoIcon.classList.add('text-white'); }
  if (menuBtn) { menuBtn.classList.remove('text-navy-900'); menuBtn.classList.add('text-white'); }
  if (topbar) topbar.classList.remove('hidden');
}

// إذا كانت الصفحة داخلية (مش الرئيسية) - الهيدر يكون أبيض من البداية
const isInnerPage = document.body.dataset.page !== 'home';

if (isInnerPage) {
  applyDarkNav();
} else {
  applyLightNav();
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) applyDarkNav();
    else applyLightNav();
  });
}

// ==================== Mobile Menu ====================
if (menuBtn) {
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ==================== Mobile Accordion ====================
document.querySelectorAll('.mobile-accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parent = trigger.closest('.mobile-accordion');
    parent.classList.toggle('open');
  });
});

// ==================== Reveal Animation ====================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
