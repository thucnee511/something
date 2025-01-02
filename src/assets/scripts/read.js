document.querySelectorAll(".remove__button--icon").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const id = event.target.parrentElement.getAttribute("data-id");
    console.log(id);
  });
});

const themeButton = document.querySelector("#themeButton");
const fontButton = document.querySelector("#fontButton");
const hightlightButton = document.querySelector("#hightlightButton");
const increaseFontButton = document.querySelector("#increaseFontButton");
const decreaseFontButton = document.querySelector("#decreaseFontButton");
const aspecratioButton = document.querySelector("#aspecratioButton");

const dark = {
  background: "#121212",
  color: "#d8cfc0",
};
const light = {
  background: "#d8cfc0",
  color: "#803407",
};
currentTheme = dark;
themeButton.addEventListener("click", () => {
  document.querySelector(".main").style.backgroundColor =
    currentTheme === dark ? light.background : dark.background;
  document.querySelector(".content__container").style.color =
    currentTheme === dark ? light.color : dark.color;
  currentTheme = currentTheme === dark ? light : dark;
  document.querySelector("#homeButton").style.color = currentTheme.color;
  document.querySelector("#openBookmark").style.color = currentTheme.color;
  document.querySelector(".header__title").style.color = currentTheme.color;
  document.querySelector(".header__language").style.color = currentTheme.color;
  document.querySelector(".bar1").style.backgroundColor = currentTheme.color;
  document.querySelector(".bar2").style.backgroundColor = currentTheme.color;
  document.querySelector(".bar3").style.backgroundColor = currentTheme.color;
});

increaseFontButton.addEventListener("click", () => {
  document.querySelectorAll(".content__img--caption").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "1.5rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__title").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "3rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__paragraph").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__p").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__references").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__r").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__subtitle").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__s").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__video--caption").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "1.5rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__rs").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
  document.querySelectorAll(".content__rp").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) + 0.1 + "rem";
  });
});

decreaseFontButton.addEventListener("click", () => {
  document.querySelectorAll(".content__img--caption").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "1.5rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__title").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "3rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__paragraph").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__p").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__references").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__r").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__subtitle").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__s").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__video--caption").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "1.5rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__rs").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
  document.querySelectorAll(".content__rp").forEach((caption) => {
    let fontSize = caption.style.fontSize;
    if (fontSize === "") {
      fontSize = "2rem";
    }
    caption.style.fontSize = parseFloat(fontSize) - 0.1 + "rem";
  });
});

const fontList = [
  '"Alata", sans-serif',
  '"Mulish", sans-serif',
  '"Paytone One", sans-serif',
  '"Montserrat", sans-serif',
];

fontButton.addEventListener("click", () => {
  document.querySelector(".content__container").style.fontFamily =
    fontList[Math.floor(Math.random() * fontList.length)];
});

let isFullScreen = false;
aspecratioButton.addEventListener("click", () => {
  //zoom content__container to full screen
  const content = document.querySelector(".content");
  if (!isFullScreen) {
    openFullscreen(content);
    isFullScreen = true;
  } else {
    closeFullscreen();
    isFullScreen = false;
  }
});

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
