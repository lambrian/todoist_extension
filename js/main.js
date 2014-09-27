/* Main.js */
frame = document.getElementById("todoist-frame");
$(window).resize(hidePremium);

hidePremium();
function hidePremium() {
  var buffer = (frame.offsetWidth < 750) ? 45 : 30;
  frame.style.height = (window.innerHeight + buffer) + "px"
}
