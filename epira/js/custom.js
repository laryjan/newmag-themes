/**
 * http://kopatheme.com
 * Copyright (c) 2014 Kopatheme
 *
 * Licensed under the GPL license:
 *  http://www.gnu.org/licenses/gpl.html
  **/

/**
 *   1- Main menu
 *   2- Mobile menu
 *   3- Breadking News
 *   4- Owl Carousel
 *   5- FlexSlider
 *   6- Back top top
 *   7- Video wrapper
 *   8- Accordion
 *   9- Toggle Boxes
 *   10- Progress Bar
 *   11- Masonry
 *   12- Validate form
 *   13- Google Map 
 *   14- Create footer mobile menu
 
 *-----------------------------------------------------------------
 **/
 
"use strict";
var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        }
    }
};
var map;

/* =========================================================
1. Main Menu
============================================================ */

Modernizr.load([
  {
    load: 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('#main-menu').superfish({
            delay: 400,
            speed: 'fast',
            cssArrows: false
        });

        jQuery("#main-menu > li ul li").each(function() {
            if(jQuery(this).has("ul").length > 0) {
                jQuery(this).addClass('has-child')
            }
        });

        jQuery('#secondary-menu').superfish({
            delay: 400,
            speed: 'fast',
            cssArrows: false
        });

    }
  }
]);


/* =========================================================
2. Mobile Menu
============================================================ */
Modernizr.load([
  {
    load: 'js/jquery.navgoco.js',
    complete: function () {

        jQuery('#mobile-menu').navgoco({accordion: true});
        jQuery( "#main-nav i" ).click(function(){
            jQuery( "#mobile-menu" ).slideToggle( "slow" );
        });


        jQuery('#secondary-mobile-menu').navgoco({accordion: true});
        jQuery( "#secondary-nav .secondary-mobile-label" ).click(function(){
            jQuery( "#secondary-mobile-menu" ).slideToggle( "slow" );
        });
    }
  }
]);

/* =========================================================
3. Breadking News
============================================================ */

if (jQuery('.ticker-1').length > 0) {
    Modernizr.load([{
        load: 'js/jquery.carouFredSel-6.2.1.js',
        complete: function () {
            var _scroll = {
                delay: 1000,
                easing: 'linear',
                items: 1,
                duration: 0.07,
                timeoutDuration: 0,
                pauseOnHover: 'immediate'
            };
            jQuery('.ticker-1').carouFredSel({
                width: 1033,
                align: false,
                items: {
                    width: 'variable',
                    height: 34,
                    visible: 1
                },
                scroll: _scroll
            });
        }
    }]);
}


/* =========================================================
4. Owl Carousel
============================================================ */
if (jQuery('.kopa-home-slider-1').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-home-slider-1').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : false,
                pagination: true,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.kopa-home-slider-2').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-home-slider-2').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.kopa-carousel-2').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-carousel-2').owlCarousel({
                items : 4,
                itemsDesktop : [1120,4],
                itemsDesktopSmall : [979,3],
                itemsTablet : [799,3],
                itemsMobile : [639,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.kopa-carousel-1').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-carousel-1').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                itemsMobile : [767,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.kopa-carousel-3').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-carousel-3').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                itemsMobile : [767,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.kopa-carousel-4').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-carousel-4').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                itemsMobile : [767,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.kopa-carousel-5').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-carousel-5').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : false,
                pagination: true,
                navigationText : false
            });
        }
      }
    ]);
};


/* =========================================================
5. Flex slider
============================================================ */
if (jQuery('.kopa-direction-vertical-slider').length > 0) {

    Modernizr.load([
      {
        load: 'js/jquery.flexslider-min.js',
        complete: function () {
            jQuery('.kopa-direction-vertical-slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true,
                animationLoop: false,
                slideshow: false,
                direction: "vertical",
                prevText: "",
                nextText: "",
                start: function(slider){
                  jQuery('body').removeClass('loading');
                }
            });
        }
      }
    ]);
};


if (jQuery('.kopa-slider-width-thumb').length > 0) {

    Modernizr.load([
      {
        load: 'js/jquery.flexslider-min.js',
        complete: function () {
            jQuery('.kopa-flex-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 198,
                itemMargin: 0,
                asNavFor: '.kopa-slider-width-thumb'
            });

            jQuery('.kopa-slider-width-thumb').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true,
                animationLoop: false,
                slideshow: false,
                prevText: "",
                nextText: "",
                sync: ".kopa-flex-carousel",
                start: function(slider){
                  jQuery('body').removeClass('loading');
                }
            });
        }
      }
    ]);
};

/* =========================================================
6. Back to top
============================================================ */
jQuery(document).ready(function(){

    // hide #back-top first
    jQuery("#back-top").hide();

    // fade in #back-top
    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 200) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});

/* =========================================================
7. Video wrapper
============================================================ */
if (jQuery(".video-wrapper").length > 0) {
	Modernizr.load([{
		load: 'js/fitvids.js',
		complete: function () {
			jQuery(".video-wrapper").fitVids();
		}
	}]);
};


/* =========================================================
8. Accordion
========================================================= */
jQuery(document).ready(function() {
    var acc_wrapper=jQuery('.acc-wrapper');
    if (acc_wrapper.length >0) 
    {
        
        jQuery('.acc-wrapper .accordion-container').hide();
        jQuery.each(acc_wrapper, function(index, item){
            jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
            
        });
        
        jQuery('.accordion-title').on('click', function(e) {
            kopa_accordion_click(jQuery(this));
            e.preventDefault();
        });
        
        var titles = jQuery('.accordion-title');
        
        jQuery.each(titles,function(){
            kopa_accordion_click(jQuery(this));
        });
    }        
});

function kopa_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').html('-');
    if (obj.hasClass('active')) {
        obj.find('span').html('+');             
    }
}


/* =========================================================
9. Toggle Boxes
============================================================ */
jQuery(document).ready(function () {
     
  jQuery('.toggle-view li').click(function (event) {
      
      var text = jQuery(this).children('.kopa-panel');

      if (text.is(':hidden')) {
          jQuery(this).addClass('active');
          text.slideDown('300');
          jQuery(this).children('span').removeClass('fa-plus-square-o');
          jQuery(this).children('span').addClass('fa-minus-square-o');                 
      } else {
          jQuery(this).removeClass('active');
          text.slideUp('300');
          jQuery(this).children('span').removeClass('fa-minus-square-o');
          jQuery(this).children('span').addClass('fa-plus-square-o');               
      }
       
  });
 
});



/* =========================================================
10. Progress Bar
============================================================ */
if( jQuery( '.percentage-light' ).length ) {
    Modernizr.load([{
        load: ['js/excanvas.js', 'js/jquery.easy-pie-chart.js'],
        complete: function () {
            jQuery( '.percentage-light' ).each( function() {
                var p_color = jQuery( this ).data( 'color' );
                var p_width = jQuery( this ).data( 'width' );
                var p_line  = jQuery( this ).data( 'line' );
                jQuery( this ).easyPieChart( {
                    barColor: p_color,
                    lineWidth: p_line,
                    lineCap: "round",
                    size: p_width,
                    scaleColor: false,
                    animate: 1000,
                    onStep: function( value ) {
                        this.$el.find( 'span' ).text( ~~value );
                    }
                });
            });    
        }
    }]);
};



/* =========================================================
11. Masonry
============================================================ */
Modernizr.load([{
    load: ['js/masonry.pkgd.js', 'js/imagesloaded.js'],
    complete: function () {
        var $masonry1 = jQuery('.kopa-list-posts-3-widget > ul');
        imagesLoaded($masonry1, function () {
            $masonry1.masonry({
                columnWidth: 1,
                itemSelector: '.masonry-item'
            });
            $masonry1.masonry('bindResize')
        });
    }
}]);

Modernizr.load([{
    load: ['js/masonry.pkgd.js', 'js/imagesloaded.js'],
    complete: function () {
        var $masonry1 = jQuery('.kopa-masonry-list-widget > ul');
        imagesLoaded($masonry1, function () {
            $masonry1.masonry({
                columnWidth: 1,
                itemSelector: '.masonry-item'
            });
            $masonry1.masonry('bindResize')
        });
    }
}]);


if (jQuery('.kopa-gallery-masonry-widget').length > 0) {
    Modernizr.load([{
        load: ['js/imagesloaded.js', 'js/filtermasonry.js', 'js/masonry.pkgd.js'],
        complete: function() {
            var $container = jQuery('.kopa-gallery-masonry-widget .kopa-gallery-list');
            $container.multipleFilterMasonry({
                itemSelector: '.gallery-item',
                columnWidth: 1,
                filtersGroupSelector: '.filters'
            });
            jQuery('.kopa-gallery-masonry-widget .filters span').click(function() {
                jQuery('.kopa-gallery-masonry-widget .filters .active').removeClass('active');
                jQuery(this).addClass('active');
            });
        }
    }]);
};


/* =========================================================
12. Validate form
============================================================ */

if (jQuery('.comments-form,.contact-form').length > 0) {
    Modernizr.load([{
        load: ['js/jquery.form.js', 'js/jquery.validate.js'],
        complete: function () {
            jQuery('.comments-form,.contact-form').validate({
                // Add requirements to each of the fields
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                // Specify what error messages to display
                // when the user does something horrid
                messages: {
                    name: {
                        required: kopa_variable.i18n.validate.name.REQUIRED,
                        minlength: jQuery.format(kopa_variable.i18n.validate.name.MINLENGTH)
                    },
                    email: {
                        required: kopa_variable.i18n.validate.email.REQUIRED,
                        email: kopa_variable.i18n.validate.email.EMAIL
                    },
                    message: {
                        required: kopa_variable.i18n.validate.message.REQUIRED,
                        minlength: jQuery.format(kopa_variable.i18n.validate.message.MINLENGTH)
                    }
                },
                // Use Ajax to send everything to processForm.php
                submitHandler: function (form) {
                    jQuery(".comments-form .input-submit,.contact-form .input-submit").attr("value", kopa_variable.i18n.validate.form.SENDING);
                    jQuery(form).ajaxSubmit({
                        success: function (responseText, statusText, xhr, $form) {
                            jQuery("#response").html(responseText).hide().slideDown("fast");
                            jQuery(".comments-form .input-submit,.contact-form .input-submit").attr("value", kopa_variable.i18n.validate.form.SUBMIT);
                        }
                    });
                    return false;
                }
            });
        }
    }]);
}



/* =========================================================
13. Google Map
============================================================ */
var map;

if (jQuery('.kp-map').length > 0) {
      var id_map = jQuery('.kp-map').attr('id');
      var lat = parseFloat(jQuery('.kp-map').attr('data-latitude'));
      var lng = parseFloat(jQuery('.kp-map').attr('data-longitude'));
      var place = jQuery('.kp-map').attr('data-place');

  map = new GMaps({
      el: '#'+id_map,
      lat: lat,
      lng: lng,
      zoomControl : true,
      zoomControlOpt: {
          style : 'SMALL',
          position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    map.addMarker({
      lat: lat,
        lng: lng,
      title: place
    });
};

/* =========================================================
14. Create footer mobile menu
============================================================ */
function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery("<select />").appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr("id",mobile_menu_id);

    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {
        var el = jQuery(this);

        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = "selected='selected'";
        }

        var depth = el.parents("ul").size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }

        jQuery("<option "+selected+" value='"+el.attr("href")+"'>"+space+el.text()+"</option>").appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });
}

jQuery(document).ready(function(){
    if(jQuery('.kopa-menu-widget').length > 0){
        createMobileMenu('.kopa-menu-widget','footer-responsive-menu');
    }
});