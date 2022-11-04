 /*------------THEME 1------------*/
 /*1.1*
 $(function (){
  $(document).ready(function () {
      var html = $('h1').text();
      alert(html);
    });
});

 /*1.1 END */ 
 
  /*1.2 *
  $(function (){
    $(document).ready(function () {
        var html = $('.link-moto').text();
        alert(html);
      });
  });
  
  /*1.2 END */ 

  /*1.3 *
  $(function (){
    $(document).ready(function () {
      $('.slide-btn').hide();
  });
  });
  /*1.3 END */

  /*1.4 * 
  $(function (){
    $(document).ready(function () {
      $('.features-grid p').hide(3000);
  });
  });
  /*1.4 END */
  
  /*1.5 *
  $(function (){
    $(document).ready(function () {
      $('.categorie').show(2000);
      
  });
  });
  /*1.5 END */

  /*1.6* 
  $(function (){
    $(document).ready(function () {
        var html = $('.s').text();
        alert(html);
      });
  });
  
  /*1.6 END */

  /*1.7 *
  $(function (){
    $(document).ready(function () {
      $('h2').hide(3500);
    
        $('h2').show(2000);
      });   
  });
   
  /*1.7 END */

  /*1.8 *
  $(function (){
    $(document).ready(function () {
      $('.pin').hide(1000);
    
        $('.pin').show(2000);
      });   
  });
  
  /*1.8 END */

  /*1.9 *
  $(function (){
    $(document).ready(function () {
      
        var html = $('.price').text();
        alert(html);
      });
  });
  
  /*1.9 END */

  /*1.10 *
  $(function (){
    $(document).ready(function () {
     
        var html = $('.num').text();
        alert(html);
      });
  });
  
  /*1.10 END */

  /*1.11 *
  $(function (){
    $(document).ready(function () {
      
        var html = $('.post-head').text();
        alert(html);
      });
  });
  
  /*1.11 END */

  /*1.12 * 
  $(function (){
    $(document).ready(function () {
      $('.hideimg').hide();
  });
  });
  
  /*1.12 END */
  /*----------THEME 1 END----------*/


  /*----------THEME 2--------------*/
  /*2.1 * 
  $(function (){
    $(document).ready(function () {
      $('h1').fadeOut(3000);
      $('h1').fadeIn(3000);
  });
}); 
  /*2.1 END */
  
  /*2.3*
  $(function (){
    $(document).ready(function () {
      $('.slide').slideUp(2000);
    
        $('.slide').slideDown(1000);
      });   
  });
   
  /*2.3 END */

  /*2.4*
  $(function (){
    $(document).ready(function () {
      $('.blog').slideUp(2000);
      $('.blog-post').fadeOut(1500);

        $('.blog').slideDown(3000);
        $('.blog-post').fadeIn(6000);
          
  });
    });
     
  /*2.4 END*/

   /*2.7*
   $(function() {
    $(document).ready(function () {
        $(".top-nav").slideUp("slow", function() {
            alert("Меню було сховано");
        })
    });
});
  
  /*2.7 END */

  /*----------THEME 2 END----------*/


  /*----------THEME 3--------------*/
/*3.1*/
$(function (){
  $(document).ready(function () {
    $('.slide-btn').click(function(){
      
      alert('Була натиснута кнопка з класом slide-btn');
    });
});
});
/*3.1 END*/

/*3.2*
$(function (){
  $('.features-grids').click(function() {
   $('.col-md-3').slideUp(3000);

});
}); 

/*3.2 END*/

/*3.3*
$(function (){
  $('.features-grids').click(function() {
   $('.col-md-3').slideToggle(2000);

});
}); 
/*3.3 END*/

/*3.4*
$(function (){
  $('#img_1').click(function() {
    $("#img_1").fadeOut();
  $('.block1').click(function() {
      $("#img_1").fadeIn();
    }); 
});
});
$(function (){
  $('#img_2').click(function() {
    $("#img_2").fadeOut();
  $('.block2').click(function() {
      $("#img_2").fadeIn();
    }); 
});
});
$(function (){
  $('#img_3').click(function() {
    $("#img_3").fadeOut();
  $('.block3').click(function() {
      $("#img_3").fadeIn();
    }); 
});
});
$(function (){
  $('#img_4').click(function() {
    $("#img_4").fadeOut();
  $('.block4').click(function() {
      $("#img_4").fadeIn();
    }); 
});
});

/*3.4 END*/

/*3.5*
$(function (){
  $('.top-nav').mouseover(function() {
    $(".down").slideUp();
  $('.top-nav').mouseout(function() {
      $(".down").slideDown();
    }); 
});
});  
/*3.5 END*/

/*3.7*
$(function (){
  $('#p').click(function() {
    $(".head-moto-img").slideUp();
  });
});
/*3.7 END*/

  /*----------THEME 3 END----------*/

  /*----------THEME 4--------------*/
  /*4.1*
  $(function (){
    $('.s').click(function(){
      alert(this.outerHTML);
  });
});
/*4.1 END*/

/*4.2*
$(function (){
  $(document).ready(function(){
    const value = document.querySelector('#email').value;
    alert(value);
});
});
/*4.2 END*/

/*4.3*
$(function (){
  $('.link-moto').click(function(){
    const href = document.querySelector('#selector1').href;
     alert(href);
    
});
$('.link-moto2').click(function(){
  const href = document.querySelector('#selector2').href;
   alert(href);
});
$('.link-moto3').click(function(){
  const href = document.querySelector('#selector3').href;
   alert(href);
});
});
/*4.3 END*/

/*4.4*
$(function (){
  $('.1').click(function(){
    const src = document.querySelector('#img_1').src;
     alert(src);
    
});
$('.2').click(function(){
  const src = document.querySelector('#img_2').src;
   alert(src);
});
$('.3').click(function(){
  const src = document.querySelector('#img_3').src;
   alert(src);
});
$('.4').click(function(){
  const src = document.querySelector('#img_4').src;
   alert(src);
});
});
/*4.4 END*/

/*4.7*
$(function (){
  $('#img_1').click(function(){
  document.getElementById('myCaption').innerHTML = 'Ви обрали: Харлей Девідсон';
});
  $('#img_2').click(function(){
  document.getElementById('myCaption2').innerHTML = 'Ви обрали: Кросовий мотоцикл';
});
$('#img_3').click(function(){
  document.getElementById('myCaption3').innerHTML = 'Ви обрали: Гоночний мотоцикл';
});
$('#img_4').click(function(){
  document.getElementById('myCaption4').innerHTML = 'Ви обрали: Концептуальний мотоцикл';
});
});
/*4.7 END*/


  /*----------THEME 4 END----------*/

  /*----------THEME 5--------------*/
  /*5.1*
  $(function (){
    $("p").removeClass('about-moto').addClass('new');

  });
  /*5.1 END*/

  /*5.3*
  $(function (){
    $("li").removeClass('m1').addClass('svitlo');

  });
  /*5.3 END*/

/*5.4*
$(function (){
  $("#img_1, #img_2, #img_3, #img_4").click(function () {  
    $(this).clone().appendTo('.containers').parent().removeClass('koshik-wrapper').addClass('full-koshik')
});

});

/*5.4 END*/

/*5.5*/
$(function (){
  $("#img_1, #img_2, #img_3, #img_4").click(function () {  
    $(this).remove().clone().appendTo('.containers').parent().removeClass('koshik-wrapper').addClass('full-koshik')
});

});

/*5.5 END*/
  /*----------THEME 5 END----------*/

  /*----------THEME 6--------------*/
  /*6.1*
  $(function() {
    $('.slide-btn').click(function(){
      $('.slide-btn').height(100);

    });
    
  });
  /*6.1 END*/

  /*6.2-3*
  $(document).ready(function(){
    const change_width = (obj, size) => {
      $(obj).css({
        "width": size,
        "height": size,
     "max-width": size,
        "max-height": size
      });
    }

   change_width('#img_1', 250);
});
  /*6.2-3 END*/
  
  /*6.5*
  $(document).ready(function() {
  $('img').on('click', function() {
    $(this).toggleClass('expose');

    if($(this).hasClass('expose')) {
        $(this).animate({ width: "100%", height: "100%" }, 100); 
    } else {
        $(this).animate({ width: "100px", height: "90px" }, 100); 
    }
}); 
});
  /*6.5 END*/
  

  /*6.6*
  $(function (){
    $('#img_1').mouseover(function() {
      $("#img_1").width(50);
    $('#img_1').mouseout(function() {
        $("#img_1").width(150);
      }); 
  });
  });  
  /*6.6 END*/
  /*----------THEME 6 END----------*/

  /*----------THEME 7--------------*/
  /*7.1*/
  $(function (){
  $('.header h1').css('background', 'yellow');

});
  /*7.1 END*/

  /*7.3*/
  $(function() {
  $('#bag').prop('checked', true);
});
  /*7.3 END*/

  /*7.4 */
  $(function() {
  $('#inch_yes').prop('checked', true);
});
  /*7.4 END*/

  /*7.6 END*/
  $(function (){
    $('#radio').css('background', 'red');;

  });
  /*7.6 END*/
  




  /*----------THEME 7 END----------*/
  
