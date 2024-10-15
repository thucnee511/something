const openDescription = document.querySelector("#openDescription");
const closeDescription = document.querySelector("#closeDescription");
const description = document.querySelector("#description");

openDescription.addEventListener("click", () => {
  description.classList.remove("translate-x-full");
});

closeDescription.addEventListener("click", () => {
  description.classList.add("translate-x-full");
});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("vid");
  
    video.addEventListener("click", function() {
      if (!document.fullscreenElement) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { 
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { 
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { 
          video.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { 
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { 
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { 
          document.msExitFullscreen();
        }
      }
    });
  });