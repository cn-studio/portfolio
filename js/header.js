$(document).ready(function () {
    $(window).scroll(function () {
        var HeaderHeight = $('header ul').height();
        var WindowScrollTop = $(window).scrollTop();
        $('header').height(HeaderHeight);
        if (WindowScrollTop > 0) {
            $('header').addClass('header-fixed');
        } else {
            $('header').removeClass('header-fixed');
        }
    });
});