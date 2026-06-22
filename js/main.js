/* CLEO Beverages — Interaction Layer
   - Preloader
   - Nav scroll state + mobile menu
   - IntersectionObserver reveals (with stagger via data-delay)
   - Lucide icon hydration
*/

(function () {
  'use strict';

  // ---------- Lucide Icons ----------
  function hydrateIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // ---------- Preloader ----------
  window.addEventListener('load', function () {
    var pre = document.getElementById('preloader');
    if (!pre) return;
    setTimeout(function () { pre.classList.add('is-done'); }, 650);
  });

  // ---------- Dynamic Year ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Nav Scroll State ----------
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 30) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile Menu ----------
  var burger = document.getElementById('navBurger');
  var mobile = document.getElementById('mobileMenu');
  function closeMenu() {
    if (!burger || !mobile) return;
    burger.classList.remove('is-open');
    mobile.classList.remove('is-open');
    mobile.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (burger && mobile) {
    burger.addEventListener('click', function () {
      var open = burger.classList.toggle('is-open');
      mobile.classList.toggle('is-open', open);
      mobile.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close menu when clicking a link inside it
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // ---------- Reveal on Scroll (Animations) ----------
  var els = document.querySelectorAll('[data-reveal]');
  els.forEach(function (el) {
    var d = parseInt(el.getAttribute('data-delay') || '0', 10);
    el.style.setProperty('--delay', d);
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    
    els.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    els.forEach(function (el) { el.classList.add('is-revealed'); });
  }

  // ---------- Smooth-Scroll Offset for Fixed Nav ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      // Offset by 80px to account for the fixed navigation bar
      var top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Hydrate icons after DOM is ready & after Lucide script loads
  if (document.readyState !== 'loading') hydrateIcons();
  document.addEventListener('DOMContentLoaded', hydrateIcons);
  window.addEventListener('load', hydrateIcons);
})();
