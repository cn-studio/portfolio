$(document).ready(function () {
    PhotoImg();
    //函式 - 偵測裝置別設定作品展示排版
    function PhotoImg() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            $('.works-list-img-area>div:nth-child(2)').css({ 'opacity': '0' });
        }
    }
});