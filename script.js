/* Fill these in when you have them. An empty value shows "Link coming soon"
   instead of a dead link. */
const LINKS = {
  trade: '',                          // o1 token page or DEX link
  x: 'https://x.com/DipOnBase',
  contract: '',                       // basescan.org/token/0x...
  o1: ''                              // o1 launch page
};

/* ------------------------------------------------------------- links ---- */
const toast = document.getElementById('toast');
let toastTimer = 0;
document.querySelectorAll('[data-link]').forEach(a => {
  const url = LINKS[a.dataset.link];
  if (url) {
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
  } else {
    a.addEventListener('click', e => {
      e.preventDefault();
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
    });
  }
});
