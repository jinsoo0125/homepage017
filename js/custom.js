$(function () {

    const mvs = new Swiper('.main_visual_slide', {

        loop: true,
        speed: 1500,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,

        },
   

    })


});


$(function () {
    
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }


})

}) 


$(function () {


    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }

    })


    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul>li ul').removeAttr('style')
    })
})