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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


      function toggleTab (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
      };

    toggleTab ('.catalog-item__link');
    toggleTab ('.catalog-item__back');

});