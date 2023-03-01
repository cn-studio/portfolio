$(document).ready(function () {
    //
    $('.top-btn').bind('click', function (e) {
        $('html body').stop().animate({ scrollTop: 0 }, 500);
        return false;
    });
    //
    TopBtnStatus();
    //
    $(window).resize(function () {
        TopBtnStatus();
    });
    //
    $(window).scroll(function () {
        TopBtnStatus();
    });
    //偵測返回頂端按鈕是否隱藏
    function TopBtnStatus() {
        var WindowScrollTop = $(window).scrollTop();
        var ScreenWidth = document.body.clientWidth;
        var HeaderHeight = $('header').height();
        var WroksListFirst = $('.works-list:first-child').outerHeight(true);
        var WroksListOffsetTop = $('.works-list:first-child').offset().top;
        if (ScreenWidth <= 480 && WindowScrollTop >= WroksListFirst + WroksListOffsetTop - HeaderHeight) {
            $('.top-btn').addClass('top-btn-show');
        } else {
            $('.top-btn').removeClass('top-btn-show');
        }
    }
});