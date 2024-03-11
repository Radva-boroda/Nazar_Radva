document.addEventListener("DOMContentLoaded", function () {
    var mySwiper;
  
    function initSwiper() {
      mySwiper = new Swiper('.swiper_mySwiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.btn_go',
          prevEl: '.btn_back',
        },
      });
    }
  
    function destroySwiper() {
      if (mySwiper) {
        mySwiper.destroy();
      }
    }
  
    function checkMediaQuery() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        destroySwiper(); 
        mySwiper = new Swiper('.swiper_mySwiper', {
          slidesPerView: 2, 
          spaceBetween: 20,
          navigation: {
            nextEl: '.btn_go',
            prevEl: '.btn_back',
          },
        });
      } else {
        destroySwiper();
        initSwiper(); 
      }
    }
  
    checkMediaQuery();
  
    window.addEventListener('resize', checkMediaQuery);
  
    document.querySelector('.btn_back').addEventListener('click', function () {
      mySwiper.slidePrev();
    });
  
    document.querySelector('.btn_go').addEventListener('click', function () {
      mySwiper.slideNext();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
      var mySwiper = new Swiper('.swiperr_mySwiper', {
          slidesPerView: 1.8,
          spaceBetween: 20,
      });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper('.swiperrr_mySwiper', {
      slidesPerView: 2,
        spaceBetween: 20,
    });
  });
  
  let currentScrollPos = window.pageYOffset;
  
  document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copyNumber');
    copyButton.addEventListener('click', function() {
        var accountNumber = document.getElementById('uanNumber');
        var tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.setAttribute('value', accountNumber.textContent);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Рахунок скопійовано: ' + accountNumber.textContent);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      var goTopButton = document.querySelector('.go_top');
      goTopButton.addEventListener('click', function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  });