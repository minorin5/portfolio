$(function() {
    $('.slick').slick( {
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true
    });

    new WOW( {
        animeteClass: 'animate_animated'
    }).init();

    $('.left').slideToggle();
    $('.wd30').click(function() {
        $(this).find('.color6.left').slideToggle();
    });

    $('.slideToggle').slideToggle();
    $('.jc-more').click(function () {
        $('.slideToggle').slideToggle();
    });

    $('.top-bear1').removeClass('top-bear1').addClass('top-bear');

    // お問い合わせフォーム
    $('.btn').click(function(){
    $('.modal').fadeIn();
    });

    $('.close').click(function(){
        $('.modal').fadeOut();
    });
    
});