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

    $('.wd33 img').hover(
        function() {
        $(this).addClass('wow animate__animated animate__headShake');
    },
        function() {
            $(this).removeClass('wow animate__animated animate__headShake')
        });

    // お問い合わせフォーム
    $('.btn').click(function(){
    $('.modal').fadeIn();
    });

    $('.close').click(function(){
        $('.modal').fadeOut();
    });

    //カーソル要素の指定
  var cursor=$("#cursor");
  
  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove",function(e){
               //カーソルの座標位置を取得
    var x=e.clientX;
    var y=e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      "top":y+"px",
      "left":x+"px"
    });
  });

  //aタグホバー
  $("a").on({
    "mouseenter": function() {
      //activeクラス付与
      cursor.addClass("active");
      stalker.addClass("active");
    },
    "mouseleave": function() {
      cursor.removeClass("active");
      stalker.removeClass("active");
      
    }
  });
    
});