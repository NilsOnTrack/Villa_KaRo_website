/* ==========================================================================
   VILLA KARO — SCRIPT (V6)
   ========================================================================== */

let currentVilla = '1';
let currentLang  = detectLang();

/* --- Sprache erkennen -------------------------------------------------- */
function detectLang() {
  const stored = localStorage.getItem('villakaro.lang');
  if (stored && ['de','en','id'].includes(stored)) return stored;
  const nav = (navigator.language || 'de').slice(0, 2);
  return ['de','en','id'].includes(nav) ? nav : 'en';
}

/* --- Übersetzung nachschlagen (mit EN-Fallback für ID) ----------------- */
function t(key) {
  const dict = CONTENT.translations[currentLang] || {};
  const fallback = CONTENT.translations.en || {};
  const parts = key.split('.');
  const dig = (obj) => parts.reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
  const v = dig(dict);
  return v !== undefined ? v : (dig(fallback) ?? key);
}

/* --- Alle data-i18n-Elemente aktualisieren ----------------------------- */
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('#langSwitcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  // Re-render dynamische Sections (enthalten Text)
  renderVillaDetail();
  renderDayNight();
  renderGallery();
  renderPrices();
}

/* --- Villa-State anwenden ---------------------------------------------- */
function applyVilla() {
  document.querySelectorAll('#villaToggle button').forEach(btn => {
    const active = btn.dataset.villa === currentVilla;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active);
  });
  updateHero();
  renderVillaDetail();
  renderDayNight();
  renderGallery();
  renderPrices();
}

/* --- Hero-Bild + Headline aktualisieren -------------------------------- */
function updateHero() {
  const heroImg = CONTENT.images.hero[currentVilla];
  document.getElementById('heroBgSource').srcset = `images/${heroImg}.webp`;
  document.getElementById('heroBgImg').src = `images/${heroImg}.jpg`;
  document.getElementById('heroTitle').textContent = t(`hero.title.villa${currentVilla}`);
}

/* --- Villa-Detail (4 Räume) rendern ------------------------------------ */
function renderVillaDetail() {
  const grid = document.getElementById('tourGrid');
  if (!grid) return;
  const rooms = CONTENT.images.villaTour[currentVilla];
  const labels = t('villaDetail.rooms') || [];
  grid.innerHTML = rooms.map((img, i) => {
    const label = labels[i] || { title: '', desc: '' };
    return `
      <div class="tour-card">
        <picture>
          <source srcset="images/${img}.webp" type="image/webp">
          <img src="images/${img}.jpg" alt="${label.title}" loading="lazy">
        </picture>
        <div class="tour-overlay"><h3>${label.title}</h3><p>${label.desc}</p></div>
      </div>
    `;
  }).join('');
  document.getElementById('villaDetailEyebrow').textContent =
    `Villa KaRo ${currentVilla} · ${t('villaDetail.eyebrow')}`;
}

/* --- Tag & Nacht rendern ----------------------------------------------- */
function renderDayNight() {
  const grid = document.getElementById('dnGrid');
  if (!grid) return;
  const pairs = CONTENT.images.dayNight[currentVilla];
  const labels = (t('dayNight.labels') || {})[currentVilla] || [];
  const hint = t('dayNight.hint');
  grid.innerHTML = pairs.map((pair, i) => `
    <div class="dn-card" tabindex="0">
      <picture class="dn-day">
        <source srcset="images/${pair.day}.webp" type="image/webp">
        <img src="images/${pair.day}.jpg" alt="" loading="lazy">
      </picture>
      <picture class="dn-night">
        <source srcset="images/${pair.night}.webp" type="image/webp">
        <img src="images/${pair.night}.jpg" alt="" loading="lazy">
      </picture>
      <span class="dn-hint">${hint}</span>
      <div class="dn-label">${labels[i] || ''}</div>
    </div>
  `).join('');
  grid.querySelectorAll('.dn-card').forEach(card => {
    card.onclick = () => card.classList.toggle('active');
    card.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.classList.toggle('active'); }
    };
  });
}

/* --- Galerie rendern --------------------------------------------------- */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const images = CONTENT.images.gallery[currentVilla];
  grid.innerHTML = images.map(img => {
    const span = img.span ? ` g-${img.span}` : '';
    return `
      <div class="gallery-item${span}">
        <picture>
          <source srcset="images/${img.name}.webp" type="image/webp">
          <img src="images/${img.name}.jpg" alt="${img.alt || ''}" loading="lazy">
        </picture>
      </div>
    `;
  }).join('');
  document.getElementById('galleryTitle').textContent = `Villa KaRo ${currentVilla}`;
}

/* --- Preise rendern ---------------------------------------------------- */
function renderPrices() {
  const rate = CONTENT.rates[`villa${currentVilla}`];
  document.getElementById('mainPrice').textContent = formatIDR(rate);
  const sub = document.getElementById('mainPriceSub');
  const conv = conversionFor(currentVilla);
  if (conv) {
    sub.innerHTML = `≈ ${conv} · <span>${t('preise.perNight')}</span>`;
    sub.style.display = '';
  } else {
    sub.style.display = 'none';
  }
  document.getElementById('ratesTitle').textContent = `Villa KaRo ${currentVilla}`;
  updateAuswahlRates();
}

function conversionFor(villa) {
  if (currentLang === 'id') return null;
  const curr = currentLang === 'de' ? 'EUR' : 'USD';
  const sign = curr === 'EUR' ? '€' : '$';
  const val = CONTENT.rates.conversions[curr][`v${villa}`];
  return `${sign}${val}`;
}

function updateAuswahlRates() {
  ['1','2'].forEach(v => {
    const rate = CONTENT.rates[`villa${v}`];
    document.getElementById(`villa${v}Rate`).textContent = formatIDR(rate);
    const subEl = document.getElementById(`villa${v}RateSub`);
    const conv = conversionFor(v);
    if (conv) {
      subEl.innerHTML = `≈ ${conv} · <span>${t('villaAuswahl.perNight')}</span>`;
      subEl.style.display = '';
    } else {
      subEl.style.display = 'none';
    }
  });
}

function formatIDR(n) {
  return 'IDR ' + n.toLocaleString('de-DE');
}

/* --- Villa-Toggle (Segmented Control) ---------------------------------- */
function initToggle() {
  document.querySelectorAll('#villaToggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.villa;
      if (next === currentVilla) return;
      switchVilla(next);
    });
  });
  document.querySelectorAll('.villa-choice-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const next = card.dataset.villa;
      switchVilla(next, true);
    });
  });
}

function switchVilla(newVilla, scrollTo) {
  if (newVilla === currentVilla && !scrollTo) return;
  document.body.classList.add('villa-switching');
  setTimeout(() => {
    currentVilla = newVilla;
    applyVilla();
    setTimeout(() => {
      document.body.classList.remove('villa-switching');
      if (scrollTo) {
        document.getElementById('villa-detail').scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }, 250);
}

/* --- Sprach-Switcher --------------------------------------------------- */
function initLangSwitcher() {
  document.querySelectorAll('#langSwitcher button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('villakaro.lang', currentLang);
      applyLanguage();
    });
  });
}

/* --- Nav / Burger ------------------------------------------------------ */
function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 80));
  const toggleMenu = (open) => {
    const isOpen = open ?? !nav.classList.contains('menu-open');
    nav.classList.toggle('menu-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggleMenu());
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('menu-open')) toggleMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900 && nav.classList.contains('menu-open')) toggleMenu(false); });
}

/* --- Reveal beim Scrollen ---------------------------------------------- */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* --- Kontaktformular-Demo ---------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(t('contact.formSuccess'));
  });
}

/* --- Start ------------------------------------------------------------- */
applyLanguage();
applyVilla();
initToggle();
initLangSwitcher();
initNav();
initReveal();
initContactForm();