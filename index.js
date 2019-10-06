window.onload = init

function init() {
    let up = false
    setClock()

    // load reusable components 
    $('#footer').load('footer.html')
    $("#navbar").load("nav-bar.html", function () {
        $('.navbar-button-hamburger-img').on('click', function () {

            const navDown = $('.navbar-down')
            const bookBtn = $('.navbar-button > .navbar-button-book')
            if (up) {

                navDown.slideUp()
                bookBtn.fadeIn()
                up = false
            } else {

                navDown.slideDown()
                navDown.css('display', 'flex')
                bookBtn.fadeOut()
                up = true
            }

        })
    });



    setInterval(setClock, 1000)


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

    function setClock() {

        const hourHand = $('.hand-hour')
        const minuteHand = $('.hand-minute')
        const secondHand = $('.hand-second')

        function setRotation(elem, rotation) {
            elem.css('--rotation', rotation * 360)
        }
        const currentDate = new Date()
        const secondsRatio = currentDate.getSeconds() / 60
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
        setRotation(secondHand, secondsRatio)
        setRotation(minuteHand, minutesRatio)
        setRotation(hourHand, hoursRatio)


    }
}