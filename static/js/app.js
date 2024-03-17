// AOS
AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
  disable: "mobile",
});

// Fixed Header
const stickyHeader = () => {
  const header = document.querySelector(".header");
  const scrollTrigger = 60;
  window.onscroll = () => {
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
};
stickyHeader();
