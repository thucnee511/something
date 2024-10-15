document.addEventListener("wheel", function (event) {
  if (event.deltaY !== 0) {
    document.getElementById("main").scrollLeft += event.deltaY;
  }
});

const video = document.getElementById("scrollVideo");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 });

observer.observe(video);