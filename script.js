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
    strings: ['Mordu d\'informatique, j\'ai découvert le monde de la programmation il y a 3 ans de cela et n\'ai jamais cessé de vouloir en apprendre davantage. Polyvalent, je maîtrise les différentes étapes de la création d\'un site ou d\'une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance.'],
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
                duration : 4000,
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