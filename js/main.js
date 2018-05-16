$(document).ready(function(){
  // to ease when click '#' url
   $(document).on('click', 'a.down', function(event){
       // event.preventDefault();
       $('html, body').animate({
           scrollTop: $( $.attr(this, 'href') ).offset().top
       }, 1000);
   });
});
