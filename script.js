$(document).ready(function (){ 
  $('.header-burger').click(function (event) {
      $('.header-burger,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
  $('a.header-link').click(function () {
    $('.header-burger,.header-menu').removeClass('active');
    $('body').removeClass('lock'); 
  });
});

$(document).ready(function() {
  $("a.header-link, a.header-logo").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 150 + "px"

    }, {
      duration: 1000,
      easing: "swing"
    });
  });
});


$(document).ready(function() {
 $("a.header-link").click(function(){
   $("a.header-link").removeClass('activ-list');
   $(this).addClass('activ-list')
 })
 });


  
