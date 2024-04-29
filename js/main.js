$(document).ready(function($) {
    "use strict"
    $(".sticky").sticky({
        topSpacing: 0
    });
    $().ownmenu();
    $('.flex-banner').flexslider({
        animation: "fade",
        slideshow: true,
        slideshowSpeed: 6000,
        animationSpeed: 500,
        autoPlay: true
    });
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 10,
        mobile: false,
        live: true,
        callback: function(box) {}
    });
    wow.init();
    jQuery.stellar({
        horizontalScrolling: false,
        scrollProperty: 'scroll',
        positionProperty: 'position'
    });
});

function checkmail(input) {
    var pattern1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (pattern1.test(input)) {
        return true;
    } else {
        return false;
    }
}

function proceed() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var company = document.getElementById("company");
    var web = document.getElementById("website");
    var msg = document.getElementById("message");
    var errors = "";
    if (name.value == "") {
        name.className = 'error';
        return false;
    } else if (email.value == "") {
        email.className = 'error';
        return false;
    } else if (checkmail(email.value) == false) {
        alert('Введите корректный адрес почты.');
        return false;
    } else if (company.value == "") {
        company.className = 'error';
        return false;
    } else if (web.value == "") {
        web.className = 'error';
        return false;
    } else if (msg.value == "") {
        msg.className = 'error';
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: $("#contact_form").serialize(),
            success: function(msg) {
                if (msg) {
                    $('#contact_form').fadeOut(1000);
                    $('#contact_message').fadeIn(1000);
                    document.getElementById("contact_message");
                    return true;
                }
            }
        });
    }
};
jQuery(document).ready(function($) {

    $(".callback-phone").submit(function() {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "callback.php",
            data: str,
            success: function(msg) {
            if (msg) {
                $(".callback-phone button").html("Принято!");
                }
            }
        });
        return false;
    });

    $(".request-form").submit(function() {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "request.php",
            data: str,
            success: function(msg) {
            if (msg) {
                    $(".find-sec ul").fadeOut();
                    $(".find-sec .success-msg").fadeIn();
                }
            }
        });
        return false;
    });
});

jQuery(document).ready(function($) {

    var price_min = $('#price-min').text();
    var price_max = $('#price-max').text();

    $('.cost-price-content input[name="price_min"]').val(price_min);
    $('.cost-price-content input[name="price_max"]').val(price_max);
});

$('.prot-slide').owlCarousel({
    loop: true,
    autoPlay: 6000,
    items: 3,
    margin: 30,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        960: {
            items: 2,
            nav: false
        },
        1400: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});
$('.parthner-slide').owlCarousel({
    loop: true,
    autoPlay: 6000,
    items: 5,
    margin: 30,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
});
$('.testi-slide').owlCarousel({
    loop: true,
    autoPlay: 6000,
    items: 1,
    margin: 10,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
});
$("html").niceScroll({
    cursorcolor: "#2D4059", // change cursor color in hex
    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
    cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
    cursorborder: "1px solid #fff", // css definition for cursor border
    cursorborderradius: "0px", // border radius in pixel for cursor
    zindex: "99999", // change z-index for scrollbar div
    autohidemode: true,
    smoothscroll: false,
    scrollspeed: 200
});