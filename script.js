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
});


/*----*/
$(document).ready(function (){ 
  $('.header-burger').click(function (event) {
      $('.header-burger,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
  $('a.header-link').click(function () {
    $('.header-burger,.header-menu').removeClass('active');
    $('body').removeClass('lock'); 
  });
  $("a.header-link, a.header-logo").click(function() {
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





  
