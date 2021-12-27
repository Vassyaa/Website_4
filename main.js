$(function(){
  $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('menu-hidden');
      $('.header-menu').toggleClass('content-hidden');
  });
});





$('.rev-slider').slick({
    slidesToShow:3,
    slidesToScroll:3,
    prevArrow:"<img src='img/left-slider.svg' class='prev'>",
    nextArrow:"<img src='img/right-slider.svg' class='next'>",
    responsive: [
      {
        breakpoint:991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      }, 
      {
        breakpoint:767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint:430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
});

