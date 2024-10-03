$(".slider").slick({
  draggable: false,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  dots: false,
  fade: true,
  speed: 4000,
  infinite: true,
  cssEase: "ease-out",
  touchThreshold: 100,
  pauseOnHover: false,
  pauseOnFocus: false,
});

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = scrollTop / maxScroll;

  const opacity = Math.abs(Math.cos(scrollPercent * Math.PI * 3));

  document.querySelector(
    ".top"
  ).style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});
