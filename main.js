$(function() {
    $('.drawer').drawer();

    $('.slick').slick( {
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true
    });

    new WOW( {
        animeteClass: 'animate_animated'
    }).init();

    $('.left').slideToggle();
    $('.detail').click(function() {
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

  $('.link').hover(function() {
  console.log('反応してる');
});
  //aタグホバー
  $("a, .big").on({
    "mouseenter": function() {
      //activeクラス付与
      cursor.addClass("active");
    },
    "mouseleave": function() {
      cursor.removeClass("active");
      
    }
  });

  $('.jc-more').click(function() {
    if($('.blue').html() == 'もっと見る') {
        $('.blue').html('閉じる');
    } else {
        $('.blue').html('もっと見る');
    }
  });

  $('.jc-more').click(function() {
    if($('.arrow2').html() == '↓') {
        $('.arrow2').html('↑');
    } else {
        $('.arrow2').html('↓');
    }
  });
    
});