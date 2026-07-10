/* ==========================================================================
   VILLA KARO — SCRIPT
   Bildpfade & Content für dynamische Sections zentral in CONFIG.
   Zum Ändern eines Bildes: nur diesen Block anpassen.
   ========================================================================== */

const CONFIG = {

  // Tag & Nacht — 3 Karten mit Hover/Tap-Wechsel
  dayNight: [
    { day: 'pool_relax_02', night: 'pool_relax_night_01', label: 'Am Pool' },
    { day: 'lounge_02',     night: 'lounge_night_01',     label: 'Wohnbereich' },
    { day: 'entrance_01',   night: 'entrance_night_01',   label: 'Eingang' },
  ],

  // Galerie — 'tall' oder 'wide' machen Masonry-Effekt (Doppel-Höhe / -Breite)
  gallery: [
    { name: 'sleeping_01',         alt: 'Schlafzimmer bei Tag',   span: 'tall' },
    { name: 'garden_night_01',     alt: 'Garten bei Nacht',       span: 'wide' },
    { name: 'pool_night_01',       alt: 'Pool bei Nacht' },
    { name: 'relax_01',            alt: 'Entspannung im Grünen' },
    { name: 'sleeping_entrance',   alt: 'Zugang zum Schlafzimmer' },
    { name: 'entrance_night_02',   alt: 'Eingang bei Nacht',      span: 'wide' },
    { name: 'pool_relax_night_03', alt: 'Poolbereich bei Nacht' },
    { name: 'pool_relax_night_04', alt: 'Nächtlicher Pool',       span: 'wide' },
    { name: 'sleeping_02',         alt: 'Schlafzimmer Detail' },
    { name: 'sleeping_night_01',   alt: 'Schlafzimmer bei Nacht' },
    { name: 'sleeping_03',         alt: 'Schlafzimmer Blick' },
    { name: 'sleeping_night_02',   alt: 'Schlafzimmer bei Nacht' },
    { name: 'sleeping_04',         alt: 'Schlafzimmer Übersicht' },
  ],

};


/* --- Render: Tag & Nacht ------------------------------------------------ */
function renderDayNight() {
  const container = document.getElementById('dnGrid');
  if (!container) return;

  container.innerHTML = CONFIG.dayNight.map(item => `
    <div class="dn-card" tabindex="0">
      <picture class="dn-day">
        <source srcset="images/${item.day}.webp" type="image/webp">
        <img src="images/${item.day}.jpg" alt="${item.label} bei Tag" loading="lazy">
      </picture>
      <picture class="dn-night">
        <source srcset="images/${item.night}.webp" type="image/webp">
        <img src="images/${item.night}.jpg" alt="${item.label} bei Nacht" loading="lazy">
      </picture>
      <span class="dn-hint">Nacht</span>
      <div class="dn-label">${item.label}</div>
    </div>
  `).join('');

  container.querySelectorAll('.dn-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('active'));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('active');
      }
    });
  });
}


/* --- Render: Galerie ---------------------------------------------------- */
function renderGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  container.innerHTML = CONFIG.gallery.map(img => {
    const spanClass = img.span ? ` g-${img.span}` : '';
    return `
      <div class="gallery-item${spanClass}">
        <picture>
          <source srcset="images/${img.name}.webp" type="image/webp">
          <img src="images/${img.name}.jpg" alt="${img.alt}" loading="lazy">
        </picture>
      </div>
    `;
  }).join('');
}


/* --- Navigation --------------------------------------------------------- */
function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (!nav || !burger || !navLinks) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });

  const toggleMenu = (open) => {
    const isOpen = open ?? !nav.classList.contains('menu-open');
    nav.classList.toggle('menu-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggleMenu());

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('menu-open')) toggleMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('menu-open')) toggleMenu(false);
  });
}


/* --- Fade-In beim Scrollen --------------------------------------------- */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* --- Start -------------------------------------------------------------- */
renderDayNight();
renderGallery();
initNav();
initReveal();