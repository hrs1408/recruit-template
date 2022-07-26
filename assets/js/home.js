$(document).ready(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
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
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });
    $('.customer-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
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

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}