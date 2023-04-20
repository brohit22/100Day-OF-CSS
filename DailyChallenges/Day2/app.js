let icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  icon.classList.remove("no-animation");
});
