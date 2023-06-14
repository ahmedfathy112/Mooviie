if (window.innerWidth <= 676) {
  $(".slider-for").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
} else {
  $(".slider-for").slick({
    slidesToShow: 5.5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}

let toggle = document.getElementById("toggle");
let menu = document.getElementById("main-menu");
toggle.onclick = function showMenu() {
  menu.classList.toggle("show-menu");
};
