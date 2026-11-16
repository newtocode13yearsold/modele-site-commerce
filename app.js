/* ==========================================================================
   APP.JS — construit la page à partir de config.js.
   Pas besoin de toucher à ce fichier pour personnaliser un commerce.
   ========================================================================== */
(function () {
  'use strict';

  // ---------- Icônes (traits fins, même style partout) ----------
  const ICONS = {
    wheat: '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
    flower: '<circle cx="12" cy="12" r="3"/><path d="M12 9a3 3 0 1 1 3-3c0 1.66-1.34 3-3 3Zm0 0a3 3 0 1 0-3-3c0 1.66 1.34 3 3 3Z"/><path d="M15 12a3 3 0 1 1 3 3c-1.66 0-3-1.34-3-3Zm0 0a3 3 0 1 0 3-3c-1.66 0-3 1.34-3 3Z"/><path d="M12 15a3 3 0 1 1-3 3c0-1.66 1.34-3 3-3Zm0 0a3 3 0 1 0 3 3c0-1.66-1.34-3-3-3Z"/><path d="M9 12a3 3 0 1 1-3-3c1.66 0 3 1.34 3 3Zm0 0a3 3 0 1 0-3 3c1.66 0 3-1.34 3-3Z"/>',
    scissors: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    route: '<path d="M3 11 22 2l-9 19-2-8-8-2Z"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.12a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2Z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>'
  };
  const ic = (name, cls) =>
    `<svg class="ic ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.sparkles}</svg>`;

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (id) => document.getElementById(id);

  // Une photo, ou un emplacement « Votre photo ici » si le champ est vide.
  function photo(src, label, size, cls) {
    if (src) return `<img class="photo ${cls || ''}" src="${esc(src)}" alt="${esc(label)}" loading="lazy">`;
    return `<div class="photo ph ${cls || ''}" role="img" aria-label="Emplacement photo : ${esc(label)}">
      <div class="ph-in">${ic('camera')}<span class="ph-label">${esc(label)}</span>${size ? `<span class="ph-size">${esc(size)}</span>` : ''}</div>
    </div>`;
  }
  const stars = (n) => `<span class="stars" aria-label="${n} sur 5">${'★'.repeat(n)}<span class="stars-off">${'★'.repeat(5 - n)}</span></span>`;

  // ---------- Horaires ----------
  const DAYS = [['lun', 'Lundi'], ['mar', 'Mardi'], ['mer', 'Mercredi'], ['jeu', 'Jeudi'], ['ven', 'Vendredi'], ['sam', 'Samedi'], ['dim', 'Dimanche']];
  const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const fmtT = (t) => { const [h, m] = t.split(':'); return `${Number(h)} h${m === '00' ? '' : ' ' + m}`; };
  const fmtDay = (ranges) => (ranges && ranges.length)
    ? ranges.map(([a, b]) => `${fmtT(a)} – ${fmtT(b)}`).join(' · ')
    : 'Fermé';

  function openStatus(hours) {
    const now = new Date();
    const today = (now.getDay() + 6) % 7;
    const mins = now.getHours() * 60 + now.getMinutes();
    for (const [a, b] of hours[DAYS[today][0]] || []) {
      if (mins >= toMin(a) && mins < toMin(b)) return { open: true, text: `Ouvert · ferme à ${fmtT(b)}` };
    }
    for (let d = 0; d < 7; d++) {
      const di = (today + d) % 7;
      for (const [a] of hours[DAYS[di][0]] || []) {
        if (d === 0 && toMin(a) <= mins) continue;
        const when = d === 0 ? '' : d === 1 ? ' demain' : ' ' + DAYS[di][1].toLowerCase();
        return { open: false, text: `Fermé · ouvre${when} à ${fmtT(a)}` };
      }
    }
    return { open: false, text: 'Fermé' };
  }

  const initials = (name) => name.replace(/^(L[’']|Le |La |Les )/i, '').split(/\s+/).filter((w) => /^\p{Lu}/u.test(w)).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const telHref = (p) => 'tel:' + String(p).replace(/[^\d+]/g, '');
  const mapsHref = (s) => `https://www.google.com/maps/dir/?api=1&destination=${s.coords[0]},${s.coords[1]}`;

  // ---------- Rendu ----------
  function render(s) {
    const r = document.documentElement.style;
    r.setProperty('--primary', s.colors.primary);
    r.setProperty('--accent', s.colors.accent);
    r.setProperty('--paper', s.colors.paper);
    r.setProperty('--ink', s.colors.ink);
    r.setProperty('--font-head', `'${s.font || 'Fraunces'}', Georgia, serif`);
    document.title = `${s.name} · ${s.type}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = `${s.name} — ${s.tagline} ${s.address}, ${s.city}.`;

    const st = openStatus(s.hours);
    const tel = telHref(s.phone);

    // En-tête
    $('brand').innerHTML = (s.logo
      ? `<img class="brand-logo" src="${esc(s.logo)}" alt="">`
      : `<span class="brand-mark">${esc(initials(s.name))}</span>`) +
      `<span class="brand-txt"><strong>${esc(s.name)}</strong><small>${esc(s.type.split('·')[0].trim())}</small></span>`;
    const links = [['#produits', s.products.navLabel], ['#apropos', 'À propos'], ['#galerie', 'Galerie'], ['#avis', 'Avis'], ['#horaires', 'Horaires & accès']];
    $('nav').innerHTML = links.map(([h, l]) => `<a href="${h}">${esc(l)}</a>`).join('') +
      `<a class="nav-call" href="${tel}">${ic('phone')} ${esc(s.phone)}</a>`;
    $('headerCall').href = tel;
    $('headerCall').innerHTML = `${ic('phone')}<span>${esc(s.phone)}</span>`;
    $('burger').innerHTML = ic('menu');

    // Haut de page
    $('hero').innerHTML = `
      <div class="hero-txt">
        <span class="eyebrow">${esc(s.type)}</span>
        <h1>${esc(s.tagline)}</h1>
        <p class="lead">${esc(s.intro)}</p>
        <div class="hero-btns">
          <a class="btn" href="#produits">${esc(s.products.navLabel)} ${ic('arrow')}</a>
          <a class="btn btn-ghost" href="#horaires">${ic('pin')} Nous trouver</a>
        </div>
        ${s.rating ? `<div class="trust">${stars(5)}<span><strong>${esc(s.rating.score)}/5</strong> · ${esc(s.rating.count)} avis ${esc(s.rating.source)}</span></div>` : ''}
      </div>
      <div class="hero-media">
        <div class="hero-blob" aria-hidden="true"></div>
        ${photo(s.heroPhoto, s.heroPhotoLabel, 'Format conseillé : 1200 × 1500 px', 'hero-photo')}
        <a class="status-card ${st.open ? 'is-open' : ''}" href="#horaires">
          <span class="dot"></span><span><strong>${esc(st.text.split(' · ')[0])}</strong><small>${esc(st.text.split(' · ')[1] || 'Voir les horaires')}</small></span>
        </a>
        <div class="since-card"><strong>${esc(s.about.since)}</strong><small>depuis</small></div>
      </div>`;

    // Points forts
    $('highlights').innerHTML = s.highlights.map((h) => `
      <div class="hl"><span class="hl-ic">${ic(h.icon)}</span><div><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div></div>`).join('');

    // Produits
    $('produits').innerHTML = `
      <div class="sec-head"><span class="kicker">${esc(s.products.navLabel)}</span><h2>${esc(s.products.title)}</h2><p>${esc(s.products.subtitle)}</p></div>
      <div class="cards">${s.products.items.map((p) => `
        <article class="card">
          <div class="card-media">${photo(p.photo, 'Photo : ' + p.name, '800 × 600 px')}${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ''}</div>
          <div class="card-body"><div class="card-top"><h3>${esc(p.name)}</h3><span class="price">${esc(p.price)}</span></div><p>${esc(p.desc)}</p></div>
        </article>`).join('')}
      </div>`;

    // À propos
    $('apropos').innerHTML = `<div class="wrap about">
      <div class="about-media">${photo(s.about.photo, s.about.photoLabel, '1000 × 1200 px')}
        <div class="about-badge"><strong>${esc(s.about.since)}</strong><span>${esc(s.about.sinceLabel)}</span></div></div>
      <div class="about-txt"><span class="kicker">À propos</span><h2>${esc(s.about.title)}</h2>
        ${s.about.text.map((t) => `<p>${esc(t)}</p>`).join('')}
        <p class="signature">— ${esc(s.about.signature)}</p></div></div>`;

    // Galerie
    $('galerie').innerHTML = `
      <div class="sec-head"><span class="kicker">Galerie</span><h2>${esc(s.gallery.title)}</h2><p>${esc(s.gallery.subtitle)}</p></div>
      <div class="gallery">${s.gallery.items.map((g, i) => `<figure class="g g${i + 1}">${photo(g.photo, g.label)}</figure>`).join('')}</div>`;

    // Avis
    $('avis').innerHTML = `
      <div class="sec-head"><span class="kicker">Avis clients</span><h2>${esc(s.reviews.title)}</h2>
        ${s.rating ? `<p>${stars(5)} <strong>${esc(s.rating.score)}/5</strong> sur ${esc(s.rating.count)} avis ${esc(s.rating.source)}</p>` : ''}</div>
      <div class="reviews">${s.reviews.items.map((v) => `
        <blockquote class="review">${stars(v.stars)}<p>« ${esc(v.text)} »</p>
          <footer><span class="avatar">${esc(v.name[0])}</span>${esc(v.name)}</footer></blockquote>`).join('')}
      </div>`;

    // Horaires & accès
    const todayIdx = (new Date().getDay() + 6) % 7;
    const [lat, lon] = s.coords;
    const bbox = [lon - 0.006, lat - 0.0032, lon + 0.006, lat + 0.0032].join(',');
    $('horaires').innerHTML = `
      <div class="sec-head"><span class="kicker">Horaires & accès</span><h2>Venez nous voir</h2></div>
      <div class="visit">
        <div class="visit-card">
          <div class="open-pill ${st.open ? 'is-open' : ''}"><span class="dot"></span>${esc(st.text)}</div>
          <ul class="hours">${DAYS.map(([k, l], i) => `<li class="${i === todayIdx ? 'today' : ''}${(s.hours[k] || []).length ? '' : ' closed'}"><span>${l}${i === todayIdx ? ' <em>aujourd’hui</em>' : ''}</span><span>${fmtDay(s.hours[k])}</span></li>`).join('')}</ul>
          ${s.hoursNote ? `<p class="note">${esc(s.hoursNote)}</p>` : ''}
          <div class="contact-lines">
            <a href="${mapsHref(s)}" target="_blank" rel="noopener">${ic('pin')}<span>${esc(s.address)}<br>${esc(s.city)}</span></a>
            <a href="${tel}">${ic('phone')}<span>${esc(s.phone)}</span></a>
            <a href="mailto:${esc(s.email)}">${ic('mail')}<span>${esc(s.email)}</span></a>
          </div>
        </div>
        <div class="map-card">
          <iframe title="Plan d’accès" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}"></iframe>
          <a class="btn map-btn" href="${mapsHref(s)}" target="_blank" rel="noopener">${ic('route')} Itinéraire</a>
        </div>
      </div>`;

    // Bandeau final
    $('contact').innerHTML = `<div class="wrap cta-in">
      <div><h2>${esc(s.cta.title)}</h2><p>${esc(s.cta.text)}</p></div>
      <div class="cta-btns"><a class="btn btn-light" href="${tel}">${ic('phone')} ${esc(s.cta.button)}</a>
        <a class="btn btn-outline-light" href="mailto:${esc(s.email)}">${ic('mail')} Écrire un email</a></div></div>`;

    // Pied de page
    const soc = s.socials || {};
    $('footer').innerHTML = `<div class="wrap footer-in">
      <div class="f-brand"><strong>${esc(s.name)}</strong><span>${esc(s.address)}, ${esc(s.city)}</span></div>
      <div class="f-social">
        ${soc.instagram ? `<a href="${esc(soc.instagram)}" aria-label="Instagram">${ic('instagram')}</a>` : ''}
        ${soc.facebook ? `<a href="${esc(soc.facebook)}" aria-label="Facebook">${ic('facebook')}</a>` : ''}
      </div>
      <div class="f-legal">© ${new Date().getFullYear()} ${esc(s.name)} · <a href="#">Mentions légales</a></div></div>`;

    // Barre d'appel (téléphone)
    $('callbar').innerHTML = `<a href="${tel}">${ic('phone')} Appeler</a><a href="${mapsHref(s)}" target="_blank" rel="noopener">${ic('route')} Itinéraire</a>`;

    observeReveal();
  }

  // ---------- Petites animations à l'apparition ----------
  let io;
  function observeReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((e) => e.classList.add('in')); return;
    }
    if (!io) io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => { if (!e.classList.contains('in')) io.observe(e); });
  }

  // ---------- Menu mobile ----------
  const burger = $('burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    burger.innerHTML = ic(open ? 'close' : 'menu');
  });
  $('nav').addEventListener('click', (e) => {
    if (e.target.closest('a') && document.body.classList.contains('menu-open')) burger.click();
  });
  window.addEventListener('scroll', () => document.body.classList.toggle('scrolled', scrollY > 8), { passive: true });

  // ---------- Démo : choisir un modèle ----------
  const BASE = window.SITE;
  const ALL = Object.assign({ [BASE.id || 'base']: BASE }, BASE.demo ? (window.PRESETS || {}) : {});
  const params = new URLSearchParams(location.search);
  let current = BASE.demo && ALL[params.get('modele')] ? params.get('modele') : (BASE.id || 'base');

  function renderDemo() {
    const box = $('demo');
    if (!BASE.demo) { box.hidden = true; return; }
    box.hidden = false;
    const isOpen = box.classList.contains('open');
    box.innerHTML = `
      <button class="demo-toggle" aria-expanded="${isOpen}">${ic('palette')}<span>Modèle : <strong>${esc(ALL[current].menuLabel || ALL[current].name)}</strong></span></button>
      <div class="demo-panel">
        <p class="demo-title">Site de démonstration</p>
        <p class="demo-sub">Chaque commerce reçoit ses propres photos, textes, couleurs et horaires.</p>
        <div class="demo-list">${Object.keys(ALL).map((k) => `
          <button data-k="${k}" class="${k === current ? 'on' : ''}"><span class="sw" style="background:${ALL[k].colors.primary};box-shadow:inset -9px 0 0 ${ALL[k].colors.accent}"></span>${esc(ALL[k].menuLabel || ALL[k].name)}</button>`).join('')}
        </div>
      </div>`;
    box.querySelector('.demo-toggle').onclick = () => { box.classList.toggle('open'); renderDemo(); };
    box.querySelectorAll('[data-k]').forEach((b) => b.onclick = () => {
      current = b.dataset.k;
      const u = new URL(location.href); u.searchParams.set('modele', current);
      history.replaceState(null, '', u);
      render(ALL[current]); renderDemo();
    });
  }

  render(ALL[current]);
  renderDemo();
  // Le statut « ouvert / fermé » se met à jour toute seule chaque minute.
  let lastStatus = openStatus(ALL[current].hours).text;
  setInterval(() => {
    const now = openStatus(ALL[current].hours).text;
    if (now !== lastStatus) { lastStatus = now; render(ALL[current]); }
  }, 60000);
})();
