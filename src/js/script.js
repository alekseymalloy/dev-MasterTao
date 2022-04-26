$(document).ready(function () {
  $('select').niceSelect();

  $(".slider-template").slick({
    dots: true,
    slidesToShow: 3,
    prevArrow:"<div class='prevArrow'><img src='img/icon-left.png'></div>",
    nextArrow:"<div class='nextArrow'><img src='img/icon-right.png'></div>",
  })


  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: ".container-arrows",
  });
  $('.multiple-items2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: ".container-arrows2",
  });
});





