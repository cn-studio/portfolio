$(document).ready(function () {
    //
    PhotoSize();
    $(window).resize(function () {
        PhotoSize();
    });
    //函式 - 動態設定作品展示高度
    function PhotoSize() {
        var WorksWidth = $('.works-list-m .works-list-img-area .works-list-img-area-work').width();
        $('.works-list-img-area').height(WorksWidth);
    }
});