$(document).ready(function () {
    $(window).scroll(function () {
        //
        var WindowScrollTop = $(window).scrollTop();
        var AboutTop = $('.about').offset().top;
        var SkillTop = $('#skill').offset().top;
        var SectionNum = $('section').length;
        if (WindowScrollTop > AboutTop && WindowScrollTop < SkillTop) {
            $('.action-img').css({ bottom: (WindowScrollTop - AboutTop) * 1 });
        } else {
            $('.action-img').css({ bottom: '0' });
        }
        //
        for (let i = 0; i < SectionNum; i++) {
            if (WindowScrollTop * 1.25 >= $('section').eq(i).offset().top) {
                $('.dot').removeClass('dot-active');
                $('.name').removeClass('name-active');
                $('.dot').eq(i).addClass('dot-active');
                $('.dot').eq(i).prev('span').addClass('name-active');
            }
        }
    });
});