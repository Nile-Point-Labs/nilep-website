/* ============================================================
   NILEP.XYZ — NAV JS
   nav.js — Mobile overlay toggle, active link highlighting,
            escape key close
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const menuToggle   = document.getElementById('menuToggle');
  const closeMenuBtn = document.getElementById('closeMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (!menuToggle || !mobileOverlay) return; // Guard: elements must exist

  /* ── Open / close helpers ────────────────────────────────── */
  const openNav = () => {
    mobileOverlay.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    if (window.lockBody) window.lockBody();
  };

  const closeNav = () => {
    mobileOverlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (window.unlockBody) window.unlockBody();
  };

  /* ── Event listeners ─────────────────────────────────────── */
  menuToggle.addEventListener('click', openNav);

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeNav);
  }

  // Close when any mobile nav link is clicked
  document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) {
      closeNav();
    }
  });

  // Close if user clicks the overlay background directly
  mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) closeNav();
  });

  /* ── Active link highlighting ────────────────────────────── */
  const currentPath = window.location.pathname;

  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const linkPath = link.getAttribute('data-path');
    if (!linkPath) return;

    const isHome   = linkPath === '/' && (currentPath === '/' || currentPath === '');
    const isActive = isHome || (linkPath !== '/' && currentPath.startsWith(linkPath));

    if (isActive) {
      link.classList.add('active');
    }
  });

});
