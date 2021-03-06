//Слайде

$(document).ready(function () {
    let slider = $('#slider').lightSlider({
        controls: false,
        item: 3,
        loop: true,
        slideMargin: 30,
        responsive : [
            {
                breakpoint: 1250,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin: 30
                }
            },
            {
                breakpoint: 630,
                settings: {
                    item:1,
                    slideMove:1,
                }
            }
        ],


        onSliderLoad: function(el) {
            let showActiveSlides = function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.src = entry.target.dataset.src;
                        observer.unobserve(entry.target);
                    }
                });
            };

            let imageWidth = el.find("li").outerWidth() + "px";

            let observer = new window.IntersectionObserver(showActiveSlides, {
                root: el.parent()[0],
                rootMargin: "0px " + imageWidth + " 0px " + imageWidth
            });

            el.find("li img").each(function() {
                observer.observe(this);
            });
        }
    });
    $('#prev').on('click', function () {
        slider.goToPrevSlide();
    });
    $('#next').on('click', function () {
        slider.goToNextSlide();
    });


    $('#slider_for').lightSlider({
        controls: false,
        item: 1,
        loop: true,
        auto: true,
        pause: 4000,
        speed: 400
    });
});


//Галерея

$('#aniimated-thumbnials').lightGallery({
    selector: '.img',
    thumbnail: true
});

//Карта
let map;
function initMap() {
    document.getElementById('map_img').remove();
    document.getElementById('map_link').remove();
    map = L.map('map').setView([46.96078162774858, 32.0201238927313], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([46.96078162774858, 32.0201238927313]).addTo(map)
}

// Гамбургер, Затемнение фона и СКРОЛ

$(".shop_filter_btn").click(function(){
    $(".hamburger").toggleClass("is-active");
    $("#mobile_menu, #menu_shadow").toggleClass("opened");
});


$(window).scroll(function(){
    if($(window).scrollTop()>150){
        $("body").addClass("scrolled");
    }else{
        $("body").removeClass("scrolled");
    }
});


//Табы

$(document).ready(function() {
    $('.test').click(function() {
        if (!$(this).hasClass("active")) {
            $('.test.active').removeClass("active");
            $(this).addClass("active");
        }
    });

    $("#section1").click(function() {
        $('html, body').animate({
            scrollTop: $("#point").offset().top
        }, 1000);
    });
    $("#section2").click(function() {
        $('html, body').animate({
            scrollTop: $("#proj").offset().top
        }, 1000);
    });
    $("#section3").click(function() {
        $('html, body').animate({
            scrollTop: $("#news").offset().top
        }, 1000);
    });
    $("#section4").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});
