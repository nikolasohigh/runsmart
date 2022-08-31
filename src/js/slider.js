$(document).ready(function(){
    $('.carousel_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button style="cursor:pointer" type="button" class="slider_prev"><img src="src/icons/slider/left.png"></button>',
        nextArrow: '<button style="cursor:pointer" type="button" class="slider_next"><img src="src/icons/slider/right.png"></button>',
        responsive: [{
            breakpoint: 900,
            settings: {
                dots:true,
                dotsClass: 'slider_dots',
                arrows: false
            }
        }]
    });
});