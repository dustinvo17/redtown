window.onload = init

function init() {
    let up = false

     // slide up down event
    $("#navbar").load("nav-bar.html", function() {
        $('.navbar-button-hamburger-img').on('click', function () {

            const navDown = $('.navbar-down')
            const bookBtn = $('.navbar-button > .navbar-button-book')
            if (up) {

                navDown.slideUp()
                bookBtn.fadeIn()
                up = false
            } else {

                navDown.slideDown()
                    navDown.css('display','flex')
                bookBtn.fadeOut()
                up = true
            }

        })
    });


   

    //    nav bar scroll event
    $(window).scroll(function () {
        function changeBg(color) {
            $('.navbar').css({
                background: color,
                transition: 'background 0.2s ease'
            })
        }
        if ($(document).scrollTop() > 50) {
            changeBg('#161A28')
        } else {
            changeBg('transparent')
        }

    })
}