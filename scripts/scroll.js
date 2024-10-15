document.addEventListener("wheel", function (event) {
  if (event.deltaY !== 0) {
    
    if(!isOpen) {
      document.getElementById("main").scrollLeft += event.deltaY;
    }else{
      document.getElementById("sub").scrollLeft += event.deltaY;
    }
  }
});
let isOpen = false;
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

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
  menu.classList.remove("translate-y-full");
  isOpen = true;
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("translate-y-full");
  isOpen = false;
});