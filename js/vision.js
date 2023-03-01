$(document).ready(function () {
    //讓首頁畫面有淡入的效果
    $('.fade-out-area').delay(500).fadeOut(1000);
    //
    Vision();
    $(window).resize(function () {
        Vision();
    });
    //函式 - 讓動畫撐滿畫面
    function Vision() {
        var ScreenHeight = document.body.clientHeight;
        $('.title').css({ 'height': ScreenHeight });
        if (ScreenHeight < 500) {
            $('.title-area').css({ 'display': 'none' });
            $('.title-other').css({ 'display': 'none' });
        } else {
            $('.title-area').css({ 'display': 'block' });
            $('.title-other').css({ 'display': 'flex' });
        }
    }
});