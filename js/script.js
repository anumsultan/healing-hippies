

// $('.owl-carousel').owlCarousel({
//   center: true,
//   items: 2,
//   loop: true,
//   margin: 80,
//   nav: true,
//   navText: ["<div class='nav-button owl-prev slide-left'></div>", "<div class='nav-button owl-next slide-right'></div>"],
//   autoplay: false,
//   autoplayTimeout: 3000,
//   autoplayHoverPause: true,
//   dots: false,
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 1
//     },

//     1000: {
//       items: 2
//     }
//   }
// })


$(".artist-slide").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  nav: true,
  navText: [
    '<button type="button" role="presentation" class="owl-prev"><span class="slide-left"></span></button>',
    '<button type="button" role="presentation" class="owl-next"><span class="slide-right"></span></button>',
  ],
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    991: {
      items: 2,
    },
  },
});




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
