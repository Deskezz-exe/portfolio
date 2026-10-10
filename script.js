(function () {
  const root = document.documentElement;
  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const grid = document.getElementById('projects-grid');
  const empty = document.getElementById('projects-empty');
  const filters = document.getElementById('filters');
  const hero = document.getElementById('hero');
  
  document.getElementById('year').textContent = new Date().getFullYear();

  // Тема
  const themeColor = document.querySelector('meta[name="theme-color"]');
  function setTheme(t) {
    root.dataset.theme = t;
    themeColor.content = t === 'dark' ? '#0f100e' : '#f3f3ef';
    try { localStorage.setItem('theme', t); } catch (e) {}
  }
  setTheme(root.dataset.theme);
  document.querySelectorAll('[data-theme-set]').forEach((b) =>
    b.addEventListener('click', () => setTheme(b.dataset.themeSet))
  );

  // Появление хиро
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-ready')));

  // Парение ставим на паузу, когда хиро не видно
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => hero.classList.toggle('is-paused', !e.isIntersecting)).observe(hero);
  }

  // Своё направление, размах и скорость для каждой плашки (стабильно от индекса)
  const rand = (n) => { const x = Math.sin(n * 12.9898) * 43758.5453; return x - Math.floor(x); };
  document.querySelectorAll('.float__in').forEach((el, i) => {
    const r = (k, min, max) => min + rand(i * 7 + k) * (max - min);
    const sign = (k) => (rand(i * 11 + k) > 0.5 ? 1 : -1);
    el.style.setProperty('--ay', `${(sign(1) * r(1, 8, 13)).toFixed(1)}px`);
    el.style.setProperty('--ax', `${(sign(2) * r(2, 8, 15)).toFixed(1)}px`);
    el.style.setProperty('--ar', `${(sign(3) * r(3, 1.5, 3)).toFixed(2)}deg`);
    el.style.setProperty('--tb', `${r(4, 2.9, 4.3).toFixed(2)}s`);
    el.style.setProperty('--td', `${r(5, 4.1, 6.2).toFixed(2)}s`);
    el.style.setProperty('--tt', `${r(6, 4.8, 7.8).toFixed(2)}s`);
  });

  // Каталог
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
  // Демо открываем в новой вкладке, чтобы портфолио оставалось открытым
  const target = (url) => (url ? ' target="_blank" rel="noopener"' : '');
  const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  function card(p) {
    const badge = p.status === 'live'
      ? '<span class="card__badge card__badge--live">Работает у клиента</span>'
      : '<span class="card__badge">Демо</span>';
    const preview = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`
      : `<span class="card__placeholder">${esc(p.title.charAt(0))}</span>`;
    const stack = (p.stack || []).map((s) => `<li>${esc(s)}</li>`).join('');
    const demoLabel = p.status === 'live' ? 'Открыть сайт' : 'Открыть демо';

    return `
      <article class="card reveal">
        <a class="card__preview" href="${esc(p.demo || '#')}"${target(p.demo)} tabindex="-1" aria-hidden="true">
          ${preview}${badge}
        </a>
        <div class="card__body">
          ${p.type ? `<p class="card__type">${esc(p.type)}</p>` : ''}
          <h3 class="card__title">${esc(p.title)}</h3>
          <p class="card__desc">${esc(p.description)}</p>
          ${stack ? `<ul class="card__stack">${stack}</ul>` : ''}
          <div class="card__actions">
            ${p.demo ? `<a class="btn btn--solid" href="${esc(p.demo)}"${target(p.demo)}>${demoLabel}${arrow}</a>` : ''}
            ${p.code ? `<a class="btn btn--ghost" href="${esc(p.code)}" target="_blank" rel="noopener">Код</a>` : ''}
          </div>
        </div>
      </article>`;
  }

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    : null;
  const observe = (nodes) => nodes.forEach((n) => (io ? io.observe(n) : n.classList.add('is-visible')));

  function render(category) {
    const list = category ? projects.filter((p) => p.category === category) : projects;
    grid.innerHTML = list.map(card).join('');
    observe(grid.querySelectorAll('.reveal'));
  }

  function renderFilters() {
    const cats = [...new Set(projects.map((p) => p.category).filter(Boolean))];
    if (cats.length < 2) return;
    filters.hidden = false;
    filters.innerHTML = ['Все', ...cats].map((c, i) =>
      `<button class="filter${i === 0 ? ' is-active' : ''}" type="button" role="tab" aria-selected="${i === 0}" data-cat="${i === 0 ? '' : esc(c)}">${esc(c)}</button>`
    ).join('');
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      filters.querySelectorAll('.filter').forEach((b) => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-selected', b === btn);
      });
      render(btn.dataset.cat);
    });
  }

  if (projects.length) {
    renderFilters();
    render('');
  } else {
    empty.hidden = false;
  }

  observe(document.querySelectorAll('.reveal'));
})();
