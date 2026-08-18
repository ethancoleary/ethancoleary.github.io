document.addEventListener('DOMContentLoaded', function () {
  // Existing abstract toggles (research.html)
  var toggles = document.querySelectorAll('.toggle-link');
  toggles.forEach(function (el) {
    el.addEventListener('click', function () {
      var target = document.getElementById(el.getAttribute('data-target'));
      if (target) {
        target.classList.toggle('open');
      }
    });
  });

  // Collapsible section toggles (index.html "Before 2026...")
  var collapsibles = document.querySelectorAll('.collapsible-title');
  collapsibles.forEach(function (el) {
    el.addEventListener('click', function () {
      var target = document.getElementById(el.getAttribute('data-target'));
      var indicator = el.querySelector('.toggle-indicator');
      if (target) {
        target.classList.toggle('open');
        if (indicator) {
          indicator.textContent = target.classList.contains('open') ? '[-]' : '[+]';
        }
      }
    });
  });
});