
Action: file_editor create /app/cleo-site/js/main.js --file-text "/* CLEO Beverages — interaction layer
   - Preloader
   - Nav scroll state + mobile menu
   - IntersectionObserver reveals (with stagger via data-delay)
   - Contact form (mailto + WhatsApp handoff for static deploy)
   - Lucide icon hydration
*/

(function () {
  'use strict';

  // ---------- Lucide ----------
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

  // ---------- Year ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Nav scroll state ----------
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 30) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile menu ----------
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
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // ---------- Reveal on scroll ----------
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
    els.forEach(function (el) { el.classList.add('is-revealed'); });
  }

  // ---------- Toast helper ----------
  var toastEl = document.getElementById('toast');
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-visible');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.classList.remove('is-visible'); }, 3200);
  }

  // ---------- Contact form (static handoff) ----------
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var phone = (data.get('phone') || '').toString().trim();
      var email = (data.get('email') || '').toString().trim();
      var interest = (data.get('interest') || '').toString().trim();
      var message = (data.get('message') || '').toString().trim();

      if (!name || !phone) {
        toast('Please add your name and phone.');
        return;
      }

      var body = [
        'Hello CLEO Beverages,',
        '',
        'Name: ' + name,
        'Phone: ' + phone,
        'Email: ' + (email || '—'),
        'Interest: ' + interest,
        '',
        'Message:',
        message || '—'
      ].join('\n');

      // Email handoff — replace {{EMAIL}} with your address before deploy.
      var mail = 'mailto:{{EMAIL}}'
        + '?subject=' + encodeURIComponent('Enquiry from cleobeverages.com — ' + name)
        + '&body=' + encodeURIComponent(body);

      window.location.href = mail;
      toast('Opening your email app…');
      form.reset();
    });
  }

  // ---------- Smooth-scroll offset for fixed nav ----------
  document.querySelectorAll('a[href^=\"#\"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Icons after DOM is ready & after Lucide script loads
  if (document.readyState !== 'loading') hydrateIcons();
  document.addEventListener('DOMContentLoaded', hydrateIcons);
  window.addEventListener('load', hydrateIcons);
})();
"
Observation: Create successful: /app/cleo-site/js/main.js
