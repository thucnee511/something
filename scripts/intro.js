const openDescription = document.querySelector("#openDescription");
const closeDescription = document.querySelector("#closeDescription");
const description = document.querySelector("#description");

openDescription.addEventListener("click", () => {
  description.classList.remove("translate-x-full");
});

closeDescription.addEventListener("click", () => {
  description.classList.add("translate-x-full");
});

const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menu = document.querySelector("#menu");

openMenu.addEventListener("click", () => {
  menu.classList.remove("translate-x-[-100%]");
})

closeMenu.addEventListener("click", () => {
  menu.classList.add("translate-x-[-100%]");
})


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

  const themeButton = document.querySelector("#themeButton");
  const fontButton = document.querySelector("#fontButton");
  const highlighButton = document.querySelector("#highlighButton");
  const increaseFontButton = document.querySelector("#increaseFontButton");
  const decreaseFontButton = document.querySelector("#decreaseFontButton");
  const aspecratioButton = document.querySelector("#aspecratioButton");
  let highlightMode = false;

  themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  fontButton.addEventListener("click", () => {
    document.querySelector("section").classList.toggle("font-alata");
  })


  const maincontent = document.querySelector("#maincontent");
  let currentFontSize = 2;
  increaseFontButton.addEventListener("click", () => {
    //increase font size
    currentFontSize += 0.1;
    console.log(currentFontSize);
    maincontent.style.fontSize = `${currentFontSize}rem`;
  })
  decreaseFontButton.addEventListener("click", () => {
    //decrease font size
    currentFontSize -= 0.1;
    console.log(currentFontSize);
    maincontent.style.fontSize = `${currentFontSize}rem`;
  })

  aspecratioButton.addEventListener("click", () => {
    //go fullscreen
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { 
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { 
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { 
        document.documentElement.msRequestFullscreen();
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
  })