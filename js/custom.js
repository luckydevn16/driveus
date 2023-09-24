"use strict";

// detect mobile
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// animate anchors
var animateAnchors = function() {
    
    var scroll_offset = 100;

	if(isMobile.any())scroll_offset = 60;
	else scroll_offset = 100;

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {

        e.preventDefault();
        $(document).off("scroll");
        
        var target = this.hash,
            menu = target;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top + scroll_offset
        }, 500, function () {
            window.location.hash = target;
        });
    });

    // fix hash scroll on load
    var hash = location.hash.replace('#','');
    if(hash !== ''){
       // location.hash = '';
        $('html, body').animate({ scrollTop: $('#'+hash).offset().top  + scroll_offset}, 500);
    }

};

// homepage
var homepage = function() {

  // scroll to top on load
  $(window).scrollTop(0);

  // hero load img bg
  function heroImgLoad() {
    var hero = $('.hero'),
        herobg = hero.attr('data-bg'),
        heroPreload = new Image();

    $(heroPreload).attr({
        src: herobg
    });

    if (heroPreload.complete || heroPreload.readyState === 4) {
      $('body').addClass('hero-ready');
    } else {

        $(heroPreload).load(function (response, status, xhr) {
            if (status == 'error') {

            } else {
                $('body').addClass('hero-ready');
            }
        });
    }

  }

  window.onload = heroImgLoad;

};

// if homepage
if($('.hero').length) {
  homepage();
}


function accrodion () {
	if ($('.accrodion-grp').length) {
		
		$('.accrodion-grp').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function() {
				var SelfAccrodion = $(this);
				SelfAccrodion.find('.accrodion-title').on('click', function () {
					var SelfAccrodionTitle = $(this);
					if (SelfAccrodionTitle.parent().hasClass('active') === false ) {					
						$('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						SelfAccrodionTitle.parent().addClass('active');					
						SelfAccrodionTitle.parent().find('.accrodion-content').slideDown();	
					};
				});
			});
		});
		
	};
}


// gallery fancybox activator 
function GalleryFancyboxActivator () {
  var galleryFcb = $('.fancybox');
  if(galleryFcb.length){
    galleryFcb.fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
      helpers : {
        media : {}
      }
    });
  }
}

function galleryCarousel () {
	if ($('.gallery-wrapper .owl-carousel').length) {
		var navCondition = $('.gallery-wrapper .owl-carousel').data('carousel-nav');
		$('.gallery-wrapper .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 7,
		    nav: navCondition,
		    dots: false,
		    autoplay:true,
		    navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:2
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }			
		});
	};
}

function singleCarCarousel () {
	if ($('.single-car-carousel-content-box').length && $('.single-car-carousel-thumbnail-box').length) {

		var $sync1 = $(".single-car-carousel-content-box"),
			$sync2 = $(".single-car-carousel-thumbnail-box"),
			flag = false,
			duration = 1000;

			$sync1
				.owlCarousel({
					items: 1,
					margin: 0,
					nav: true,
					dots: true,
					navText: [
		                '<i class="fa fa-angle-left"></i>',
		                '<i class="fa fa-angle-right"></i>'
		            ]
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					margin: 10,
					items: 6,
					nav: false,
					dots: false,
					center: false,
					responsive: {
				        0:{
				            items:2,
				            autoWidth: false
				        },
				        480:{
				            items:3,
				            center: false,
				            autoWidth: false
				        },
				        600:{
				            items:3,
				            autoWidth: false
				        },
				        1000:{
				            items:3,
				            autoWidth: false
				        }
				    },
				})
				.on('click', '.owl-item', function () {
					$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;		
						$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

	};
}


function stickyHeader () {
  if ($('.stricky').length) {
    var strickyScrollPos = $('.stricky').next().offset().top;
    if($(window).scrollTop() > strickyScrollPos) {
      $('.stricky').addClass('stricky-fixed');
    }
    else if($(this).scrollTop() <= strickyScrollPos) {
      $('.stricky').removeClass('stricky-fixed');
    }
  };
}


function updateCRYear()
{
	$("#crYear").text((new Date()).getFullYear());
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		accrodion();
		updateCRYear();
		GalleryFancyboxActivator();
		galleryCarousel();
		singleCarCarousel();
	})(jQuery);

	// hide address bar and 100vh issue
    if(isMobile.any() && $(window).width() < 600 ) {
      var hero = $('.hero'),
      oldWidth = window.innerHeight;
      hero.css({height: oldWidth});
    }

    // animation for anchor links
  	animateAnchors();

  	new WOW().init();

});

// window on load functino
jQuery(window).on('load', function () {
	(function ($) {
		// add your functions

	})(jQuery);
});

// window on scroll functino
jQuery(window).on('scroll', function () {
	(function ($) {
		// add your functions
		stickyHeader();
	})(jQuery);
});