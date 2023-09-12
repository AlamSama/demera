document.addEventListener("DOMContentLoaded", () => {
    var links = document.querySelectorAll('a[href="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var target = this.getAttribute("data-link").substring(1);
            var targetE = document.getElementById(target);
            targetE.scrollIntoView({ behavior: "smooth" });
        })
    })
})




const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const childBar1 = document.getElementById('childBar1');
const childBar2 = document.getElementById('childBar2');
const childBar3 = document.getElementById('childBar3');

bar.addEventListener('click', function () {
    menu.classList.toggle('left-[-100%]');
    menu.classList.toggle('left-0');

    childBar1.classList.toggle('rotate-45');
    childBar1.classList.toggle('translate-y-[9px]');

    childBar2.classList.toggle('translate-x-2');
    childBar2.classList.toggle('opacity-0');

    childBar3.classList.toggle('-rotate-45');
    childBar3.classList.toggle('-translate-y-[9px]');
})


menu.addEventListener('click', () => {
    menu.classList.toggle('left-[-100%]');
    menu.classList.toggle('left-0');

    childBar1.classList.toggle('rotate-45');
    childBar1.classList.toggle('translate-y-[9px]');

    childBar2.classList.toggle('translate-x-2');
    childBar2.classList.toggle('opacity-0');

    childBar3.classList.toggle('-rotate-45');
    childBar3.classList.toggle('-translate-y-[9px]');
})




function outlets(id) {
    const kota = document.getElementById(id);
    kota.classList.toggle('max-h-[600px]');
}


const parallax1 = document.getElementById('parallax1');
const parallax2 = document.getElementById('parallax2');
const parallax3 = document.getElementById('parallax3');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax1.style.backgroundPositionY = offset * 0.7 + 'px';
    parallax2.style.backgroundPositionY = offset * 0.7 + 'px';
    parallax3.style.backgroundPositionY = offset * 0.7 + 'px';
})


const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
    },
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        depth: 100,
        modifier: 3,
        rotate: 0,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // slidesPerView: window.innerWidth < 768 ? 1 : 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 6,
        },
    }
});


const swiper2 = new Swiper('.swiper2', {
    effect: 'fade',
    centeredSlides: true,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
    },
});

