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
    // if (event.deltaY !== 0) {
    //   if (!isOpen) {
    //     document.querySelector(".main").scrollTop += event.deltaY;
    //   } else {
    //     document.querySelector(".sub__section").scrollLeft += event.deltaY;
    //   }
    // }
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
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
openMenu.addEventListener("click", () => {
  document.querySelector(".sub").style.display = "flex";
  if(window.innerWidth < 500) {
    document.querySelector(".main").style.display = "none";
    console.log("hello");
  }
  isOpen = true;
});
closeMenu.addEventListener("click", () => {
  document.querySelector(".sub").style.display = "none";
  if(window.innerWidth < 500) {
    document.querySelector(".main").style.display = "flex";
    console.log("hello 2");
  }
  isOpen = false;
});
