$(document).ready(function () {
    //點擊聯繫視窗
    $('.contact-btn').click(function (e) {
        $('body').append('<div class="contact"></div>').addClass('scroll-off');
        $('.works-content-list').addClass('scroll-off');
        $('.contact').append('<div class="contact-area"></div>');
        $('.contact').fadeIn(500).css({ 'display': 'flex' });
        $('.contact-area').append('<div class="contact-area-content"></div>');
        $('.contact-area-content').append('<p>嗨，如果有設計的問題，歡迎與我聯繫。</p>');
        $('.contact-area-content').append('<a href="mailto:lincn65987@gmail.com" class="mail">信箱：lincn65987@gmail.com</a>');
        $('.contact-area-content').append('<a href="resume/resume.pdf" target="_blank" class="contact-area-content-btn btn btn-l btn-fill-primary">查看履歷</a>');
        $('.contact-area-content').append('<span>點擊訊息框外任一處關閉</span>');
        $('.contact-area').addClass('move-in');
        return false;
    });
    //關閉聯繫視窗
    $('body').on('click', '.contact', function () {
        $('body').removeClass('scroll-off');
        $('.works-content-list').removeClass('scroll-off');
        $('.contact-area').removeClass('move-in').addClass('move-out');
        $(this).fadeOut(500);
        setTimeout(() => {
            $(this).remove();
        }, 500);
    });
    //防止冒泡，觸發關閉機制
    $('body').on('click', '.contact-area-content', function () {
        e.stopPropagation();
    });
});