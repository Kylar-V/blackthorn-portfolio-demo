document.addEventListener('DOMContentLoaded', function () {
  // Header scroll effect
  var header = document.querySelector('.site-header');
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Mobile menu toggle
  var mobileToggle = document.querySelector('.mobile-toggle');
  var mainNav = document.querySelector('.main-nav');
  var mobileMenu = document.querySelector('.mobile-menu');
  var openLabel = mobileToggle ? mobileToggle.getAttribute('data-label-open') : null;
  var closeLabel = mobileToggle ? mobileToggle.getAttribute('data-label-close') : null;

  function setMobileMenu(open) {
    if (!mainNav || !mobileToggle) return;
    mainNav.classList.toggle('is-open', open);
    if (mobileMenu) mobileMenu.classList.toggle('is-open', open);
    mobileToggle.classList.toggle('is-open', open);
    mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileToggle.setAttribute('aria-label', open ? closeLabel : openLabel);
  }

  if (mobileToggle) {
    setMobileMenu(false);
    mobileToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.contains('is-open');
      setMobileMenu(!isOpen);
    });
  }

  document.querySelectorAll('.main-nav a, .mobile-phone').forEach(function (link) {
    link.addEventListener('click', function () {
      setMobileMenu(false);
    });
  });

  // Menu category tab switching
  var tabs = document.querySelectorAll('.menu-tab');
  var panels = document.querySelectorAll('.menu-category-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var index = tab.getAttribute('data-index');

      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach(function (panel) {
        panel.style.display = panel.getAttribute('data-index') === index ? 'block' : 'none';
      });
    });
  });

  // Contact form fake submit
  var contactForm = document.getElementById('contactForm');
  var successState = document.getElementById('successState');
  var sendAnother = document.getElementById('sendAnother');

  if (contactForm && successState) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      contactForm.classList.add('is-hidden');
      successState.classList.add('active');
    });
  }
  if (sendAnother && contactForm && successState) {
    sendAnother.addEventListener('click', function () {
      successState.classList.remove('active');
      contactForm.classList.remove('is-hidden');
      contactForm.reset();
    });
  }
});
