// Mobile navigation toggle
(function () {
  function q(sel) { return document.querySelector(sel); }
  function closeMenu() {
    var links = q('.nav-links'), back = q('.nav-backdrop');
    if (links) links.classList.remove('open');
    if (back) back.classList.remove('open');
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-toggle')) {
      var links = q('.nav-links'), back = q('.nav-backdrop');
      if (links) links.classList.toggle('open');
      if (back) back.classList.toggle('open');
      return;
    }
    if (e.target.closest('.nav-links a') || e.target.closest('.nav-backdrop')) closeMenu();
  });
})();
