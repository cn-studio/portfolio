$(document).ready(function () {
    //控制頁面內切換按鈕的指向目標
    var PageName = $('.works-content-area h1').html();
    var ListLeng = $('.works-content-menu-list-link').length;
    for (let i = 0; i < ListLeng; i++) {
        var ListName = $('.works-content-menu-list-link').eq(i).children('a').children('p').children('span').eq(0).html();
        if (ListName == PageName) {
            var PrevPage = $('.works-content-menu-list-link').eq(i-1).children('a').attr('href');
            var NextPage = $('.works-content-menu-list-link').eq(i+1).children('a').attr('href');
            $('.works-content-area ul li').eq(0).children('a').attr('href', PrevPage);
            $('.works-content-area ul li').eq(2).children('a').attr('href', NextPage);
            if (i-- < 1) {
                $('.works-content-area ul li').eq(0).children('a').addClass('works-list-btn-hidden');
            }
            if (i++ >= ListLeng-3) {
                $('.works-content-area ul li').eq(2).children('a').addClass('works-list-btn-hidden');
            }
        }
    }
});