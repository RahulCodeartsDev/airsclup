/* On Scroll Js */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var header= document.getElementById("header");
    header.classList.add('active');
  } else {
    var header= document.getElementById("header");
    header.classList.remove('active');
  }
}
/* On Scroll Js */

 
var owl = $('#banner-slider');
owl.owlCarousel({
     loop: false,
     dots: false,
     nav: false,
     navText: [
         ("<img src='images/arrow1.png' />"),
         ("<img src='images/arrow2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
             margin: 0,
         },
         1000:{
             items: 1
         }
     }
 });