$('.main').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '<span class="testpriv_arrow" ><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:'<span class="test_next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slider1').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: '<span class="slider1priv_arrow" ><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:'<span class="slider1next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slider2').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: '<span class="slider2priv_arrow" ><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:'<span class="slider2next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slider3').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: '<span class="slider3priv_arrow" ><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:'<span class="slider3next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slider4').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: '<span class="slider4priv_arrow" ><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:'<span class="slider4next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

const head = document.querySelector('.header');
const bigbtn = document.querySelector('.navbtn');

const abc = function () {
  head.classList.toggle('active');
};
bigbtn.addEventListener('click',abc);
  
  