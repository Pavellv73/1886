$(document).ready(function () {
    $(document).ready(function () {
        $('.carousel').carousel();
    });

    $('.fancybox').fancybox();

    $(".phone").mask("+7 (999) 999-99-99");

    $('input').change(function () {
        $('input').removeClass('incorrect correct');
    });

    $(".logo-block").click(function () {
        var habmenu = $(".menu-block");
        habmenu.slideToggle(300)
    });
    $('nav a').click(function () {
        if ($(window).width() > 960) {
            $('.menu-block').fadeIn(300);
        }
        else {
            $('.menu-block').slideUp(300);
        }
    });

    // плавный скролинг по ссылкам
    $('.scroll-to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top - 100}, 500);
        }
        return false;
    });

    $('.video-slider-block .slick-slider').slick({
        dots: true,
        dotsClass: "dots",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".slick-prev",
        nextArrow: ".slick-next"
    });

    $('.tabs-slider .slider-two').click(function () {
        $('.tabs-slider .slider-one').removeClass('tab-active');
        $('.two').addClass('video-active');
        $('.one').removeClass('video-active');
    });

    $('.tabs-slider .slider-one').click(function () {
        $('.tabs-slider .slider-two').removeClass('tab-active');
        $('.one').addClass('video-active');
        $('.two').removeClass('video-active');
    });

    $('.history-block').on('click', function () {
        $(this).find('.hidden-history-text').fadeToggle(300);
    });

    $('label.info1').click(function () {
        $('.faq-popup1').fadeToggle(300);
        $('.faq-popup2').fadeOut(300);
    });


    $('label.info2').click(function () {
        $('.faq-popup2').fadeToggle(300);
        $('.faq-popup1').fadeOut(300);

    });

    $('.reviews-slider .slick-slider').slick({
        dots: true,
        dotsClass: "dots",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: ".slick-prev2",
        nextArrow: ".slick-next2"
    });

    $('.question-answer-block').on('click', function () {
        $(this).find('.answer').slideToggle(300);
        $(this).find('.question').toggleClass('question-active', 1000);
    });

    $('.walls-slider .slick-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".slick-prev3",
        nextArrow: ".slick-next3",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 758,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // var _download = false;
    // var _target='';
    // $('form').ajaxForm({
    //     beforeSubmit: function(d, $e){
    //         $('input').removeClass('incorrect');
    //
    //         var emailReg = new RegExp("^[-0-9a-z\._]+\@[-0-9a-z\.]+\.[a-z]{2,4}$", "i"),
    //             phoneReg = '';
    //
    //         for (var j in d) {
    //             /*телефон*/
    //             if(d[j].name == 'phone' && d[j].value == '') {
    //                 $e.find('input[name="phone"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             if(d[j].name == 'phone' && d[j].value != '') {
    //                 for (var i = 0; i <= 9; i++) {
    //                     phoneReg = new RegExp(i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString());
    //
    //                     if (phoneReg.test(d[j].value)) {
    //                         $e.find('input[name="phone"]').addClass('incorrect');
    //                         return false;
    //                     }
    //                 }
    //             }
    //
    //             $e.find('input[name="phone"]').addClass('correct');
    //
    //             /*имя*/
    //             if(d[j].name == 'name' && d[j].value == '') {
    //                 $e.find('input[name="name"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             $e.find('input[name="name"]').addClass('correct');
    //
    //             /*email*/
    //             if(d[j].name == 'email' && d[j].value == '') {
    //                 $e.find('input[name="email"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             if (d[j].name == 'email' && d[j].value != "") {
    //                 if (!emailReg.test(d[j].value)) {
    //                     $e.find('input[name="email"]').addClass('incorrect');
    //                     return false;
    //                 }
    //             }
    //
    //             $e.find('input[name="email"]').addClass('correct');
    //
    //             /*цель*/
    //             if (d[j].name == 'target') {
    //                 _target = d[j].value;
    //             }
    //
    //             if (d[j].name == 'download') {
    //                 _download = true;
    //             }
    //         }
    //
    //         return true;
    //     },
    //
    //     success: function(data){
    //         if (_download == true) {
    //
    //             var link = document.createElement('a');
    //             link.setAttribute('href','/price.pdf');
    //             link.setAttribute('download','download');
    //             onload=link.click();
    //
    //             _download = false;
    //         }
    //         console.info(data);
    //         $('input').removeClass('incorrect correct');
    //         $.fancybox($('.thnx'));
    //     }
    // });

});
