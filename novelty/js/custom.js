"use strict";


var kopa_variable = {
    "lightbox":{
        "prettyPhoto":{
            "theme":"pp_default",
            "modal":"true",
            "social_tools":"true",
            "opacity":0.7
        }
    },
    "contact":{
        "address":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n":{
        "VIEW":"View",
        "VIEWS":"Views",
        "validate":{
                "form":{
                    "SUBMIT":"Submit",
                    "SENDING":"Sending..."
                },
                "name":{
                    "REQUIRED":"Please enter your name",
                    "MINLENGTH":"At least {0} characters required"
                },
                "email":{
                    "REQUIRED":"Please enter your email",
                    "EMAIL":"Please enter a valid email"
                },
                "url":{
                    "REQUIRED":"Please enter your url",
                    "URL":"Please enter a valid url"
                },
                "message":{
                    "REQUIRED":"Please enter a message",
                    "MINLENGTH":"At least {0} characters required"
                }
            }
        }
    };
var map;


jQuery(document).ready(function () {


    Modernizr.load([
      {
        load: 'js/superfish.js',
        complete: function () {

                // menu second
                jQuery('.menu-second.sf-menu').superfish({cssArrows: false});
                // menu primary
                jQuery('.menu-primary.sf-menu').superfish({});

        }
      }
    ]);
    // mobile menu
    Modernizr.load([
      {
        load: 'js/jquery.navgoco.js',
        complete: function () {

            // menu second
            jQuery('.menu-second.nav').navgoco({accordion: true});
            jQuery( "#page-header .header-top .container > span" ).click(function(){
                jQuery( ".menu-second.nav" ).slideToggle( "slow" );
            });
            // menu primary

            jQuery('.menu-primary-mobile.nav').navgoco({accordion: true});
            jQuery( ".primary-menu-mobile-button" ).click(function(){
                jQuery( ".menu-primary-mobile.nav" ).slideToggle( "slow" );
            });

        }
      }
    ]);

    //  google map

    
    if (jQuery(".kp-map").length > 0) {

        Modernizr.load([
          {
            load: ['js/gmaps.js'],
            complete: function () {
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
                var marker_info = {
                    lat: lat,
                    lng: lng
                };

            }
          }
        ]);
    };

    // validate form

    if (jQuery(".comment-form").length > 0) {

        Modernizr.load([
          {
            load: ['js/jquery.form.js','js/jquery.validate.js'],
            complete: function () {
                jQuery('.comment-form').validate({
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
                        required: "Please enter your name.",
                        minlength: jQuery.format("At least {0} characters required.")
                    },
                    email: {
                        required: "Please enter your email.",
                        email: "Please enter a valid email."
                    },
                    url: {
                        required: "Please enter your url.",
                        url: "Please enter a valid url."
                    },
                    message: {
                        required: "Please enter a message.",
                        minlength: jQuery.format("At least {0} characters required.")
                    }
                },

                // Use Ajax to send everything to processForm.php
                submitHandler: function (form) {
                    jQuery("#input-submit").attr("value", "Sending...");
                    jQuery(form).ajaxSubmit({
                        success: function (responseText, statusText, xhr, jQueryform) {
                            jQuery("#response").html(responseText).hide().slideDown("fast");
                            jQuery("#input-submit").attr("value", "post comment");
                        }
                    });
                    return false;
                }
            });
            }
          }
        ]);
    }
    if (jQuery(".contact-form").length > 0) {

        Modernizr.load([
          {
            load: ['js/jquery.form.js','js/jquery.validate.js'],
            complete: function () {
                jQuery('.contact-form').validate({
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
                        minlength: kopa_variable.i18n.validate.name.MINLENGTH
                    },
                    email: {
                        required: kopa_variable.i18n.validate.email.REQUIRED,
                        email: kopa_variable.i18n.validate.email.EMAIL
                    },
                    url: {
                        required: kopa_variable.i18n.validate.url.REQUIRED,
                        url: kopa_variable.i18n.validate.url.URL
                    },
                    message: {
                        required: kopa_variable.i18n.validate.message.REQUIRED,
                        minlength:kopa_variable.i18n.validate.message.MINLENGTH
                    }
                },

                // Use Ajax to send everything to processForm.php
                submitHandler: function (form) {
                    jQuery("#input-submit").attr("value", "Sending...");
                    jQuery(form).ajaxSubmit({
                        success: function (responseText, statusText, xhr, jQueryform) {
                            jQuery("#response").html(responseText).hide().slideDown("fast");
                            jQuery("#input-submit").attr("value", "post comment");
                        }
                    });
                    return false;
                }
            });
            jQuery('#input-submit').click(function(){
                jQuery('.contact-form input[type="text"]').each(function(){
                    if ('' == jQuery(this).val()) {
                        jQuery(this).attr('placeholder','');
                    };
                });
                if ('' == jQuery('.contact-form textarea').val()) {
                    jQuery('.contact-form textarea').attr('placeholder','');
                };
            });
            }
          }
        ]);
    }


    // video wrapper

    if (jQuery(".video-wrapper").length > 0) {

        Modernizr.load([
          {
            load: 'js/jquery.fitvids.js',
            complete: function () {
              jQuery(".video-wrapper").fitVids();
            }
          }
        ]);
    };

    //  accordion


    if (jQuery('.kp-accordion').length > 0) {
        Modernizr.load([
          {
            load: 'http://code.jquery.com/ui/1.10.3/jquery-ui.js',
            complete: function () {
                jQuery(".kp-accordion" ).accordion({
                    collapsible: true,
                    heightStyle: "content",
                    icons: false,
                    resize: function() {
                        jQuery( "kp-accordion" ).accordion( "refresh" );
                      }
                });
            }
          }
        ]);
    };
    // tooltip
    if (jQuery('.share-link').length > 0) {
        Modernizr.load([
          {
            load: 'http://code.jquery.com/ui/1.10.3/jquery-ui.js',
            complete: function () {
                jQuery('.share-link').tooltip({
                    tooltipClass: "kp-tooltip"
                });
            }
          }
        ]);
    };
    // tabs
    if (jQuery('.tab-horizontal').length > 0 || jQuery('.tab-vertical').length > 0) {
        Modernizr.load([
          {
            load: 'http://code.jquery.com/ui/1.10.3/jquery-ui.js',
            complete: function () {
                jQuery( ".tab-horizontal" ).tabs();

                jQuery( ".tab-vertical" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
                jQuery( ".tab-vertical" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
            }
          }
        ]);
    };

    // breaking news
    if (jQuery('.breaking-news').length > 0) {

        Modernizr.load([
          {
            load: 'js/jquery.caroufredsel.js',
            complete: function () {
                var _scroll = {
                    delay: 1000,
                    easing: 'linear',
                    items: 1,
                    duration: 0.07,
                    timeoutDuration: 0,
                    pauseOnHover: 'immediate'
                };
                jQuery('.caroufredsel_wrapper .ticker').carouFredSel({
                    width: 1000,
                    align: false,
                    items: {
                        width: 'variable',
                        height: 40,
                        visible: 1
                    },
                    scroll: _scroll
                });

                //  set carousels to be 100% wide
                jQuery('.caroufredsel_wrapper .caroufredsel_wrapper').css('width', '100%');
            }
          }
        ]);
    };
    if (jQuery(".widget-big-carousel").length > 0) {
        Modernizr.load([
            {
                load: ['js/owl.carousel.js'],
                complete: function() {
                    var first_el = jQuery(".widget-big-carousel .owl-carousel .item").first().clone();
                    var last_el = jQuery(".widget-big-carousel .owl-carousel .item").last().clone();
                    jQuery(".widget-big-carousel .owl-carousel").prepend(last_el).append(first_el);
                    jQuery(".widget-big-carousel .owl-carousel").owlCarousel({
                        pagination: false,
                        items: 3,
                        itemsDesktop: [1180, 3],
                        itemsDesktopSmall: [979, 3],
                        itemsTablet: [799, 3],
                        itemsTabletSmall: [767, 1],
                        addClassActive: true,
                        navigation: true,
                        slideSpeed: 700,
                        navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                        afterInit: function() {
                            jQuery(".widget-big-carousel .owl-carousel .owl-item.active:eq(1)").addClass('second');
                        },
                        afterAction: function() {
                            jQuery(".widget-big-carousel .owl-carousel .owl-item").removeClass('second');
                            jQuery(".widget-big-carousel .owl-carousel .owl-item.active:eq(1)").addClass('second');
                        }
                    });
                }
            }
        ]);
    }

    // widget feature slider

    if (jQuery(".widget-feature-slider").length > 0) {

        Modernizr.load([
          {
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery(".widget-feature-slider .owl-carousel").owlCarousel({
                    singleItem: true,
                    pagination: false,
                    navigation: true,
                    slideSpeed: 700,
                    navigationText: ['<span ><i class="fa fa-angle-left"></i></span>', '<span ><i class="fa fa-angle-right"></i></span>']
                });
            }
          }
        ]);
    }

    //  widget feature news slider

    if (jQuery(".widget-feature-news-slider").length > 0) {

        Modernizr.load([
          {
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery(".widget-feature-news-slider .owl-carousel").owlCarousel({
                    singleItem: true,
                    pagination: false,
                    navigation: true,
                    slideSpeed: 700,
                    navigationText: ['<span ><i class="fa fa-angle-left"></i></span>', '<span ><i class="fa fa-angle-right"></i></span>']
                });
            }
          }
        ]);
    }

    // feature post

    if (jQuery('.feature-post').length > 0) {
        Modernizr.load([
          {
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery('.feature-post .owl-carousel').owlCarousel({
                    pagination: false,
                    items: 4,
                    itemsTablet : [799,3],
                    navigation: true,
                    slideSpeed: 700,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                });

                var check_width = jQuery('body').width();
                if (check_width >= 1024) {
                    // hover caption
                    jQuery('.feature-post-owl .item').hover(function () {
                        jQuery(this).find('.kp-caption').stop(true).animate({
                            top: '0'
                        }, 400);
                        jQuery(this).find('.mask').fadeOut('500');
                        jQuery(this).find('.mask-2').animate({
                            opacity: '1'
                        }, 400);
                    }, function () {
                        jQuery(this).find('.kp-caption').stop(true).animate({
                            top: '135px'
                        }, 400);
                        jQuery(this).find('.mask').fadeIn('500');
                        jQuery(this).find('.mask-2').animate({
                            opacity: '0'
                        }, 400);
                    });
                };
            }
          }
        ]);

    };

    // last post review

    if (jQuery('.last-post-review').length > 0) {
        Modernizr.load([
          {
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery(".last-post-review .owl-carousel").owlCarousel({
                    pagination: false,
                    items: 3,
                    itemsDesktopSmall : [1080,3],
                    itemsTablet:[799,3],
                    navigation: true,
                    slideSpeed: 700,
                    navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                });
                 var check_width = jQuery('body').width();
                if (check_width >= 1024) {
                    // hover caption
                    jQuery('.last-post-review .item').hover(function () {
                        jQuery(this).find('.kp-caption').stop(true).animate({
                            top: '0'
                        }, 400);
                        jQuery(this).find('.mask').fadeOut('500');
                        jQuery(this).find('.mask-2').animate({
                            opacity: '1'
                        }, 400);
                    }, function () {
                        jQuery(this).find('.kp-caption').stop(true).animate({
                            top: '115px'
                        }, 400);
                        jQuery(this).find('.mask').fadeIn('500');
                        jQuery(this).find('.mask-2').animate({
                            opacity: '0'
                        }, 400);
                    });
                };
            }
          }
        ]);
    };


    //  related article

    if (jQuery('.sub-page.site-1').length > 0) {
        if (jQuery(".related-article").length > 0) {

             Modernizr.load([
              {
                load: 'js/owl.carousel.js',
                complete: function () {
                    jQuery(".related-article .owl-carousel").owlCarousel({
                        pagination: false,
                        items: 3,
                        itemsDesktopSmall:[1080,3],
                        itemsTablet:[799,3],
                        itemsMobile:[599,2],
                        navigation: true,
                        slideSpeed: 700,
                        navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                    });
                }
              }
            ]);
        };


    } else {
        if (jQuery(".related-article").length > 0) {
             Modernizr.load([
              {
                load: 'js/owl.carousel.js',
                complete: function () {
                    jQuery(".related-article .owl-carousel").owlCarousel({
                        pagination: false,
                        items: 2,
                        itemsDesktopSmall:[1080,2],
                        navigation: true,
                        slideSpeed: 700,
                        navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                    });
                }
              }
            ]);
        };
    }

    // widget feature images

    if (jQuery(".widget-feature-images").length > 0) {

         Modernizr.load([
          {
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery(".widget-feature-images .owl-carousel").owlCarousel({
                    pagination: true,
                    singleItem: true,
                    slideSpeed: 700
                });
            }
          }
        ]);
    };
    

    //  widget blog post

    if (jQuery('.widget-blog-post').length > 0) {

         Modernizr.load([
          {
            load: 'js/owl.carousel.js',
            complete: function () {
                jQuery(".widget-blog-post .owl-carousel").owlCarousel({
                    pagination: true,
                    items: 2,
                    itemsDesktop:[1080,2],
                    itemsDesktopSmall:[979,2],
                    itemsMobile:[599,1],
                    slideSpeed: 700
                });
            }
          }
        ]);
    };




    // flickr

    if (jQuery('#flickr-feed-1').length > 0) {

        Modernizr.load([
          {
            load: ['js/jflickrfeed.js','js/imgliquid.js'],
            complete: function () {
              jQuery('#flickr-feed-1 ul').jflickrfeed({
                    limit: 6,
                    qstrings: {
                        id: '78715597@N07'
                    },
                    itemTemplate: '<li class="flickr-badge-image">' + '<a target="blank" href="{{link}}" title="{{title}}" class="imgLiquid" style="width:89px; height:89px;">' + '<img src="{{image_m}}" alt="{{title}}"  />' + '</a>' + '</li>'
                }, function(data) {
                            jQuery('#flickr-feed-1 .imgLiquid').imgLiquid();
                    });

              
            }
          }
        ]);
    }

    // tweets

    if (jQuery('#tweets').length > 0) {

        Modernizr.load([
          {
            load: ['js/jquery.timeago.js','js/jquery.tweetable.js'],
            complete: function () {
                jQuery('#tweets').tweetable({
                    username: 'kopasoft ',
                    time: true,
                    rotate: false,
                    speed: 4000,
                    limit: 2,
                    replies: false,
                    position: 'append',
                    failed: "Sorry, twitter is currently unavailable for this user.",
                    loading: "Loading tweets...",
                    html5: true,
                    onComplete: function ($ul) {
                        jQuery('time').timeago();
                    }
                });
            }
          }
        ]);

    }


    //  widget latest article

    if (jQuery('.widget-latest-article').length > 0) {


        Modernizr.load([
          {
            load: 'js/jquery.isotope.js',
            complete: function () {
                var $container = jQuery('.widget-latest-article').find('.kp-isotope');
                $container.isotope({
                    itemSelector: '.item',
                    layoutMode: 'masonry'
                });

                // filter
                jQuery('.widget-latest-article .filter-isotope li a').click(function (event) {
                    event.preventDefault();
                    var selector = $('.widget-latest-article .kp-isotope .item');
                    var $removable = $container.find( selector );
                    $container.isotope( 'remove', $removable );

                    var url_link = 'ajax/widget-latest-article.html';
                    jQuery.ajax({
                        type: 'POST',
                        url: url_link,
                        dataType: 'html',
                        data: {
                        },
                        beforeSend: function() {

                        },
                        success: function(data) {
                            var $newItems = $(data);
                            $container.append($newItems).isotope('appended', $newItems);
                        },
                        complete: function(data) {
                            $container.isotope( 'reLayout');
                        },
                        error: function(errorThrown) {

                        }
                    });
                    jQuery('.widget-latest-article .filter-isotope li').removeClass('active');
                    jQuery(this).parent().addClass('active');
                });

                //  layout
                $('.layout-mode a').click(function (event) {
                    event.preventDefault();
                    var selector = $(this).attr('data-layout');
                    var val = "straightDown";
                    if (selector == val) {
                        $container.addClass('variable-sizes');
                    } else {
                        $container.removeClass('variable-sizes');
                    }


                    $container.isotope('reLayout', function ($items) {

                        $container.isotope({
                            layoutMode: selector
                        });
                    });
                });
                // addItem isotope
                $('.load-more span').click(function () {
                    var url_link = 'ajax/widget-latest-article.html';
                    loadIsotope(url_link,$container);
                });
            }
          }
        ]);

    };


    if (jQuery('.kp-cat-2 .list-post-cat-item').length > 0) {

        Modernizr.load([
          {
            load: 'js/jquery.isotope.js',
            complete: function () {
                jQuery('.kp-cat-2 .list-post-cat-item').isotope({
                    itemSelector: '.list-post-cat-item > li',
                    layoutMode: 'fitRows'
                });
            }
          }
        ]);
    };
    
    // css
    if (jQuery('.widget-most-review').length > 0) {
        jQuery('.widget-most-review li').each(function (index) {
            jQuery(this).addClass('index' + index);
        });
    };
    // search box
    if (jQuery('.index-4 .search-box').length > 0) {
        jQuery('.search-box').hover(function () {
                jQuery('.search-box').find('input[type="text"]').stop(true).animate({
                    width: '200px',
                    padding: '6px 12px'
                }, 600);
        },function(){
                jQuery('.search-box').find('input[type="text"]').stop(true).animate({
                    width: 0,
                    padding: 0
                }, 600);
        });
    };

    // scroll bar widget random

    if (jQuery('.widget-random').length > 0) {


        Modernizr.load([
          {
            load: 'js/perfect-scrollbar.js',
            complete: function () {
                var $this = jQuery('.widget-random .container li')
                var num_item = $this.length;
                var total_width = num_item * ($this.width() + 20);
                jQuery('.widget-random .container ul').css('width', total_width + 'px');

                var check_width = jQuery('body').width();
                if (check_width >= 1024) {
                    // hover caption
                    jQuery('.widget-random .item').hover(function () {
                        jQuery(this).find('.kp-caption').stop(true).animate({
                            top: '0'
                        }, 400);
                        jQuery(this).find('.mask').fadeOut('500');
                        jQuery(this).find('.mask-2').animate({
                            opacity: '1'
                        }, 400);
                    }, function () {
                        jQuery(this).find('.kp-caption').stop(true).animate({
                            top: '102px'
                        }, 400);
                        jQuery(this).find('.mask').fadeIn('500');
                        jQuery(this).find('.mask-2').animate({
                            opacity: '0'
                        }, 400);
                    });
                };

                
                jQuery('.widget-random .container').perfectScrollbar({
                    wheelSpeed: 20,
                    wheelPropagation: false,
                    suppressScrollY: true
                });
            }
          }
        ]);
    };




    // Synced Owls
    var sync1 = $(".sync1");
    var sync2 = $(".sync2");

    if (jQuery('.widget-gallery').length > 0) {

        Modernizr.load([
          {
            load: 'js/owl.carousel.js',
            complete: function () {
                sync1.owlCarousel({
                    singleItem: true,
                    slideSpeed: 700,
                    navigation: true,
                    navigationText: ['<span ><i class="fa fa-angle-left"></i></span>', '<span><i class="fa fa-angle-right"></i></span>'],
                    pagination: false,
                    afterAction: syncPosition,
                    responsiveRefreshRate: 200,
                });
                sync2.owlCarousel({
                    items: 4,
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [979, 4],
                    itemsTablet: [768, 4],
                    itemsMobile: [599, 2],
                    pagination: false,
                    slideSpeed: 700,
                    responsiveRefreshRate: 100,
                    afterInit: function (el) {
                        el.find(".owl-item").eq(0).addClass("synced");
                    }
                });
            }
          }
        ]);
    };
    function syncPosition(el) {
        var current = this.currentItem;
        sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced")
        if (sync2.data("owlCarousel") !== undefined) {
            center(current)
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }



});


// filter isotope
function filterIsotope($container){
    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector
    });
    return false;
}

// Load isotope
function loadIsotope(url_link,$container){
    jQuery.ajax({
        type: 'POST',
        url: url_link,
        dataType: 'html',
        data: {
        },
        beforeSend: function() {
            jQuery('.load-more .fa').addClass('fa-spin');
        },
        success: function(data) {
            var $newItems = $(data);
            $container.append($newItems).isotope('appended', $newItems);
        },
        complete: function(data) {
            $container.isotope( 'reLayout');
            jQuery('.load-more .fa').removeClass('fa-spin');
        },
        error: function(errorThrown) {

        }
    });
}