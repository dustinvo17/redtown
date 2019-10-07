window.onload = init

function init() {
    let up = false
    setClock()




    // load reusable components 
    $('#footer').load('footer.html')
    $("#navbar").load("nav-bar.html", function () {
        if (window.location.href.includes('.html')) {
            dynamicNav(false)
        }

        scrollNav('transparent')

        $('.navbar-button-hamburger-img').on('click', function () {

            const navDown = $('.navbar-down')
            const bookBtn = $('.navbar-button > .navbar-button-book')
            if (up) {

                navDown.slideUp(function () {
                    slideUpCustom()
                })
                bookBtn.fadeIn()
                up = false

            } else {



                navDown.slideDown()
                dynamicNav(true)



                navDown.css('display', 'flex')
                bookBtn.fadeOut()
                up = true
            }

        })
    });




    setInterval(setClock, 1000)

    // renderDynamic nav base on component
    function dynamicNav(inHome) {
        $('.navbar-button-hamburger-img').attr('src', `./img/hamburger${ inHome? '':'-black'}.svg`)
        $('.navbar-logo-img').attr('src', `./img/logo${inHome ? '':'-2'}.png`)
        $('.button-book-main').css('--colorBtn', `${inHome ? '#F6D478':'#828282'}`)
    }


    // renderDynamic nav base on component

    //    nav bar scroll event
    function scrollNav(background) {
        $(window).scroll(function () {
            function changeBg(color) {
                $('.navbar').css({
                    background: color,
                    transition: 'background 0.2s ease'
                })

            }

            if ($(document).scrollTop() > 50) {
                changeBg('#161A28')
                dynamicNav(true)


            } else {
                changeBg(background)
                // keep navbar in other pages same color when scroll
                if (window.location.href.includes('.html')) {
                    dynamicNav(false)
                }


            }

        })
    }


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

    // keep color nav bar when scroll up on diffrent page
    function slideUpCustom() {

        if (window.location.href.includes('.html')) {
            if ($(document).scrollTop() > 50) {

                dynamicNav(true)


            } else {
                dynamicNav(false)
            }
        }


    }

    // restaurant page function
    function imageSlider(){
        const left = $('.fa-chevron-left')
     
        const right = $('.fa-chevron-right')
        let currentIndex = 0
        const images = $('.restaurant-story-box-img img')
        let currentImage = images[0]
        function slider(left){
             currentImage.classList.remove('active')
            if(currentIndex === (left ? 0 :2)){
                currentIndex = (left ? 2:0)
            }
            else {
                if(left){
                    currentIndex--
                }
                else {
                    currentIndex++
                }
                
            }
            currentImage = images[currentIndex]
           
            currentImage.classList.add('active')
        }
        left.on('click',function(){
            slider(true)
         
            
        })
        right.on('click',function(){
            slider(false)
        })
    }
    imageSlider()
}