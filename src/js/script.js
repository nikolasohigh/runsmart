$(document).ready(function(){
    //Slider
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

    //Tabs
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

    //Modal
    $('[data-modal="consultation"]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow')
        });

    $('[data-modal="buy"]').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
            $('#consultation, #order').fadeOut();
            $('.overlay, #order').fadeIn('slow')
            })
      });
      
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });

    //Validation
    function formValidate(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
    
            messages: {
                name: "*Пожалуйста, введите свое имя",
                phone: "*Введите корректный номер телефона",
                email: {
                    required: "*Пожалуйста, введите свой почтовый адрес",
                    email: "*Пожалуйста, введите корректный почтовый адрес"
                }
            }
        });   
    }
    
    formValidate('#confirm-form');
    formValidate('#consultation-modal');
    formValidate('#consultation-main');
    $('input[name = phone]').mask("+38(099)-999-99-99");

    //Mailer
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "src/mailer/sendToAdmin.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('#thanks').fadeIn('slow');
            $('form').trigger('reset');
            
        });
        return false;
    });

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "src/mailer/sendToUser.php",
            data: $(this).serialize()
        })
        return false;
    });
    //Smooth scroll
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#'").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

    
