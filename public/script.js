// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const isHidden = mobile.hasAttribute('hidden');
    if (isHidden) mobile.removeAttribute('hidden'); else mobile.setAttribute('hidden','');
    toggle.textContent = isHidden ? '✕' : '☰';
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.setAttribute('hidden','');
    toggle.textContent = '☰';
  }));
}

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Formulários: enviam via WhatsApp (site estático, sem backend).
// Delegação no document: o listener sobrevive à navegação client-side do Next
// (o document persiste), então formulários montados depois também funcionam.
document.addEventListener('submit', e => {
  const form = e.target.closest && e.target.closest('[data-wpp-form]');
  if (!form) return;
  e.preventDefault();
  const fd = new FormData(form);
  const lines = ['Olá, Clinicat! 🐾', ''];
  const labels = { nome:'Nome', telefone:'WhatsApp', email:'E-mail', pet:'Pet', assunto:'Assunto', mensagem:'Mensagem' };
  Object.keys(labels).forEach(k => {
    const v = fd.get(k);
    if (v) lines.push('*' + labels[k] + ':* ' + v);
  });
  const phone = form.getAttribute('data-wpp-phone') || '5511932565663';
  const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener');
});
