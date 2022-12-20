import './index.html';
import './index.scss';

var scrollBottom = $(window).scrollTop() + $(window).height();
var footer = document.querySelector('footer#footer');
var height = document.querySelector('footer#footer').clientHeight;// footer current height

// document.addEventListener("scroll", (event) => {
//   var height = document.querySelector('footer#footer').clientHeight;
//   console.log('footer height', height);
//   console.log('from top', $(window).scrollTop());
// });


// $(function() {
//   $(document).scroll(function(){
//       if($(this).scrollTop() >= $('#footer').offset().top - 650) {
//           document.getElementById('footer__cta').classList.add('round');
//           document.getElementById('cta__wrapper').classList.add('round');
//           document.getElementById('cta__wrapper').classList.add('bounce');
//       } else {
//           document.getElementById('footer__cta').classList.remove('round');
//       }
//   });
// });

$(function() {
  $(document).scroll(function() {
    if($(this).scrollTop() >= $('#footer').offset().top - 650) {
      const test = document.querySelector('div#test');
      console.log('worked');
      const classList = test.classList;
      const state = classList.contains('zoomed-in');
      // first remove previous
      classList.remove('zoomed-' + (state ? 'in' : 'out'));
      // force reflow
      test.offsetWidth;
      // set new one
      classList.add('zoomed-' + (state ? 'out' : 'in'));
    } else {
      console.log('no');
    }
  })
})
