/* Main.js */
frame = document.getElementById("todoist-frame");
$(window).resize(hidePremium);

hidePremium();
$(window).focus();

function hidePremium() {
  frame.style.height = (window.innerHeight + 24) + "px"
}
