/* ============================================================
   NILEP.XYZ — MAIN JS
   main.js — Scroll-triggered header, body lock utility,
             smooth anchor scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Header scroll behaviour ─────────────────────────────── */
  const header = document.getElementById('globalHeader');

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on load so state is correct immediately
  }

  /* ── Body scroll lock helpers (used by nav.js) ───────────── */
  window.lockBody   = () => { document.body.style.overflow = 'hidden'; };
  window.unlockBody = () => { document.body.style.overflow = ''; };

  /* ── Smooth scroll for any on-page anchor links ──────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
