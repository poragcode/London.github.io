(function ($) {
    $(document).ready(function () {


        //Slider
        $(".slider-area").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        //Team
       
        $(".team-list").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
     //Client
       
        $(".all-clients").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    

    });
})(jQuery);
