/* NEATeHUB — shared interactions */

(function () {
  // Top banner dismiss
  const banner = document.querySelector('[data-banner]');
  if (banner) {
    if (localStorage.getItem('neate.banner.dismissed') === '1') {
      banner.classList.add('is-hidden');
    }
    const closer = banner.querySelector('[data-banner-close]');
    closer && closer.addEventListener('click', () => {
      banner.classList.add('is-hidden');
      localStorage.setItem('neate.banner.dismissed', '1');
    });
  }

  // Mobile nav drawer
  const openBtn = document.querySelector('[data-mnav-open]');
  const closeBtn = document.querySelector('[data-mnav-close]');
  const mnav = document.querySelector('[data-mnav]');
  openBtn && openBtn.addEventListener('click', () => {
    mnav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
  closeBtn && closeBtn.addEventListener('click', () => {
    mnav.classList.remove('is-open');
    document.body.style.overflow = '';
  });
  // Close on link click
  mnav && mnav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mnav.classList.remove('is-open');
      document.body.style.overflow = '';
    })
  );

  // Language toggle (UI only — prototype)
  document.querySelectorAll('[data-lang]').forEach(group => {
    group.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        group.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
      });
    });
  });

  // Reveal on scroll
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));
})();
