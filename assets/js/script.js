$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000, //2000ms = 2s;
  autoplayHoverPause: true,
});


$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[768,1],
      margin:10,
      pagination:false,
      navigation:true,
      navigationText:["",""],
      autoPlay:true
  });
})


$(document).ready(function () {
  let cards = document.querySelectorAll(".accordian-item");
  [...cards].forEach((card) => {
    card.addEventListener("click", function () {
      $(".accordian-item .answer")
        .not($(this).find(".answer"))
        .removeClass("open");
      $(".accordian-item i")
        .not($(this).find("i"))
        .removeClass("ion-md-remove");
      $(this).find(".accordian-link , .answer").toggleClass("open");
      $(this).find("i").toggleClass("ion-md-remove");
    });
  });
});
