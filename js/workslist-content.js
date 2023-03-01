$(document).ready(function () {
    //新增一個作品列表的區塊
    $('.works-content').prepend('<div class="works-content-menu"></div>');
    $('.works-content-menu').append('<ul class="works-content-menu-list"></ul>')
    $('.works-content-menu-list').append('<li class="works-content-menu-list-title"></li>');
    $('.works-content-menu-list-title').append('<div><p><span>作品列表瀏覽</span><span>Portfolio</span></p></div>');
    WorkList('portfolio-myworks.html', 'Website', 'C.N | Designer 個人網站', 'Website Design');
    WorkList('portfolio-behero.html', 'Website', '你的原創分數有幾%', 'Website Design');
    WorkList('portfolio-handbook.html', 'Graphic', '索引數位產品手冊', 'Graphic Design');
    WorkList('portfolio-ainosco.html', 'Website', '是科探索', 'UI/UX Design');
    WorkList('portfolio-tomato.html', 'Graphic', '貞鮮果榮農產品貼紙', 'Graphic Design');
    WorkList('portfolio-queen.html', 'Website', '03/08 女王節', 'Website Design');
    WorkList('portfolio-openbook.html', 'Website', 'OPENBOOK 好書獎', 'Website Design');
    WorkList('portfolio-theater.html', 'Graphic', '中大型劇場風險管理初探', 'Graphic Design');
    WorkList('portfolio-deliver.html', 'Website', '您的知識餐點，正在外送中', 'Website Design');
    WorkList('portfolio-productdm.html', 'Graphic', '華藝學術投稿平台', 'Graphic Design');
    WorkList('portfolio-bookset.html', 'Graphic', '大學五書系列', 'Graphic Design');
    WorkList('portfolio-newyear.html', 'Website', '虎來報，福虎到', 'Website Design');
    WorkList('portfolio-rebuild.html', 'Graphic', '重建斯文', 'Graphic Design');
    WorkList('portfolio-SDGS.html', 'Website', 'SDGs永續發展目標主題書展', 'Website Design');
    WorkList('#', 'none', '敬請期待...', 'Comming Soon');
    //當前頁面增加樣式
    var PageName = $('.works-content-area h2').html();
    var ListLeng = $('.works-content-menu-list-link').length;
    for (let i = 0; i < ListLeng; i++) {
        var ListName = $('.works-content-menu-list-link').eq(i).children('a').children('p').children('span').eq(0).html();
        if (ListName == PageName) {
            $('.works-content-menu-list-link').eq(i).addClass('works-content-menu-list-link-active');
            $('.works-content-menu-list-link').eq(i).children('a').children('img').attr('src', 'image/pin.svg');
        }
    }
    //移除描述內容的預設行為
    $('.works-content-menu-list-link-active').children('a').click(function (e) {
        return false
    });
    $('.works-content-menu-list-link').eq(ListLeng - 1).children('a').click(function (e) {
        return false
    });
    //函式設定 - 動態新增作品列表的內容
    function WorkList(link, filtername, Name, type) {
        $('.works-content-menu-list').append('<li class="works-content-menu-list-link"><a href=' + link + ' data-filter=' + filtername + '><p><span>' + Name + '</span><span>' + type + '</span></p><img src="image/arrow-b.svg"></a></li>');
    };
});