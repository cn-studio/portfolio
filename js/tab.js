$(document).ready(function () {
    //頁籤內容切換
    $('.works-tab-content-list li a').bind('click', function (e) {
        var WorksLength = $('.works-list').length;
        var ThisTabName = $(this).data('name');
        $('.works-tab-content-list li').removeClass('works-tab-content-list-active');
        $(this).parent('li').addClass('works-tab-content-list-active');
        for (let index = 0; index < WorksLength; index++) {
            $('.works-list').eq(index).hide().removeClass('works-list-m works-list-l works-list-xl works-list-left works-list-right');
            if (ThisTabName == 'website') {
                $(this).children('img').attr('src', 'image/website-white.svg');
                $('.works-tab-content-list li a[data-name="all"]').children('img').attr('src', 'image/all-black.svg');
                $('.works-tab-content-list li a[data-name="graphic"]').children('img').attr('src', 'image/graphic-black.svg');
                $('.works-list[data-type="website"]').show();
                $('.works-list[data-type="website"]').eq(0).addClass('works-list-m works-list-left');
                $('.works-list[data-type="website"]').eq(1).addClass('works-list-l works-list-right');
                $('.works-list[data-type="website"]').eq(2).addClass('works-list-l works-list-left');
                $('.works-list[data-type="website"]').eq(3).addClass('works-list-m works-list-right');
                $('.works-list[data-type="website"]').eq(4).addClass('works-list-m works-list-left');
                $('.works-list[data-type="website"]').eq(5).addClass('works-list-l works-list-right');
                $('.works-list[data-type="website"]').eq(6).addClass('works-list-l works-list-left');
                $('.works-list[data-type="website"]').eq(7).addClass('works-list-m works-list-right');
                $('.works-list[data-type="none"]').show().removeClass('works-list-m works-list-l works-list-left works-list-right works-list-xl').addClass('works-list-xl');
            } else if (ThisTabName == 'graphic') {
                $(this).children('img').attr('src', 'image/graphic-white.svg');
                $('.works-tab-content-list li a[data-name="all"]').children('img').attr('src', 'image/all-black.svg');
                $('.works-tab-content-list li a[data-name="website"]').children('img').attr('src', 'image/website-black.svg');
                $('.works-list[data-type="graphic"]').show();
                $('.works-list[data-type="graphic"]').eq(0).addClass('works-list-m works-list-left');
                $('.works-list[data-type="graphic"]').eq(1).addClass('works-list-l works-list-right');
                $('.works-list[data-type="graphic"]').eq(2).addClass('works-list-l works-list-left');
                $('.works-list[data-type="graphic"]').eq(3).addClass('works-list-m works-list-right');
                $('.works-list[data-type="graphic"]').eq(4).addClass('works-list-m works-list-left');
                $('.works-list[data-type="graphic"]').eq(5).addClass('works-list-l works-list-right');
                $('.works-list[data-type="graphic"]').eq(6).addClass('works-list-l works-list-left');
                $('.works-list[data-type="none"]').show().removeClass('works-list-m works-list-l works-list-left works-list-right works-list-xl').addClass('works-list-xl');
            } else if (ThisTabName == 'all') {
                $(this).children('img').attr('src', 'image/all-white.svg');
                $('.works-tab-content-list li a[data-name="graphic"]').children('img').attr('src', 'image/graphic-black.svg');
                $('.works-tab-content-list li a[data-name="website"]').children('img').attr('src', 'image/website-black.svg');
                $('.works-list').show();
                $('.works-list').eq(0).addClass('works-list-m works-list-left');
                $('.works-list').eq(1).addClass('works-list-l works-list-right');
                $('.works-list').eq(2).addClass('works-list-l works-list-left');
                $('.works-list').eq(3).addClass('works-list-m works-list-right');
                $('.works-list').eq(4).addClass('works-list-m works-list-left');
                $('.works-list').eq(5).addClass('works-list-l works-list-right');
                $('.works-list').eq(6).addClass('works-list-l works-list-left');
                $('.works-list').eq(7).addClass('works-list-m works-list-right');
                $('.works-list').eq(8).addClass('works-list-m works-list-left');
                $('.works-list').eq(9).addClass('works-list-l works-list-right');
                $('.works-list').eq(10).addClass('works-list-l works-list-left');
                $('.works-list').eq(11).addClass('works-list-m works-list-right');
                $('.works-list').eq(12).addClass('works-list-m works-list-left');
                $('.works-list').eq(13).addClass('works-list-l works-list-right');
                $('.works-list[data-type="none"]').show().removeClass('works-list-m works-list-l works-list-left works-list-right works-list-xl').addClass('works-list-xl');
            }
        }
        return false;
    });
});