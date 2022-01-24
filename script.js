// NAVBAR

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

// TYPED
var typed2 = new Typed('.typed', {
    strings: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati saepe quia consectetur veniam culpa repellendus hic porro? Fugit ipsa nemo, iure quas, totam ex hic quibusdam aspernatur libero asperiores rem? At officiis omnis alias repudiandae. Tempore necessitatibus doloremque, corporis quaerat ipsam commodi earum praesentium facilis neque dolor, dicta quas odit'],
    typeSpeed: 20,
    fadeOut: true,
    loop: false
  });   
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {
    const top = $('.counter').offset().top - 
    window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this), 
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
            countNum : countTo
            },
            {
                duration : 1000,
                easing : 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                }, 
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 0;
    }
});

// AOS 
AOS.init();