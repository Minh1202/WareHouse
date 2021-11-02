$(document).ready(function () {
  $(".testimonials-slide").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinity: true,
    dots: true,
    // fade: true,
    // fadeSpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='lni lni-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='lni lni-arrow-right' aria-hidden='true'></i></button>",
  });
});
