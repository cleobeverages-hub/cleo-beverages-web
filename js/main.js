/* =========================================================
   CLEO Beverages — Premium Interaction Layer
   ========================================================= */

(function () {
  'use strict';

  // ---------- 1. Hydrate Lucide Icons ----------
  function hydrateIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // ---------- 2. Dynamic Navigation Bar ----------
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(5, 13, 26, 0.98)';
      nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      nav.style.padding = '15px 5%';
    } else {
      nav.style.background = 'rgba(5, 13, 26, 0.8)';
      nav.style.boxShadow = 'none';
      nav.style.padding = '20px 5%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- 3. Scroll Reveal Animations ----------
  var els = document.querySelectorAll('[data-reveal]');
  
  // Set the CSS delay variable based on HTML attributes
  els.forEach(function (el) {
    var d = parseInt(el.getAttribute('data-delay') || '0', 10);
    el.style.setProperty('--delay', d);
  });

  // Use IntersectionObserver to trigger animations when elements enter the screen
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          io.unobserve(e.target); // Stop observing once revealed
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    els.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback for older browsers
    els.forEach(function (el) { el.classList.add('is-revealed'); });
  }

  // ---------- 4. Smooth Scrolling for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      
      // Offset by 80px to prevent the fixed header from covering the title
      var top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Initialize Icons when DOM is ready
  if (document.readyState !== 'loading') hydrateIcons();
  document.addEventListener('DOMContentLoaded', hydrateIcons);
  window.addEventListener('load', hydrateIcons);
})();
