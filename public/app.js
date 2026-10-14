"use strict";
// Winter Arc OS, milestone 1. All data is saved in this browser only (localStorage).
const STORAGE_KEY = "winterArcOS:v1";
const TOTAL_DAYS = 90;

let state = loadState();
let tab = "today";
let viewDay = null;
const openDetails = new Set(); // remembers which "How to do it" panels are open

// ---------- Time (Bangladesh) ----------
function todayBD() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" }); // YYYY-MM-DD
}
function prettyDateBD() {
  return new Date().toLocaleDateString("en-GB", { timeZone: "Asia/Dhaka", weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

// ---------- Saving and loading ----------
function defaultState() { return { version: 1, days: {} }; }

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultState();
  try {
    const s = JSON.parse(raw);
    if (s && typeof s === "object" && s.days && typeof s.days === "object") return s;
    throw new Error("bad shape");
  } catch (e) {
    // Keep a copy of unreadable data instead of silently destroying it.
    try { localStorage.setItem(STORAGE_KEY + ":corrupt-backup", raw); } catch (e2) {}
    return defaultState();
  }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { toast("Could not save. Your browser storage may be full or blocked."); }
}

// ---------- Progress logic ----------
function dayRecord(n) { return state.days[n] || { tasks: {}, completedOn: null }; }
function ensureRecord(n) {
  if (!state.days[n]) state.days[n] = { tasks: {}, completedOn: null };
  return state.days[n];
}
function dayData(n) { return DAYS.find(d => d.day === n); }
function isComplete(n) { return Boolean(dayRecord(n).completedOn); }
function isUnlocked(n) { return n === 1 || isComplete(n - 1); }
function requiredStats(d) {
  const rec = dayRecord(d.day);
  const req = d.tasks.filter(t => t.required);
  return { done: req.filter(t => rec.tasks[t.id]).length, total: req.length };
}
function currentDayNumber() {
  const d = DAYS.find(x => !isComplete(x.day));
  return d ? d.day : null;
}
function completedCount() { return DAYS.filter(d => isComplete(d.day)).length; }

// ---------- Rendering ----------
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function taskHtml(d, t, locked) {
  const checked = dayRecord(d.day).tasks[t.id] ? "checked" : "";
  const details = t.details
    ? `<details data-id="${t.id}" ${openDetails.has(t.id) ? "open" : ""}><summary>How to do it</summary><p>${esc(t.details)}</p></details>`
    : "";
  return `<div class="task"><label>
    <input type="checkbox" data-day="${d.day}" data-task="${t.id}" ${checked} ${locked ? "disabled" : ""}>
    <span>${esc(t.text)}</span></label>${details}</div>`;
}

function renderToday() {
  const cur = currentDayNumber();
  if (viewDay === null) viewDay = cur ?? DAYS[DAYS.length - 1].day;
  const n = viewDay;
  const d = dayData(n);
  const done = completedCount();
  const pct = Math.round((done / TOTAL_DAYS) * 100);

  let html = `<p class="date">${esc(prettyDateBD())}</p><h1>Day ${n} of ${TOTAL_DAYS}</h1>
    <section class="card"><div class="row"><h3>Overall progress</h3><span class="tag">${done} of ${TOTAL_DAYS} days</span></div>
    <div class="bar"><span style="width:${pct}%"></span></div>
    <p class="muted">Days ${DAYS.length + 1}–${TOTAL_DAYS} are coming in the next build.</p></section>`;

  if (!isUnlocked(n)) {
    return html + `<section class="card"><p class="phase">Locked</p><h2>${esc(d.title)}</h2>
      <p>To unlock Day ${n}, finish all required tasks in Day ${n - 1} and tap "Complete Day".</p>
      <button class="btn secondary" data-action="open-day" data-day="${cur ?? 1}">Go to Day ${cur ?? 1}</button></section>`;
  }

  const complete = isComplete(n);
  const s = requiredStats(d);
  const dayPct = Math.round((s.done / s.total) * 100);
  const required = d.tasks.filter(t => t.required);
  const optional = d.tasks.filter(t => !t.required);
  const nextTask = required.find(t => !dayRecord(n).tasks[t.id]);

  html += `<section class="card"><p class="phase">${esc(d.phase)}</p><h2>${esc(d.title)}</h2>
    <p><strong>Objective:</strong> ${esc(d.objective)}</p><p class="muted">${esc(d.why)}</p></section>`;

  if (!complete && nextTask) {
    html += `<section class="card next"><p class="phase">Your next action</p><p><strong>${esc(nextTask.text)}</strong></p></section>`;
  }

  html += `<section class="card"><div class="row"><h3>Required tasks</h3><span class="tag">${s.done}/${s.total} (${dayPct}%)</span></div>
    <div class="bar"><span style="width:${dayPct}%"></span></div>
    ${required.map(t => taskHtml(d, t, complete)).join("")}</section>`;

  if (optional.length) {
    html += `<section class="card"><h3>Optional bonus</h3><p class="muted">These never block your progress.</p>
      ${optional.map(t => taskHtml(d, t, false)).join("")}</section>`;
  }

  if (complete) {
    html += `<section class="card"><p><strong>Day ${n} complete ✓</strong></p>
      <p class="muted">Completed on ${esc(dayRecord(n).completedOn)}. Required tasks are locked in. Tap Reopen to change them.</p>
      <button class="btn secondary" data-action="reopen-day" data-day="${n}">Reopen day</button></section>`;
  } else {
    html += `<button class="btn" data-action="complete-day" data-day="${n}" ${s.done < s.total ? "disabled" : ""}>Complete Day ${n}</button>
      ${s.done < s.total ? `<p class="muted">Check all required tasks to finish the day.</p>` : ""}`;
  }
  if (cur !== null && n !== cur) {
    html += `<button class="btn secondary" data-action="open-day" data-day="${cur}">Go to current day (Day ${cur})</button>`;
  }
  return html;
}

function renderRoadmap() {
  const cur = currentDayNumber();
  let html = `<h1>Roadmap</h1>`;
  for (const d of DAYS) {
    const status = isComplete(d.day) ? "Completed ✓" : !isUnlocked(d.day) ? "🔒 Locked" : d.day === cur ? "Today" : "Open";
    html += `<button class="day-item ${isUnlocked(d.day) ? "" : "locked"}" data-action="open-day" data-day="${d.day}">
      <span><strong>Day ${d.day}</strong> · ${esc(d.title)}</span><span class="tag">${status}</span></button>`;
  }
  html += `<section class="card"><p class="muted">Days ${DAYS.length + 1}–${TOTAL_DAYS} are coming in the next build.</p></section>`;
  return html;
}

function render() {
  document.getElementById("app").innerHTML = tab === "roadmap" ? renderRoadmap() : renderToday();
  document.querySelectorAll(".tabs button").forEach(b =>
    b.setAttribute("aria-current", b.dataset.tab === tab ? "page" : "false"));
}

let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

// ---------- Actions ----------
function completeDay(n) {
  const s = requiredStats(dayData(n));
  if (s.done < s.total) { toast("Finish all required tasks first."); return; }
  if (!confirm(`Mark Day ${n} as complete?`)) return;
  ensureRecord(n).completedOn = todayBD();
  saveState();
  const next = currentDayNumber();
  viewDay = next ?? n;
  render();
  window.scrollTo(0, 0);
  toast(dayData(n + 1) ? `Day ${n} complete. Day ${n + 1} is unlocked.` : `Day ${n} complete. More days are coming soon.`);
}

function reopenDay(n) {
  if (!confirm(`Reopen Day ${n}? Later days stay saved but will lock until you complete this day again.`)) return;
  ensureRecord(n).completedOn = null;
  saveState();
  render();
}

// One listener each, attached once, so handlers never duplicate.
document.addEventListener("click", e => {
  const el = e.target.closest("[data-action],[data-tab]");
  if (!el) return;
  if (el.dataset.tab) { tab = el.dataset.tab; render(); window.scrollTo(0, 0); return; }
  const n = Number(el.dataset.day);
  if (el.dataset.action === "open-day") { viewDay = n; tab = "today"; render(); window.scrollTo(0, 0); }
  if (el.dataset.action === "complete-day") completeDay(n);
  if (el.dataset.action === "reopen-day") reopenDay(n);
});

document.addEventListener("change", e => {
  const box = e.target;
  if (!(box instanceof HTMLInputElement) || !box.dataset.task) return;
  const rec = ensureRecord(Number(box.dataset.day));
  if (box.checked) rec.tasks[box.dataset.task] = true;
  else delete rec.tasks[box.dataset.task];
  saveState();
  render();
});

document.addEventListener("toggle", e => {
  const id = e.target.dataset && e.target.dataset.id;
  if (!id) return;
  if (e.target.open) openDetails.add(id); else openDetails.delete(id);
}, true);

render();
