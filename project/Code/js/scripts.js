

// Zie video Rogier van der linde deel6: carousel
// https://www.youtube.com/watch?v=YrYdEKBo7c8&t=162s

$(document).ready(function(){
    $('.banner').slick({
      dots: true ,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3200,
      arrows: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          
          }
        }
      ]
    });
  });