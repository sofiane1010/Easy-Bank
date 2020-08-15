const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".header__menu");
const backdrop = document.querySelector(".header__back-drop");

const toggleMenu = (e) => {
  e.preventDefault();
  if (!header.classList.contains("opened")) {
    backdrop.classList.add("fade");
    setTimeout(() => {
      backdrop.classList.add("in");
    }, 0);
  } else {
    backdrop.classList.remove("in");
    backdrop.addEventListener("transitionend", () => {
      if (backdrop.classList.contains("in")) return;
      backdrop.classList.remove("fade");
    });
  }
  header.classList.toggle("opened");
};

hamburgerMenu.addEventListener("click", toggleMenu);
backdrop.addEventListener("click", toggleMenu);
