document.addEventListener("wheel", function (event) {
  if (event.deltaY !== 0) {
    if (!isOpen) {
      document.querySelector(".main").scrollLeft += event.deltaY;
    } else {
      document.getElementById("sub").scrollLeft += event.deltaY;
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
