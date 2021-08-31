$.get("/assets/html/navigation.html", function(data){
    $("#navbar").replaceWith(data);
});

$.get("/assets/html/loader.html", function(data){
    $("#loading").replaceWith(data);
  });
  $(window).on('load', function(){
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( ".loader-wrapper" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( ".loader-wrapper" ).remove(); //makes page more lightweight 
    });  
  }
 
var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.project__item');
var item = document.querySelector('.project__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".project__item", function (_event, _element) {

        var projectItem = document.querySelectorAll('.project__item');
        projectItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.project__item').removeClass('active');
                // $('.project__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.project__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.project-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.project-slider-next',
        prevEl: '.project-slider-prev'
    },
    pagination: {
        el: '.project-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.project__item');

            $('.swiper-slide-active .project__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.project__item').removeClass('active');
    $('.swiper-slide-active .project__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.project__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.project__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.project__item');

    $('.swiper-slide-active .project__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});


