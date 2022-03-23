window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	if (window.innerWidth > 100) {
		document.querySelectorAll('section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header-list').clientHeight <= scrollDistance) {
				document.querySelectorAll('.header-link').forEach((el) => {
					if (el.classList.contains('activ-list')) {
						el.classList.remove('activ-list');
					}
				});
				document.querySelectorAll('.header-item')[i].querySelector('.header-link').classList.add('activ-list');
			}
		});
	}
  var sh = null;
  let header = document.querySelector('.header-link');
function scrollTracking(){
	var x = $(window).scrollTop();
	var y = $(window).height();
	var z = $('.hero-text').offset().top;
	var w = $('.hero-text').outerHeight();
	if (x + y >= z && x + y - w * 2 <= z + (y - w)){
		if (sh == null || sh == false) {
      header.classList.remove('activ-list');
    }
		}
		sh = false;
	} 
$(window).scroll(function(){
	scrollTracking();
});	
$(document).ready(function(){ 
	scrollTracking();
});
});

$(document).ready(function (){ 
  $('.header-burger').click(function (event) {
      $('.header-burger,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
  $('a.header-link').click(function () {
    $('.header-burger,.header-menu').removeClass('active');
    $('body').removeClass('lock'); 
  });
  $("a.header-link, a.header-logo, .outline-link").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 150 + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
  });
  $("a.header-link").click(function(){
   $("a.header-link").removeClass('activ-list');
   $(this).addClass('activ-list')
 })
 $('a.header-logo').click(function () {
  $("a.header-link").removeClass('activ-list');
 });
});




  
