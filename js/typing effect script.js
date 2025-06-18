$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });


    // Slideup script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // Toggle Menu/ Navbar Script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["SIH '22 Team Lead", "Member at Google Developers Group LKO", "Web Developer","Contributor @e-boothathon04", "Open-Source Contributor","Campus Ambassador at IIT Bombay","CSE Student"],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["SIH '22 Team Lead", "Member at Google Developers Group LKO", "Web Developer","Contributor @e-boothathon04", "Open-Source Contributor","Campus Ambassador at IIT Bombay","CSE Student"],
        typeSpeed: 20,
        backSpeed: 10,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});