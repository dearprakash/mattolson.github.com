var APP = {};

APP.onclick_external = function(e) {
  window.open($(this)[0].href);
  e.preventDefault();
}
