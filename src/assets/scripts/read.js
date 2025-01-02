document.querySelectorAll(".remove__button--icon").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const id = event.target.parrentElement.getAttribute("data-id");
    console.log(id);
  });
});
