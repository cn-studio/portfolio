$(document).ready(function () {
    //因最後一個由CSS強制定義，最後一個無須設定
    portfolioImgSize(1, 'm');
    portfolioImgSize(2, 'l');
    portfolioImgSize(3, 'l');
    portfolioImgSize(4, 'm');
    portfolioImgSize(5, 'm');
    portfolioImgSize(6, 'l');
    portfolioImgSize(7, 'l');
    portfolioImgSize(8, 'm');
    portfolioImgSize(9, 'm');
    portfolioImgSize(10, 'l');
    portfolioImgSize(11, 'l');
    portfolioImgSize(12, 'm');
    portfolioImgSize(13, 'm');
    portfolioImgSize(14, 'l');
    portfolioImgSize(15, 'l');
    portfolioImgSize(16, 'm');
    portfolioImgSize(17, 'm');
    portfolioImgSize(18, 'l');
    portfolioImgSize(19, 'l');
    //計算目前作品數量
    var WorksLength = $('.works-list').length;
    if (WorksLength % 2 !== 0) {
        $('.works-list:last-child').removeClass('.works-list-m').addClass('works-list-xl');
    }
    //這裡取消最後一個的點擊回饋
    $('.update-alert').click(function (e) {
        return false;
    });
    //函式 - 指定每個項目的寬度
    function portfolioImgSize(ListNumber, ImgSize) {
        $('.works-list').eq(ListNumber - 1).addClass('works-list-' + ImgSize);
    }
});