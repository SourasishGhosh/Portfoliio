/* ================================================================
   main.js — Reads CONFIG and renders the entire portfolio.
   You should NOT need to edit this file.
   Edit config.js instead.
   ================================================================ */

// ── SVG Icons ────────────────────────────────────────────────────
const ICONS = {
  github:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  twitter:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  web:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  mail:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  link:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  resume:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
};

// ── Helpers ──────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

function tag(items = []) {
  return items.map(t => `<span class="tag">${t}</span>`).join('');
}

function iconLink(href, icon, label) {
  if (!href) return '';
  return `<a href="${href}" target="_blank" rel="noopener" class="icon-link" aria-label="${label}">
    ${ICONS[icon]} ${label}
  </a>`;
}

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

// ── Render Functions ─────────────────────────────────────────────

function renderNav() {
  $('nav-logo').innerHTML = `<a href="#hero" class="nav-logo">${CONFIG.name.split(' ')[0]}<span>.</span></a>`;
}

function renderHero() {
  const avatarInner = CONFIG.avatar
    ? `<img src="${CONFIG.avatar}" alt="${CONFIG.name}">`
    : initials(CONFIG.name);

  const socialBtns = [
    CONFIG.social.github   && `<a href="${CONFIG.social.github}"   target="_blank" rel="noopener" class="btn btn-ghost">${ICONS.github}   GitHub</a>`,
    CONFIG.social.linkedin && `<a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener" class="btn btn-ghost">${ICONS.linkedin} LinkedIn</a>`,
    CONFIG.social.twitter  && `<a href="${CONFIG.social.twitter}"  target="_blank" rel="noopener" class="btn btn-ghost">${ICONS.twitter}  Twitter</a>`,
    CONFIG.social.website  && `<a href="${CONFIG.social.website}"  target="_blank" rel="noopener" class="btn btn-ghost">${ICONS.web}      Website</a>`,
    CONFIG.resumeUrl       && `<a href="${CONFIG.resumeUrl}"        target="_blank" rel="noopener" class="btn btn-primary">${ICONS.resume}  Resume</a>`,
  ].filter(Boolean).join('');

  $('hero').innerHTML = `
    <div class="hero-avatar">${avatarInner}</div>
    <div class="hero-text fade-up">
      <h1>${CONFIG.name}</h1>
      <div class="role">${CONFIG.role}</div>
      <p class="tagline">${CONFIG.tagline}</p>
      <div class="hero-meta">
        ${CONFIG.location ? `<span>${ICONS.location} ${CONFIG.location}</span>` : ''}
        ${CONFIG.email    ? `<span>${ICONS.mail} ${CONFIG.email}</span>`        : ''}
      </div>
      <div class="hero-actions">${socialBtns}</div>
    </div>`;
}

function renderAbout() {
  $('about').innerHTML = `<p class="about-text">${CONFIG.about}</p>`;
}

function renderSkills() {
  $('skills').innerHTML = CONFIG.skills.map(g => `
    <div class="card skill-card fade-up">
      <h4>${g.category}</h4>
      <div class="skill-tags">${tag(g.items)}</div>
    </div>`).join('');
}

function renderExperience() {
  $('experience').innerHTML = CONFIG.experience.map(e => `
    <div class="card exp-card fade-up">
      <div class="exp-header">
        <div class="exp-company">${e.company}</div>
        <span class="exp-period">${e.period}</span>
      </div>
      <div class="exp-role">${e.role}${e.location ? ` · ${e.location}` : ''}</div>
      <p class="exp-desc">${e.description}</p>
      <div class="exp-tech">${tag(e.tech)}</div>
    </div>`).join('');
}

function renderProjects() {
  $('projects').innerHTML = CONFIG.projects.map(p => `
    <div class="card project-card fade-up">
      <div class="project-name">${p.name}</div>
      <p class="project-desc">${p.description}</p>
      <div class="project-footer">
        <div class="project-tech">${tag(p.tech)}</div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="icon-link" aria-label="GitHub">${ICONS.github} Code</a>` : ''}
          ${p.live   ? `<a href="${p.live}"   target="_blank" rel="noopener" class="icon-link" aria-label="Live">${ICONS.link} Live</a>`      : ''}
        </div>
      </div>
    </div>`).join('');
}

function renderEducation() {
  $('education').innerHTML = CONFIG.education.map(e => `
    <div class="card edu-card fade-up">
      <div class="exp-header">
        <div class="exp-company">${e.institution}</div>
        <span class="exp-period">${e.period}</span>
      </div>
      <div class="exp-role">${e.degree}</div>
    </div>`).join('');
}

function renderContact() {
  const links = [
    CONFIG.email          && `<a href="mailto:${CONFIG.email}" class="btn btn-primary">${ICONS.mail} Send Email</a>`,
    CONFIG.social.github  && `<a href="${CONFIG.social.github}"  target="_blank" rel="noopener" class="btn btn-ghost">${ICONS.github}   GitHub</a>`,
    CONFIG.social.linkedin && `<a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener" class="btn btn-ghost">${ICONS.linkedin} LinkedIn</a>`,
  ].filter(Boolean).join('');

  $('contact').innerHTML = `
    <p>I'm open to new opportunities, collaborations, or just a good conversation. Feel free to reach out.</p>
    <div class="contact-links">${links}</div>`;
}

function renderFooter() {
  $('footer-name').textContent = CONFIG.name;
  $('footer-year').textContent = new Date().getFullYear();
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderContact();
  renderFooter();
  document.title = `${CONFIG.name} — ${CONFIG.role}`;
});
