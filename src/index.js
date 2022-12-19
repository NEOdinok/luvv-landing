import './index.html';
import './index.scss';

import AOS from 'aos';
AOS.init();

$(function() {
  $(document).scroll(function(){
      if($(this).scrollTop() >= $('#footer').offset().top - 650) {
          document.getElementById('footer__cta').classList.add('round');
          document.getElementById('cta__wrapper').classList.add('round');
      } else {
          document.getElementById('footer__cta').classList.remove('round');
      }
  });
});
