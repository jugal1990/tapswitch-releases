// Shared language switcher for the tapswitch.fyi pages. Picks the phone's language, a globe button changes it, the pick is remembered.
// Pages mark words with data-i18n, data-i18n-attr and data-i18n-text; translation files call TSLang.add.
(() => {
// Menu order: English, Southeast Asia, then the other buyer languages. Each shows the flag of its main country.
const NAMES = { en: 'English', ms: 'Bahasa Melayu', id: 'Bahasa Indonesia', th: 'ไทย', vi: 'Tiếng Việt', fil: 'Filipino', zh: '中文 (简体)',
 es: 'Español', pl: 'Polski', cs: 'Čeština', ru: 'Русский', ar: 'العربية' };
const FLAGS = { en: '🇬🇧', ms: '🇲🇾', id: '🇮🇩', th: '🇹🇭', vi: '🇻🇳', fil: '🇵🇭', zh: '🇨🇳', es: '🇲🇽', pl: '🇵🇱', cs: '🇨🇿', ru: '🇷🇺', ar: '🇱🇧' };
// Phone language codes that differ from ours.
const ALIAS = { tl: 'fil', in: 'id' };
const CSS = `.langwrap{position:relative}
.langbtn{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 12px;border-radius:999px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:500 .88rem var(--body);cursor:pointer}
.langbtn svg{width:16px;height:16px;color:var(--muted)}
.langbtn:focus-visible,.langmenu button:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.langmenu{position:absolute;top:calc(100% + 8px);inset-inline-end:0;z-index:50;min-width:190px;padding:6px;border-radius:14px;background:var(--panel);box-shadow:0 0 0 1px var(--line),0 12px 32px rgba(0,0,0,.14);display:grid;gap:2px}
.langmenu[hidden]{display:none}
.langmenu button{all:unset;box-sizing:border-box;padding:9px 12px;border-radius:9px;font:400 .93rem var(--body);color:var(--ink);cursor:pointer}
.langmenu button:hover{background:var(--fill)}
.langmenu button[aria-checked="true"]{font-weight:600;color:var(--blue)}
.langbtn .flag,.langmenu .flag{font-size:1.05rem;line-height:1}
.langmenu .flag{margin-inline-end:10px}
.langmenu{max-height:min(70vh,520px);overflow-y:auto}
.app-english{margin-top:6px;font-weight:600;color:var(--ink)}`;
const GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18"/></svg>';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const T = {}, DEF = {};
const listeners = [];
let current = 'en';

// Translations: a value is a string, an array, or { t, en } (en is only for tests).
function add(dict) {
 for (const [code, keys] of Object.entries(dict)) {
  const d = T[code] || (T[code] = {});
  for (const [k, v] of Object.entries(keys)) d[k] = v && typeof v === 'object' && !Array.isArray(v) && 't' in v ? v.t : v;
 }
 if (current !== 'en') render(current, true);
}
function def(map) { Object.assign(DEF, map); }
function t(key) {
 const v = T[current] && T[current][key];
 return v !== undefined ? v : DEF[key] !== undefined ? DEF[key] : key;
}

// Page hooks. The English each one was written with is read once, the first time we see it.
const lastText = el => [...el.childNodes].reverse().find(n => n.nodeType === 3 && n.textContent.trim());
const orig = new WeakMap();
function hooks() {
 const list = [];
 for (const el of $$('[data-i18n]')) {
  const key = el.dataset.i18n;
  list.push({ key, get: () => el.innerHTML, set: v => { el.innerHTML = v; }, el, kind: 'h' });
 }
 for (const el of $$('[data-i18n-attr]')) for (const pair of el.dataset.i18nAttr.split(';')) {
  const i = pair.indexOf(':'); if (i < 1) continue;
  const attr = pair.slice(0, i).trim(), key = pair.slice(i + 1).trim();
  list.push({ key, get: () => el.getAttribute(attr) || '', set: v => { el.setAttribute(attr, v); }, el, kind: 'a:' + attr });
 }
 for (const el of $$('[data-i18n-text]')) {
  const n = lastText(el); if (!n) continue;
  list.push({ key: el.dataset.i18nText, get: () => n.textContent, set: v => { n.textContent = v; }, el, kind: 'x' });
 }
 for (const h of list) {
  let m = orig.get(h.el); if (!m) orig.set(h.el, m = {});
  if (!(h.kind in m)) m[h.kind] = h.get();
  h.en = m[h.kind];
 }
 return list;
}
function english() {
 const out = {};
 for (const h of hooks()) if (!(h.key in out)) out[h.key] = h.en;
 for (const [k, v] of Object.entries(DEF)) out[k] = v;
 return out;
}

function note() {
 let n = $('#appEnglish');
 if (!n) {
  const after = $('#price .cta-note'); if (!after) return null;
  n = document.createElement('p'); n.id = 'appEnglish'; n.className = 'cta-note app-english'; after.after(n);
 }
 return n;
}
function render(lang, notify) {
 current = lang;
 const d = lang === 'en' ? {} : T[lang] || {};
 for (const h of hooks()) { const v = d[h.key]; h.set(typeof v === 'string' ? v : h.en); }
 const n = note();
 if (n) { n.textContent = typeof d.english === 'string' ? d.english : ''; n.hidden = lang === 'en' || !n.textContent; }
 document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
 document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
 if (!document.getElementById('ltrKeep')) { const st = document.createElement('style'); st.id = 'ltrKeep'; st.textContent = '.demo, #demo, .cm-map { direction: ltr; }'; document.head.appendChild(st); }
 const now = $('#langBtn .now'), flag = $('#langBtn .flag');
 if (now) now.textContent = NAMES[lang]; if (flag) flag.textContent = FLAGS[lang];
 $$('#langMenu button').forEach(b => b.setAttribute('aria-checked', b.dataset.lang === lang ? 'true' : 'false'));
 if (notify) listeners.slice().forEach(fn => { try { fn(lang); } catch (_) {} });
}
function apply(lang) { if (NAMES[lang]) render(lang, true); }
function pick() {
 const h = location.hash.slice(1); if (NAMES[h]) return h;
 try { const s = localStorage.getItem('site-lang'); if (NAMES[s]) return s; } catch (e) {}
 for (const l of navigator.languages || [navigator.language || 'en']) { let b = l.toLowerCase().split('-')[0]; b = ALIAS[b] || b; if (NAMES[b]) return b; }
 return 'en';
}

// Globe button and menu, before the page's .sky button.
if (!$('#langCss')) { const s = document.createElement('style'); s.id = 'langCss'; s.textContent = CSS; document.head.appendChild(s); }
const wrap = document.createElement('div'); wrap.className = 'langwrap';
wrap.innerHTML = `<button type="button" class="langbtn" id="langBtn" aria-haspopup="menu" aria-expanded="false" aria-label="Language">${GLOBE}<span class="flag" aria-hidden="true">${FLAGS.en}</span><span class="now">${NAMES.en}</span></button><div class="langmenu" id="langMenu" role="menu" hidden></div>`;
const sky = $('.bar .wrap .sky'), bar = $('.bar .wrap');
if (sky) sky.before(wrap); else if (bar) bar.appendChild(wrap);
const btn = $('#langBtn'), menu = $('#langMenu');
if (btn) {
 menu.innerHTML = Object.entries(NAMES).map(([c, n]) => `<button type="button" role="menuitemradio" data-lang="${c}" lang="${c}"><span class="flag" aria-hidden="true">${FLAGS[c]}</span>${n}</button>`).join('');
 const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
 btn.addEventListener('click', () => { const open = menu.hidden; menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); });
 menu.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; apply(b.dataset.lang); try { localStorage.setItem('site-lang', b.dataset.lang); } catch (_) {} close(); });
 document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.langwrap')) close(); });
 document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { close(); btn.focus(); } });
}
addEventListener('hashchange', () => { const h = location.hash.slice(1); if (NAMES[h]) apply(h); });

window.TSLang = { add, def, t, english, apply, onChange: fn => { listeners.push(fn); },
 get lang() { return current; } };
apply(pick());
})();
