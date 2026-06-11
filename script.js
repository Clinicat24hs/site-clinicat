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
