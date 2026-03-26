// ===== Active Navbar on Scroll =====
function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar .menu li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);
document.addEventListener('DOMContentLoaded', setActiveNav);

$(document).ready(function(){

    // ===== Sticky Navbar on Scroll =====
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // ===== Scroll Up Button =====
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // ===== Toggle Mobile Menu =====
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // ===== Typed.js =====
    var typed = new Typed(".typing", {
        strings: ["Data Scientist", "ML Engineer", "AI Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Data Scientist", "ML Engineer", "AI Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // ===== Owl Carousel =====
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });

    // ===== AOS Init =====
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // ===== Counter Animation =====
    const startCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 1500;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                if (target === 379) {
                    counter.textContent = '3.79';
                } else if (target === 900) {
                    counter.textContent = '900+';
                } else {
                    counter.textContent = Math.ceil(target);
                }
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter-number').forEach(counter => {
        counterObserver.observe(counter);
    });

});