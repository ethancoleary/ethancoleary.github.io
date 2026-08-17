document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.toggle-link');
  toggles.forEach(function (el) {
    el.addEventListener('click', function () {
      var target = document.getElementById(el.getAttribute('data-target'));
      if (target) {
        target.classList.toggle('open');
      }
    });
  });
});
