/* Site logic. All content lives in js/content.js. */
(function () {
"use strict";
const SITE = window.SITE;
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- language ---------- */
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
let lang = store("lang") || ((navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en");
const t = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] != null ? v[lang] : v.en) : v;
const key = v => (v && typeof v === "object") ? v.en : v;   // stable id (English)

const UI = {
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.experience": "Experience", "nav.certs": "Certificates", "nav.contact": "Contact",
    "cv.short": "CV", "cv.download": "Download CV", "cv.pdf": "Download CV (PDF)",
    "cta.projects": "View projects", "cta.contact": "Get in touch", "sheet.title": "Datasheet",
    "about.eyebrow": "About", "about.title": "From the <em>register</em> to the cloud",
    "skills.eyebrow": "Skills", "skills.title": "A constellation of <em>tools</em>",
    "skills.lede": "Each star is a skill, grouped around the discipline it belongs to. Dashed lines show where the disciplines meet. Select a star to see how deep it goes.",
    "skills.linked": "Linked to", "skills.tools": "Tools", "skills.core": "Core skill",
    "projects.eyebrow": "Projects", "projects.title": "Things I have <em>built</em>",
    "projects.lede": "Hand-picked work first, followed by my latest public repositories, loaded live from GitHub.",
    "all": "All", "source": "View source", "repo": "Open repository",
    "gh.title": "Live from GitHub", "gh.loading": "Loading repositories…",
    "gh.error": "GitHub couldn't be reached right now. See all repositories on",
    "gh.empty": "No public repositories yet. New projects will appear here automatically.",
    "gh.repos": "repos", "gh.followers": "followers", "gh.updated": "updated",
    "exp.eyebrow": "Experience", "exp.title": "Career &amp; <em>education</em>", "exp.cvnote": "The full record is in my CV.",
    "certs.eyebrow": "Certificates", "certs.title": "Always <em>learning</em>", "certs.progress": "In progress",
    "lang.title": "Languages", "int.title": "Interests",
    "contact.eyebrow": "Contact", "contact.title": "Let's build <em>something</em>",
    "contact.lede": "A project, a collaboration or a job opportunity? Email is the fastest way to reach me.",
    "contact.copy": "Copy", "contact.copied": "Copied", "contact.selected": "Selected", "contact.mail": "Email me",
    "form.name": "Your name", "form.email": "Your email", "form.msg": "Message", "form.ph": "What are you working on?",
    "form.send": "Write email", "form.note": "Opens your email app with the message filled in.",
    "form.missing": "Please fill in your name, email and a message.", "form.bad": "That email address doesn't look complete.",
    "form.ok": "Your email app should open now. If it doesn't, write to", "form.subject": "Hello from",
    "foot.press": "Press", "foot.term": "for the terminal",
    "stat.work": "work positions", "stat.certs": "certificates & courses", "stat.langs": "spoken languages", "stat.repos": "public repos",
    "cv.label": "Curriculum vitae",
    levels: ["", "Familiar", "Working knowledge", "Proficient", "Advanced", "Expert"]
  },
  de: {
    "nav.about": "Über mich", "nav.skills": "Kenntnisse", "nav.projects": "Projekte", "nav.experience": "Werdegang", "nav.certs": "Zertifikate", "nav.contact": "Kontakt",
    "cv.short": "CV", "cv.download": "Lebenslauf herunterladen", "cv.pdf": "Lebenslauf (PDF)",
    "cta.projects": "Projekte ansehen", "cta.contact": "Kontakt aufnehmen", "sheet.title": "Datenblatt",
    "about.eyebrow": "Über mich", "about.title": "Vom <em>Register</em> bis in die Cloud",
    "skills.eyebrow": "Kenntnisse", "skills.title": "Eine Konstellation aus <em>Werkzeugen</em>",
    "skills.lede": "Jeder Stern ist eine Fähigkeit, gruppiert um ihre Disziplin. Gestrichelte Linien zeigen, wo sich die Disziplinen treffen. Wähle einen Stern, um zu sehen, wie tief er reicht.",
    "skills.linked": "Verbunden mit", "skills.tools": "Tools", "skills.core": "Kernkompetenz",
    "projects.eyebrow": "Projekte", "projects.title": "Was ich <em>gebaut</em> habe",
    "projects.lede": "Zuerst ausgewählte Arbeiten, darunter meine neuesten öffentlichen Repositories, live von GitHub geladen.",
    "all": "Alle", "source": "Quellcode ansehen", "repo": "Repository öffnen",
    "gh.title": "Live von GitHub", "gh.loading": "Repositories werden geladen…",
    "gh.error": "GitHub ist gerade nicht erreichbar. Alle Repositories findest du auf",
    "gh.empty": "Noch keine öffentlichen Repositories. Neue Projekte erscheinen hier automatisch.",
    "gh.repos": "Repos", "gh.followers": "Follower", "gh.updated": "aktualisiert",
    "exp.eyebrow": "Werdegang", "exp.title": "Beruf &amp; <em>Ausbildung</em>", "exp.cvnote": "Alle Details stehen in meinem Lebenslauf.",
    "certs.eyebrow": "Zertifikate", "certs.title": "Immer am <em>Lernen</em>", "certs.progress": "Laufend",
    "lang.title": "Sprachen", "int.title": "Interessen",
    "contact.eyebrow": "Kontakt", "contact.title": "Lass uns etwas <em>bauen</em>",
    "contact.lede": "Ein Projekt, eine Zusammenarbeit oder ein Jobangebot? Per E-Mail erreichst du mich am schnellsten.",
    "contact.copy": "Kopieren", "contact.copied": "Kopiert", "contact.selected": "Markiert", "contact.mail": "E-Mail schreiben",
    "form.name": "Dein Name", "form.email": "Deine E-Mail", "form.msg": "Nachricht", "form.ph": "Woran arbeitest du?",
    "form.send": "E-Mail verfassen", "form.note": "Öffnet dein E-Mail-Programm mit der fertigen Nachricht.",
    "form.missing": "Bitte Name, E-Mail und Nachricht ausfüllen.", "form.bad": "Diese E-Mail-Adresse scheint unvollständig.",
    "form.ok": "Dein E-Mail-Programm sollte sich jetzt öffnen. Falls nicht, schreib an", "form.subject": "Hallo von",
    "foot.press": "Drücke", "foot.term": "für das Terminal",
    "stat.work": "Praxisstationen", "stat.certs": "Zertifikate & Kurse", "stat.langs": "Sprachen", "stat.repos": "öffentliche Repos",
    "cv.label": "Lebenslauf",
    levels: ["", "Grundkenntnisse", "Arbeitskenntnisse", "Gut", "Sehr gut", "Experte"]
  }
};
const u = k => (UI[lang][k] != null ? UI[lang][k] : UI.en[k]);

function localTime() {
  try {
    return new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", { hour: "2-digit", minute: "2-digit", timeZone: SITE.timezone, timeZoneName: "short" }).format(new Date());
  } catch (e) { return ""; }
}
const liveSocials = () => SITE.socials.filter(s => s.url);
const socialByLabel = l => SITE.socials.find(s => s.label === l && s.url);

/* ---------- static content ---------- */
function renderStatic() {
  document.documentElement.lang = lang;
  $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  $$("[data-i18n]").forEach(el => { el.textContent = u(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach(el => { el.innerHTML = u(el.dataset.i18nHtml); });
  $$("[data-i18n-ph]").forEach(el => { el.placeholder = u(el.dataset.i18nPh); });
  $$("[data-bind]").forEach(el => { if (el.dataset.bind !== "role") el.textContent = t(SITE[el.dataset.bind]); });

  const initials = ((SITE.firstName[0] || "") + (SITE.lastName[0] || "")).toUpperCase();
  $("#brandName").textContent = SITE.name;
  $("#heroName").innerHTML = `${esc(SITE.firstName)}<br><em>${esc(SITE.lastName)}</em>`;
  $("#monogram").textContent = initials;
  $("#partNo").textContent = `${initials}-${new Date().getFullYear()} · Rev A`;
  $("#footName").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
  $("#photo").src = SITE.photo;
  $("#sheetName").textContent = SITE.name;
  $("#sheetLoc").textContent = SITE.location;
  $$("[data-cv]").forEach(a => { a.href = SITE.cv; a.target = "_blank"; a.rel = "noopener"; });

  const socials = liveSocials();
  $("#socialRow").innerHTML = socials.map(s =>
    `<li><a class="soc" href="${esc(s.url)}" target="_blank" rel="noopener"><b>${esc(s.short)}</b>${esc(s.label)}</a></li>`).join("") +
    `<li><a class="soc" href="mailto:${esc(SITE.email)}"><b>@</b>Email</a></li>`;

  $("#linkList").innerHTML =
    `<li><a href="mailto:${esc(SITE.email)}"><b>@</b><span>Email</span><span class="h">${esc(SITE.email)} ↗</span></a></li>` +
    socials.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener"><b>${esc(s.short)}</b><span>${esc(s.label)}</span><span class="h">${esc(s.handle || "")} ↗</span></a></li>`).join("") +
    `<li><a href="${esc(SITE.cv)}" target="_blank" rel="noopener"><b>CV</b><span>${esc(u("cv.label"))}</span><span class="h">PDF ↗</span></a></li>`;

  $("#emailText").textContent = SITE.email;
  $("#mailLink").href = "mailto:" + SITE.email;

  $("#aboutText").innerHTML = t(SITE.about).map(p => `<p>${esc(p)}</p>`).join("");
  $("#disciplines").innerHTML = SITE.disciplines.map(d =>
    `<div class="disc"><span class="ref">${esc(d.ref)}</span><div><h3>${esc(t(d.title))}</h3><p>${esc(t(d.text))}</p></div></div>`).join("");

  renderStats();
  renderSheet();
  renderTimeline();
  renderCerts();
  $("#langList").innerHTML = SITE.languages.map(l =>
    `<li><span>${esc(t(l.name))}</span><span class="lv" aria-label="${l.level}/5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= l.level ? "f" : ""}"></i>`).join("")}</span><small>${esc(t(l.label))}</small></li>`).join("");
  $("#interestList").innerHTML = SITE.interests.map(i => {
    const s = i.link && socialByLabel(i.link);
    const inner = `<i>${esc(i.icon)}</i><span>${esc(t(i.name))}</span>`;
    return s ? `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${inner}<span class="go">${esc(s.label)} ↗</span></a></li>` : `<li><div>${inner}</div></li>`;
  }).join("");
}

let ghRepoCount = null;
function renderStats() {
  const work = SITE.experience.filter(e => key(e.kind) === "Work").length;
  const items = [
    [work, u("stat.work")],
    [SITE.certificates.length, u("stat.certs")],
    [SITE.languages.length, u("stat.langs")],
    [ghRepoCount == null ? "—" : ghRepoCount, u("stat.repos")]
  ];
  $("#stats").innerHTML = items.map(([n, l]) => `<li><strong>${esc(n)}</strong><span>${esc(l)}</span></li>`).join("");
}

function renderSheet() {
  const time = localTime();
  $("#sheetRows").innerHTML = SITE.datasheet.map(([k, v]) =>
    `<dt>${esc(t(k))}</dt><dd>${esc(String(t(v)).replace("{location}", SITE.location).replace("{time}", time))}</dd>`).join("");
  $("#localTime").textContent = `${SITE.location.split(",")[0]} ${time}`;
}

/* ---------- typed role ---------- */
let typeTimer = null;
function typeRole() {
  const el = $('[data-bind="role"]'), text = t(SITE.role);
  clearTimeout(typeTimer);
  if (reduceMotion) { el.textContent = text; return; }
  let i = 0; el.textContent = "";
  (function step() { el.textContent = text.slice(0, ++i); if (i < text.length) typeTimer = setTimeout(step, 45); })();
}

/* ---------- timeline ---------- */
let tlFilter = "all";
function renderTimeline() {
  const kinds = ["all", ...new Set(SITE.experience.map(e => key(e.kind)))];
  $("#tlFilters").innerHTML = kinds.map(k => {
    const label = k === "all" ? u("all") : t(SITE.experience.find(e => key(e.kind) === k).kind);
    return `<button type="button" class="chip" data-tl="${esc(k)}" aria-pressed="${k === tlFilter}">${esc(label)}</button>`;
  }).join("");
  $$("[data-tl]").forEach(b => b.addEventListener("click", () => { tlFilter = b.dataset.tl; renderTimeline(); }));
  $("#timeline").innerHTML = SITE.experience.filter(e => tlFilter === "all" || key(e.kind) === tlFilter).map(e => `
    <li class="${e.now ? "now" : ""}">
      <div class="when">${esc(e.period)}${e.periodEnd ? esc(t(e.periodEnd)) : ""}</div>
      <div class="what">
        <h3>${esc(t(e.role))}<span class="kind">${esc(t(e.kind))}</span></h3>
        <div class="org">${esc(e.org)}</div>
        <ul>${t(e.points).map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>
    </li>`).join("");
}

function renderCerts() {
  $("#certGrid").innerHTML = SITE.certificates.map(c => `
    <article class="cert">
      <span class="tag">${esc(c.tag)}</span>
      <h3>${esc(t(c.title))}</h3>
      <p>${esc(t(c.issuer))}</p>
      <div class="date">${esc(t(c.date))}${c.progress ? `<span class="pill">${esc(u("certs.progress"))}</span>` : ""}</div>
    </article>`).join("");
}

/* ---------- datasheet signal trace ---------- */
function drawTrace(phase) {
  const bits = "1011001110100101101100111010010110110011", w = 300 / 40;
  let d = "M0 24", x = 0;
  for (let i = 0; i < 40; i++) {
    const y = bits[(i + phase) % bits.length] === "1" ? 6 : 24;
    d += ` L${x.toFixed(1)} ${y} L${(x + w).toFixed(1)} ${y}`;
    x += w;
  }
  $("#trace").setAttribute("d", d);
}

/* ---------- skills constellation ---------- */
const NS = "http://www.w3.org/2000/svg";
let skillPos = {}, selected = null;
function svgEl(tag, attrs, parent) {
  const el = document.createElementNS(NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(el);
  return el;
}
const skillByKey = k => SITE.skills.find(s => key(s.name) === k);
function neighbours(k) {
  const s = skillByKey(k);
  const out = SITE.crossLinks.filter(p => p.includes(k)).map(p => p[0] === k ? p[1] : p[0]);
  return { cluster: s ? s.cluster : null, cross: out };
}
function buildConstellation() {
  const svg = $("#constellation");
  svg.innerHTML = "";
  const gEdges = svgEl("g", {}, svg), gNodes = svgEl("g", {}, svg);
  skillPos = {};
  SITE.skillClusters.forEach(c => {
    const items = SITE.skills.filter(s => s.cluster === c.id);
    items.forEach((s, i) => {
      const a = (i / items.length) * Math.PI * 2 - Math.PI / 2 + c.rot;
      const r = c.r * (items.length > 4 && i % 2 ? 0.72 : 1);
      const k = key(s.name);
      skillPos[k] = { x: c.cx + Math.cos(a) * r, y: c.cy + Math.sin(a) * r * 0.8, a };
      svgEl("line", { class: "edge", x1: c.cx, y1: c.cy, x2: skillPos[k].x, y2: skillPos[k].y, "data-a": c.id, "data-b": k }, gEdges);
    });
  });
  SITE.crossLinks.forEach(([a, b]) => {
    const p = skillPos[a], q = skillPos[b];
    if (!p || !q) return;
    svgEl("line", { class: "edge cross", x1: p.x, y1: p.y, x2: q.x, y2: q.y, "data-a": a, "data-b": b }, gEdges);
  });
  SITE.skillClusters.forEach(c => {
    const g = svgEl("g", { class: "node hub", "data-hub": c.id }, gNodes);
    svgEl("circle", { class: "halo", cx: c.cx, cy: c.cy, r: 18 }, g);
    svgEl("circle", { cx: c.cx, cy: c.cy, r: 6 }, g);
    svgEl("text", { x: c.cx, y: c.cy + 34, "text-anchor": "middle" }, g).textContent = t(c.label);
  });
  SITE.skills.forEach(s => {
    const k = key(s.name), p = skillPos[k];
    const g = svgEl("g", { class: "node", tabindex: "0", role: "button", "aria-label": t(s.name), "data-skill": k }, gNodes);
    svgEl("circle", { class: "halo", cx: p.x, cy: p.y, r: 6 + s.level * 2 }, g);
    svgEl("circle", { cx: p.x, cy: p.y, r: 2 + s.level * 0.7 }, g);
    const cos = Math.cos(p.a), sin = Math.sin(p.a);
    const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
    const dx = anchor === "start" ? 14 : anchor === "end" ? -14 : 0;
    const dy = anchor === "middle" ? (sin > 0 ? 24 : -14) : 4;
    svgEl("text", { x: p.x + dx, y: p.y + dy, "text-anchor": anchor }, g).textContent = t(s.name);
    g.addEventListener("mouseenter", () => highlight(k));
    g.addEventListener("mouseleave", () => highlight(selected));
    g.addEventListener("click", () => select(k));
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(k); } });
  });

  $("#chips").innerHTML = SITE.skillClusters.map(c =>
    `<div class="chip-row"><span class="k">${esc(t(c.label))}</span>${SITE.skills.filter(s => s.cluster === c.id)
      .map(s => `<button type="button" class="chip" data-chip="${esc(key(s.name))}" aria-pressed="false">${esc(t(s.name))}</button>`).join("")}</div>`).join("") +
    (SITE.tools && SITE.tools.length ? `<div class="chip-row"><span class="k">${esc(u("skills.tools"))}</span>${SITE.tools.map(x => `<span class="chip static">${esc(x)}</span>`).join("")}</div>` : "");
  $$("[data-chip]").forEach(b => b.addEventListener("click", () => select(b.dataset.chip)));
}
function highlight(k) {
  const svg = $("#constellation");
  $$("#constellation .on").forEach(el => el.classList.remove("on"));
  if (!k) { svg.classList.remove("focus"); return; }
  svg.classList.add("focus");
  const n = neighbours(k), related = new Set([k, ...n.cross]);
  $$("#constellation [data-skill]").forEach(g => { if (related.has(g.dataset.skill)) g.classList.add("on"); });
  $$(`#constellation [data-hub="${n.cluster}"]`).forEach(g => g.classList.add("on"));
  $$("#constellation .edge").forEach(e => {
    const a = e.dataset.a, b = e.dataset.b;
    if ((a === n.cluster && b === k) || ((a === k || b === k) && e.classList.contains("cross"))) e.classList.add("on");
  });
}
function select(k) {
  const s = skillByKey(k);
  if (!s) return;
  selected = k;
  $$("#constellation .sel").forEach(el => el.classList.remove("sel"));
  const g = $(`#constellation [data-skill="${CSS.escape(k)}"]`);
  if (g) g.classList.add("sel");
  $$("[data-chip]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.chip === k)));
  highlight(k);
  const c = SITE.skillClusters.find(c => c.id === s.cluster);
  $("#skCluster").textContent = c ? t(c.label) : "";
  $("#skName").textContent = t(s.name);
  $("#skLevel").innerHTML = [1, 2, 3, 4, 5].map(i => `<i class="${i <= s.level ? "f" : ""}"></i>`).join("");
  $("#skLevelLabel").textContent = `${s.level}/5 · ${u("levels")[s.level]}`;
  $("#skNote").textContent = t(s.note);
  const n = neighbours(k).cross.map(x => t((skillByKey(x) || {}).name || x));
  $("#skLinks").textContent = n.length ? n.join(" · ") : u("skills.core");
}

/* ---------- projects ---------- */
let filter = "all";
function renderProjects() {
  const cats = ["all", ...new Set(SITE.projects.map(p => p.category))];
  $("#filters").innerHTML = cats.length > 2 ? cats.map(c =>
    `<button type="button" class="chip" data-filter="${esc(c)}" aria-pressed="${c === filter}">${c === "all" ? esc(u("all")) : esc(c[0].toUpperCase() + c.slice(1))}</button>`).join("") : "";
  $$("[data-filter]").forEach(b => b.addEventListener("click", () => { filter = b.dataset.filter; renderProjects(); }));
  const list = SITE.projects.filter(p => filter === "all" || p.category === filter);
  $("#projGrid").innerHTML = list.map(p => `
    <article class="card">
      <div class="card-top"><span class="cat">${esc(p.category)}</span><span>${esc(p.year)}</span></div>
      <h3>${esc(t(p.title))}</h3>
      <p>${esc(t(p.summary))}</p>
      <div class="tags">${(p.tags || []).map(x => `<span>${esc(x)}</span>`).join("")}</div>
      ${p.url ? `<a class="more" href="${esc(p.url)}" target="_blank" rel="noopener"><span>${esc(u("source"))}</span><span>↗</span></a>` : ""}
    </article>`).join("");
  $("#projGrid").hidden = !list.length;
}

/* ---------- live GitHub ---------- */
const LANG_COLORS = { Java: "#b07219", Python: "#3572A5", JavaScript: "#f1e05a", TypeScript: "#3178c6", HTML: "#e34c26", CSS: "#563d7c", C: "#555555", "C++": "#f34b7d", Assembly: "#6E4C13", Shell: "#89e051", TeX: "#3D6117", "Jupyter Notebook": "#DA5B0B" };
let ghState = { status: "loading", user: null, repos: [] };
async function loadGitHub() {
  const user = SITE.githubUser;
  if (!user) { ghState.status = "off"; renderGitHub(); return; }
  try {
    const [uRes, rRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(user)}`),
      fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=30`)
    ]);
    if (!uRes.ok || !rRes.ok) throw new Error("GitHub " + uRes.status);
    ghState.user = await uRes.json();
    ghState.repos = (await rRes.json()).filter(r => !r.fork).slice(0, 6);
    ghState.status = "ok";
    ghRepoCount = ghState.user.public_repos;
    renderStats();
  } catch (e) { ghState.status = "error"; }
  renderGitHub();
}
function renderGitHub() {
  const user = SITE.githubUser, url = `https://github.com/${user}`;
  const section = $(".gh-head");
  if (!user) { section.hidden = true; $("#ghGrid").hidden = true; return; }
  $("#ghProfile").href = url;
  $("#ghProfile").textContent = `github.com/${user} ↗`;
  const grid = $("#ghGrid");
  if (ghState.status === "loading") { grid.innerHTML = `<p class="gh-msg">${esc(u("gh.loading"))}</p>`; return; }
  if (ghState.status === "error") {
    $("#ghStats").innerHTML = "";
    grid.innerHTML = `<p class="gh-msg">${esc(u("gh.error"))} <a href="${esc(url)}" target="_blank" rel="noopener">github.com/${esc(user)}</a>.</p>`;
    return;
  }
  const g = ghState.user;
  $("#ghStats").innerHTML = `<li><strong>${esc(g.public_repos)}</strong> ${esc(u("gh.repos"))}</li><li><strong>${esc(g.followers)}</strong> ${esc(u("gh.followers"))}</li>`;
  if (!ghState.repos.length) { grid.innerHTML = `<p class="gh-msg">${esc(u("gh.empty"))}</p>`; return; }
  const fmt = d => { try { return new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", { month: "short", year: "numeric" }).format(new Date(d)); } catch (e) { return ""; } };
  grid.innerHTML = ghState.repos.map(r => `
    <article class="card">
      <div class="card-top"><span class="cat">${r.language ? `<span class="lang-dot" style="background:${LANG_COLORS[r.language] || "var(--ion)"}"></span>${esc(r.language)}` : "repo"}</span><span>★ ${esc(r.stargazers_count)}</span></div>
      <h3>${esc(r.name)}</h3>
      <p>${esc(r.description || "—")}</p>
      <div class="tags">${(r.topics || []).slice(0, 4).map(x => `<span>${esc(x)}</span>`).join("")}<span>${esc(u("gh.updated"))} ${esc(fmt(r.pushed_at))}</span></div>
      <a class="more" href="${esc(r.html_url)}" target="_blank" rel="noopener"><span>${esc(u("repo"))}</span><span>↗</span></a>
    </article>`).join("");
}

/* ---------- contact ---------- */
function setupContact() {
  $("#copyEmail").addEventListener("click", async () => {
    const btn = $("#copyEmail");
    try { await navigator.clipboard.writeText(SITE.email); btn.textContent = u("contact.copied"); }
    catch (e) {
      const r = document.createRange(); r.selectNodeContents($("#emailText"));
      const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
      btn.textContent = u("contact.selected");
    }
    setTimeout(() => { btn.textContent = u("contact.copy"); }, 1800);
  });
  $("#msgForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#fName").value.trim(), from = $("#fEmail").value.trim(), msg = $("#fMsg").value.trim();
    const note = $("#formNote");
    if (!name || !from || !msg) { note.textContent = u("form.missing"); return; }
    if (!/^\S+@\S+\.\S+$/.test(from)) { note.textContent = u("form.bad"); return; }
    const subject = encodeURIComponent(`${u("form.subject")} ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}\n${from}`);
    note.textContent = `${u("form.ok")} ${SITE.email}.`;
    location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  });
}

/* ---------- scroll: progress, active nav, reveal, back-to-top ---------- */
function setupScroll() {
  const bar = $("#progress"), top = $("#toTop");
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    top.classList.toggle("show", scrollY > 700);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
    $$(".reveal").forEach(el => io.observe(el));
    const links = $$(".nav-links a");
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => so.observe(s));
  } else $$(".reveal").forEach(el => el.classList.add("in"));
}

/* ---------- terminal ---------- */
const term = { history: [], idx: 0 };
function tprint(html) { const o = $("#termOut"); o.insertAdjacentHTML("beforeend", html + "\n"); o.scrollTop = o.scrollHeight; }
const COMMANDS = {
  help: () => `<span class="a">Available commands</span>
  <span class="c">whoami</span>        who I am
  <span class="c">about</span>         short bio
  <span class="c">skills</span>        skills by discipline
  <span class="c">projects</span>      projects & latest repos
  <span class="c">experience</span>    career timeline
  <span class="c">certs</span>         certificates & courses
  <span class="c">social</span>        all my profiles
  <span class="c">contact</span>       how to reach me
  <span class="c">cv</span>            open my CV
  <span class="c">lang</span> en|de     switch language
  <span class="c">goto</span> &lt;section&gt;  about | skills | projects | experience | certificates | contact
  <span class="c">date</span>          my local time
  <span class="c">clear</span>         clear the screen
  <span class="c">exit</span>          close the terminal`,
  whoami: () => `<span class="c">${esc(SITE.name)}</span> — ${esc(t(SITE.role))}\n${esc(t(SITE.degree))}\n${esc(SITE.location)} · ${esc(t(SITE.status))}`,
  about: () => t(SITE.about).map(esc).join("\n\n"),
  skills: () => SITE.skillClusters.map(c => `<span class="a">${esc(t(c.label))}</span>\n` +
    SITE.skills.filter(s => s.cluster === c.id).map(s => `  ${esc(String(t(s.name)).padEnd(24))} <span class="b">${"■".repeat(s.level)}${"□".repeat(5 - s.level)}</span>`).join("\n")).join("\n"),
  projects: () => SITE.projects.map(p => `<span class="a">[${esc(p.category)}]</span> <span class="c">${esc(t(p.title))}</span> (${esc(p.year)})\n  ${esc(t(p.summary))}`).join("\n") +
    (ghState.repos.length ? "\n\n<span class=\"a\">GitHub</span>\n" + ghState.repos.map(r => `  <a href="${esc(r.html_url)}" target="_blank" rel="noopener">${esc(r.name)}</a>  ${esc(r.language || "")}`).join("\n") : ""),
  experience: () => SITE.experience.map(e => `<span class="b">${esc(e.period)}${e.periodEnd ? esc(t(e.periodEnd)) : ""}</span>  <span class="c">${esc(t(e.role))}</span>\n  ${esc(e.org)}`).join("\n"),
  certs: () => SITE.certificates.map(c => `<span class="b">${esc(t(c.date))}</span>  <span class="c">${esc(t(c.title))}</span>`).join("\n"),
  social: () => liveSocials().map(s => `${esc(s.label.padEnd(12))} <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.url)}</a>`).join("\n"),
  contact: () => `email        <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>\n` + COMMANDS.social(),
  cv: () => { window.open(SITE.cv, "_blank", "noopener"); return `CV: <a href="${esc(SITE.cv)}" target="_blank" rel="noopener">${esc(SITE.cv)}</a>`; },
  lang: arg => { if (arg !== "en" && arg !== "de") return "usage: lang en | de"; setLang(arg); return `language → ${arg}`; },
  date: () => `${esc(SITE.location)}: ${esc(localTime())}`,
  goto: arg => {
    const ok = ["about", "skills", "projects", "experience", "certificates", "contact"];
    if (!ok.includes(arg)) return `usage: goto ${ok.join(" | ")}`;
    closeTerm(); document.getElementById(arg).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    return "";
  },
  sudo: arg => arg && arg.startsWith("hire") ? (setTimeout(() => COMMANDS.goto("contact"), 700), `<span class="a">Permission granted.</span> Routing you to contact…`) : "Nice try. Try: sudo hire-me",
  clear: () => { $("#termOut").innerHTML = ""; return null; },
  exit: () => { closeTerm(); return null; }
};
function runCommand(raw) {
  const line = raw.trim();
  tprint(`<span class="a">${esc($("#prompt").textContent)}</span> <span class="c">${esc(line)}</span>`);
  if (!line) return;
  term.history.push(line); term.idx = term.history.length;
  const [cmd, ...rest] = line.split(/\s+/);
  const fn = COMMANDS[cmd.toLowerCase()];
  if (!fn) { tprint(`command not found: ${esc(cmd)} — type <span class="c">help</span>`); return; }
  const out = fn(rest.join(" ").toLowerCase());
  if (out) tprint(out);
}
let lastFocus = null;
function openTerm() {
  const el = $("#term");
  if (!el.hidden) return;
  lastFocus = document.activeElement;
  el.hidden = false;
  if (!$("#termOut").textContent) tprint(`<span class="a">${esc(SITE.name)}</span> · portfolio shell v2.0\nType <span class="c">help</span> to see what you can do.\n`);
  setTimeout(() => $("#termInput").focus(), 30);
}
function closeTerm() { $("#term").hidden = true; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
function setupTerminal() {
  const user = SITE.firstName.toLowerCase().replace(/[^a-z0-9]/g, "") || "guest";
  $("#prompt").textContent = `guest@${user}:~$`;
  $("#termTitle").textContent = `guest@${user}: ~`;
  $("#openTerm").addEventListener("click", openTerm);
  $("#closeTerm").addEventListener("click", closeTerm);
  $("#term").addEventListener("click", e => { if (e.target.id === "term") closeTerm(); });
  $("#termInput").addEventListener("keydown", e => {
    const inp = e.target;
    if (e.key === "Enter") { runCommand(inp.value); inp.value = ""; }
    else if (e.key === "ArrowUp") { if (term.idx > 0) { term.idx--; inp.value = term.history[term.idx]; } e.preventDefault(); }
    else if (e.key === "ArrowDown") { term.idx = Math.min(term.history.length, term.idx + 1); inp.value = term.history[term.idx] || ""; e.preventDefault(); }
    else if (e.key === "Tab") {
      e.preventDefault();
      const m = Object.keys(COMMANDS).filter(c => c.startsWith(inp.value.trim()));
      if (m.length === 1) inp.value = m[0] + " ";
    }
  });
  document.addEventListener("keydown", e => {
    const typing = /input|textarea/i.test(document.activeElement.tagName) && document.activeElement.id !== "termInput";
    if ((e.key === "`" || e.key === "~") && !typing && $("#term").hidden) { e.preventDefault(); openTerm(); }
    else if (e.key === "Escape" && !$("#term").hidden) closeTerm();
  });
}

/* ---------- neural cosmos canvas ---------- */
function cosmos() {
  const cv = $("#cosmos"), ctx = cv.getContext("2d");
  if (!ctx) return;
  let W = 0, H = 0, nodes = [], dust = [], pulses = [], mouse = { x: -9999, y: -9999 }, lastSpawn = 0;
  const LINK = 135, MOUSE_R = 190;
  const COPPER = "59,123,255", ION = "205,45,52", STAR = "225,231,240";
  function seed() {
    const n = Math.round(Math.min(110, Math.max(40, W * H / 15000)));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.3 + .5, hub: Math.random() < .035, ph: Math.random() * 6.28
    }));
    dust = Array.from({ length: Math.round(W * H / 4200) }, () => ({ x: Math.random() * W, y: Math.random() * H, a: Math.random() * .45 + .08, s: Math.random() * 1.5 + .3 }));
    pulses = [];
  }
  function resize() {
    const nw = innerWidth, nh = innerHeight;
    const changed = Math.abs(nw - W) > 2 || Math.abs(nh - H) > 140;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = nw; H = nh;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (changed || !nodes.length) seed();
  }
  function draw(time) {
    ctx.clearRect(0, 0, W, H);
    for (const d of dust) {
      const tw = reduceMotion ? 1 : .65 + .35 * Math.sin(time * .0012 * d.s + d.x);
      ctx.fillStyle = `rgba(${STAR},${d.a * tw})`;
      ctx.fillRect(d.x, d.y, d.s > 1.4 ? 1.5 : 1, d.s > 1.4 ? 1.5 : 1);
    }
    if (!reduceMotion) {
      for (const n of nodes) {
        const dx = mouse.x - n.x, dy = mouse.y - n.y, dm = Math.hypot(dx, dy);
        if (dm < MOUSE_R && dm > 1) { n.vx += dx / dm * .006; n.vy += dy / dm * .006; }
        n.vx *= .995; n.vy *= .995;
        const sp = Math.hypot(n.vx, n.vy);
        if (sp < .05) { n.vx += (Math.random() - .5) * .02; n.vy += (Math.random() - .5) * .02; }
        if (sp > .7) { n.vx *= .7 / sp; n.vy *= .7 / sp; }
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;
      }
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y;
        if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
        const d = Math.hypot(dx, dy);
        if (d > LINK) continue;
        const mx = (a.x + b.x) / 2 - mouse.x, my = (a.y + b.y) / 2 - mouse.y;
        const near = Math.max(0, 1 - Math.hypot(mx, my) / MOUSE_R);
        const base = 1 - d / LINK;
        ctx.strokeStyle = near > 0 ? `rgba(${ION},${base * (.16 + near * .4)})` : `rgba(${ION},${base * .28})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    for (const n of nodes) {
      const glow = n.hub ? 1 : .55 + .45 * Math.sin(time * .002 + n.ph);
      if (n.hub) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 10);
        g.addColorStop(0, `rgba(${COPPER},.45)`); g.addColorStop(1, `rgba(${COPPER},0)`);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(n.x, n.y, 10, 0, 6.283); ctx.fill();
      }
      ctx.fillStyle = n.hub ? `rgba(${COPPER},.95)` : `rgba(${ION},${.5 + .4 * glow})`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.hub ? n.r + 1 : n.r, 0, 6.283); ctx.fill();
    }
    if (!reduceMotion) {
      if (time - lastSpawn > 900 && pulses.length < 4) {
        lastSpawn = time;
        const a = nodes[(Math.random() * nodes.length) | 0];
        let best = null, bd = LINK;
        for (const b of nodes) { if (b === a) continue; const d = Math.hypot(a.x - b.x, a.y - b.y); if (d < bd && Math.random() < .5) { bd = d; best = b; } }
        if (best) pulses.push({ a, b: best, p: 0, v: .008 + Math.random() * .01 });
      }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const s = pulses[k]; s.p += s.v;
        if (s.p >= 1 || Math.hypot(s.a.x - s.b.x, s.a.y - s.b.y) > LINK * 1.2) { pulses.splice(k, 1); continue; }
        const x = s.a.x + (s.b.x - s.a.x) * s.p, y = s.a.y + (s.b.y - s.a.y) * s.p;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 6);
        g.addColorStop(0, `rgba(${COPPER},.9)`); g.addColorStop(1, `rgba(${COPPER},0)`);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 6, 0, 6.283); ctx.fill();
      }
    }
  }
  function loop(time) { if (!document.hidden) draw(time); requestAnimationFrame(loop); }
  addEventListener("resize", resize);
  addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
  resize();
  if (reduceMotion) draw(0); else requestAnimationFrame(loop);
}

/* ---------- boot ---------- */
function renderAll() {
  renderStatic();
  typeRole();
  buildConstellation();
  select(selected || key(SITE.skills[0].name));
  renderProjects();
  renderGitHub();
}
function setLang(l) { lang = l; store("lang", l); renderAll(); }
$$("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

renderAll();
setupContact();
setupTerminal();
setupScroll();
cosmos();
loadGitHub();
let phase = 0; drawTrace(0);
if (!reduceMotion) setInterval(() => drawTrace(++phase), 420);
setInterval(renderSheet, 30000);
})();
