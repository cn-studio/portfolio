$(document).ready(function () {
    WorksContentMenu();
    $(window).resize(function () {
        WorksContentMenu();
        WorksContentMenuListFixed()
    });
    $(window).scroll(function () {
        WorksContentMenu();
        WorksContentMenuListFixed()
    });
    $('.works-content-menu').scroll(function () {
        WorksContentMenu();
        WorksContentMenuListFixed()
    });
    //函式 - 指定作品選單尺寸
    function WorksContentMenu() {
        var HeaderHeight = $('header').height();
        var FooterHeight = $('footer').height();
        var WorksContentMenuHeight = document.body.clientHeight - HeaderHeight - FooterHeight;
        $('.works-content-menu').css({ 'height': WorksContentMenuHeight });
    }
    //函式 - 當畫面捲動時，固定選單
    function WorksContentMenuListFixed() {
        var WorksContentMenuHeight = $('.works-content-menu').innerHeight();
        var WorksContentMenuWidth = $('.works-content-menu').innerWidth();
        $('.works-content-menu-list').innerHeight(WorksContentMenuHeight);
        $('.works-content-menu-list').innerWidth(WorksContentMenuWidth);
        $('.works-content-menu-list').addClass('works-content-menu-fixed');
    }
});