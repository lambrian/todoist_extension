/* Main.js */
$window = $(window);
$frame = $("#todoist_frame");
hidePremium();

$(window).resize(hidePremium);

function hidePremium() {
    $frame.height($window.height() + 39);
    if ($frame.width() < 750) {
        $frame.height($window.height() + 39);
    } else {
        $frame.height($window.height() + 18);
    }
}