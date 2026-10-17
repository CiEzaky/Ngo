// Mobile menu
const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });

document.getElementById('year').textContent = new Date().getFullYear();

// "Ask about..." links preselect the form topic
document.querySelectorAll('[data-topic]').forEach(a => a.addEventListener('click', () => {
  document.getElementById('topic').value = a.dataset.topic;
}));

// Demo enquiry form: validates in the browser only. NOTHING is sent or stored.
// To go live, see "Connecting the form" in README.md.
const form = document.getElementById('enquiry'), msg = document.getElementById('form-msg');
form.addEventListener('submit', e => {
  e.preventDefault();
  let firstBad = null;
  ['name', 'email', 'message'].forEach(id => {
    const f = document.getElementById(id);
    const bad = !f.value.trim() || (id === 'email' && !f.validity.valid);
    f.setAttribute('aria-invalid', bad);
    if (bad && !firstBad) firstBad = f;
  });
  if (firstBad) { msg.textContent = 'Please complete the highlighted fields.'; firstBad.focus(); return; }
  form.reset();
  msg.textContent = 'Demo only: your enquiry was not sent or saved. Connect a form service to go live.';
});

// Share this page (Web Share API with copy-link fallback). Shares the page URL only.
const share = document.getElementById('share'), sm = document.getElementById('share-msg');
share.addEventListener('click', async () => {
  const data = { title: document.title, url: location.href };
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(data.url); sm.textContent = 'Link copied.'; }
  } catch (_) { /* cancelled */ }
});
