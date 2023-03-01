$(document).ready(function () {
    //當前啟用全部作品按鈕
    $('.works-content-menu-list-filter-menu-type a[data-name="All"]').parent('li').addClass('works-content-list-filter-menu-type-active');
    //作品分類
    $('.works-content-menu-list-filter-menu-type').children('a').bind('click', function (e) {
        var ThisBtnFilterName = $(this).data('name');
        var WorksContentListLength = $('.works-content-menu-list-link').length;
        $('.works-content-menu-list-filter-menu-type').removeClass('works-content-list-filter-menu-type-active');
        $(this).parent('.works-content-menu-list-filter-menu-type').addClass('works-content-list-filter-menu-type-active');
        for (let index = 0; index < WorksContentListLength; index++) {
            var WorksContentListFilter = $('.works-content-menu-list-link').eq(index).children('a').data('filter')
            if (ThisBtnFilterName == WorksContentListFilter || WorksContentListFilter == 'none') {
                $('.works-content-menu-list-link').eq(index).children('a').show();
            } else if (ThisBtnFilterName == 'All') {
                $('.works-content-menu-list-link').children('a').show();
            }
            else {
                $('.works-content-menu-list-link').eq(index).children('a').hide();
            }
        }
        return false;
    });;
});