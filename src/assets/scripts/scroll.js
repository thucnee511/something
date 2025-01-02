document.addEventListener("wheel", function (event) {
  const windowWidth = window.innerWidth;
  if (windowWidth > 500) {
    if (event.deltaY !== 0) {
      if (!isOpen) {
        document.querySelector(".main").scrollLeft += event.deltaY;
      } else {
        document.querySelector(".sub__section").scrollLeft += event.deltaY;
      }
    }
  } else {
    if (event.deltaY !== 0) {
      if (!isOpen) {
        document.querySelector(".main").scrollTop += event.deltaY;
      } else {
        document.querySelector(".sub__section").scrollTop += event.deltaY;
      }
    }
  }
});
let isOpen = false;
const video = document.getElementById("scrollVideo");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(video);
