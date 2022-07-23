$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: false,
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
          
});

function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            currentNumber++
            callback(currentNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    animateNumber(5890, 0, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('Jobs').innerText = formattedNumber
    })

    animateNumber(255472, 1, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('Member').innerText = formattedNumber
    })

    animateNumber(51428, 1, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('Resumes').innerText = formattedNumber
    })

    animateNumber(12400, 1, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('Company').innerText = formattedNumber
    })
})