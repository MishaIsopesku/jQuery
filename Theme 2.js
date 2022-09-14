 /*----------THEME 2--------------*/
  /*2.1 */ 
  $(function (){
    $('#btn13').click(function() {
      $('h1').fadeOut(3000);
  });
  });
  /*2.1 END */
  
  /*2.3*/
  $(function (){
    $('#btn15').click(function() {
      $('.slide').slideUp(2000);
    $('#btn15').click(function() {
        $('.slide').slideDown(1000);
      }); 
      
  });
  }); 
  /*2.3 END */

  /*2.4*/
  $(function (){
     $('#btn16').click(function() {
      $('.blog').slideUp(2000);
      $('.blog-post').fadeOut(1500);

      $('#btn16').click(function() {
        $('.blog').slideDown(3000);
        $('.blog-post').fadeIn(6000);
          
  });
    });
});     
  /*2.4 END*/

   /*2.7*/
   $(function() {
    $('#btn14').click(function() {
        $(".top-nav").slideUp("slow", function() {
            alert("Меню було сховано");
        })
    });
});
  
  /*2.7 END */

  /*----------THEME 2 END----------*/