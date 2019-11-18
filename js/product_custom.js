/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Custom Dropdown
4. Init Page Menu
5. Init Recently Viewed Slider
6. Init Brands Slider
7. Init Quantity
8. Init Color
9. Init Favorites
10. Init Image


******************************/

$(document).ready(function() {
    "use strict";

    /* 

    1. Vars and Inits

    */

    var menuActive = false;
    var header = $('.header');

    setHeader();

    // initCustomDropdown();
    initPageMenu();
    initViewedSlider();
    initBrandsSlider();
    initQuantity();
    initColor();
    initFavs();
    initImage();

    $(window).on('resize', function() {
        setHeader();
    });

    /* 

    2. Set Header

    */

    function setHeader() {
        //To pin main nav to the top of the page when it's reached
        //uncomment the following

        // var controller = new ScrollMagic.Controller(
        // {
        // 	globalSceneOptions:
        // 	{
        // 		triggerHook: 'onLeave'
        // 	}
        // });

        // var pin = new ScrollMagic.Scene(
        // {
        // 	triggerElement: '.main_nav'
        // })
        // .setPin('.main_nav').addTo(controller);

        if (window.innerWidth > 991 && menuActive) {
            closeMenu();
        }
    }

    /* 

    3. Init Custom Dropdown

    */

    function initCustomDropdown() {
        if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
            var placeholder = $('.custom_dropdown_placeholder');
            var list = $('.custom_list');
        }

        placeholder.on('click', function(ev) {
            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }

            $(document).one('click', function closeForm(e) {
                if ($(e.target).hasClass('clc')) {
                    $(document).one('click', closeForm);
                } else {
                    list.removeClass('active');
                }
            });

        });

        $('.custom_list a').on('click', function(ev) {
            ev.preventDefault();
            var index = $(this).parent().index();

            placeholder.text($(this).text()).css('opacity', '1');

            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }
        });


        $('select').on('change', function(e) {
            placeholder.text(this.value);

            $(this).animate({ width: placeholder.width() + 'px' });
        });
    }

    /* 

    4. Init Page Menu

    */

    function initPageMenu() {
        if ($('.page_menu').length && $('.page_menu_content').length) {
            var menu = $('.page_menu');
            var menuContent = $('.page_menu_content');
            var menuTrigger = $('.menu_trigger');

            //Open / close page menu
            menuTrigger.on('click', function() {
                if (!menuActive) {
                    openMenu();
                } else {
                    closeMenu();
                }
            });

            //Handle page menu
            if ($('.page_menu_item').length) {
                var items = $('.page_menu_item');
                items.each(function() {
                    var item = $(this);
                    if (item.hasClass("has-children")) {
                        item.on('click', function(evt) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            var subItem = item.find('> ul');
                            if (subItem.hasClass('active')) {
                                subItem.toggleClass('active');
                                TweenMax.to(subItem, 0.3, { height: 0 });
                            } else {
                                subItem.toggleClass('active');
                                TweenMax.set(subItem, { height: "auto" });
                                TweenMax.from(subItem, 0.3, { height: 0 });
                            }
                        });
                    }
                });
            }
        }
    }

    function openMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.set(menuContent, { height: "auto" });
        TweenMax.from(menuContent, 0.3, { height: 0 });
        menuActive = true;
    }

    function closeMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.to(menuContent, 0.3, { height: 0 });
        menuActive = false;
    }

    /* 

    5. Init Recently Viewed Slider

    */

    function initViewedSlider() {
        if ($('.viewed_slider').length) {
            var viewedSlider = $('.viewed_slider');

            viewedSlider.owlCarousel({
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 6000,
                nav: false,
                dots: false,
                responsive: {
                    0: { items: 1 },
                    575: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1199: { items: 6 }
                }
            });

            if ($('.viewed_prev').length) {
                var prev = $('.viewed_prev');
                prev.on('click', function() {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.viewed_next').length) {
                var next = $('.viewed_next');
                next.on('click', function() {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }
    }

    /* 

    6. Init Brands Slider

    */

    function initBrandsSlider() {
        if ($('.brands_slider').length) {
            var brandsSlider = $('.brands_slider');

            brandsSlider.owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: false,
                dots: false,
                autoWidth: true,
                items: 8,
                margin: 42
            });

            if ($('.brands_prev').length) {
                var prev = $('.brands_prev');
                prev.on('click', function() {
                    brandsSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.brands_next').length) {
                var next = $('.brands_next');
                next.on('click', function() {
                    brandsSlider.trigger('next.owl.carousel');
                });
            }
        }
    }

    /* 

    7. Init Quantity

    */

    function initQuantity() {
        // Handle product quantity input
        if ($('.product_quantity').length) {
            var input = $('#quantity_input');
            var incButton = $('#quantity_inc_button');
            var decButton = $('#quantity_dec_button');

            var originalVal;
            var endVal;

            incButton.on('click', function() {
                originalVal = input.val();
                endVal = parseFloat(originalVal) + 1;
                input.val(endVal);
            });

            decButton.on('click', function() {
                originalVal = input.val();
                if (originalVal > 0) {
                    endVal = parseFloat(originalVal) - 1;
                    input.val(endVal);
                }
            });
        }
    }

    /* 

    8. Init Color

    */

    function initColor() {
        if ($('.product_color').length) {
            var selectedCol = $('#selected_color');
            var colorItems = $('.color_list li .color_mark');
            colorItems.each(function() {
                var colorItem = $(this);
                colorItem.on('click', function() {
                    var color = colorItem.css('backgroundColor');
                    selectedCol.css('backgroundColor', color);
                });
            });
        }
    }

    /* 

    9. Init Favorites

    */

    function initFavs() {
        // Handle Favorites
        var fav = $('.product_fav');
        fav.on('click', function() {
            fav.toggleClass('active');
        });
    }

    /* 

    10. Init Image

    */

    function initImage() {
        var images = $('.image_list li');
        var selected = $('.image_selected img');

        images.each(function() {
            var image = $(this);
            image.on('click', function() {
                var imagePath = new String(image.data('image'));
                selected.attr('src', imagePath);
            });
        });
    }

    function getQueryString(url, querystring) {
        var vars = [],
            hash;
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return decodeURIComponent(vars[querystring]).toLowerCase();
    }
    (function() {
        debugger;
        var url = window.location.pathname;
        var qs = getQueryString(window.location.href, "name");
        var temp = ProductDetailTemplate;
        var blogTemp = RelatedBlog;
        var blogresult = "";
        var result = "";
        var dealcat = $.grep(jsonObject, function(v) {
            debugger;
            var plink = getQueryString(v.page_link, "name");
            return plink === qs;
        });
        $.each(dealcat, function(index, value) {
            result = temp.replace(/{page_link}/g, value["page_link"])
                .replace(/{title}/g, value["title"])
                .replace(/{main_img_src}/g, value["main_img_src"])
                .replace(/{cat}/g, value["main_cat"])
                .replace(/{price}/g, value["price"])
                .replace(/{buy_link}/g, value["buy_link"])
                .replace(/{short_desc}/g, value["short_desc"])
                .replace(/{long_desc}/g, value["long_desc"]);

            $.each(value["related"], function(index, arrvalue) {

                var relatedblogs = $.grep(jsonObject, function(v) {
                    return v.title === arrvalue;
                });
                $.each(relatedblogs, function(index, objvalue) {
                    blogresult += blogTemp.replace(/{page_link}/g, objvalue["page_link"])
                        .replace(/{title}/g, objvalue["title"])
                        .replace(/{main_img_src}/g, objvalue["main_img_src"]);
                });
            });
        });
        result = result.replace(/{related_blog}/g, blogresult);

        //Remove loading image
        $(".mainContainer .loader").remove();
        if (result !== "") {
            $(".mainContainer").append(result);
        }




    })();

});