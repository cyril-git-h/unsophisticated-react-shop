export const sliderFunction = () => {
  const rightbtn = document.querySelector("#rightbtn");
  const leftbtn = document.querySelector("#leftbtn");
  const carouselImages = document.querySelectorAll(".slider__inner img");
  const size = carouselImages[0].clientWidth;
  const slider = document.querySelector(".slider__inner");

  let counter = 1;

  slider.style.transform = `translateX(${-size * counter}px)`;

  function rightbtnclicked() {
    if (counter >= carouselImages.length - 1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = `translateX(${-size * counter}px)`;
  }

  function leftbtnclicked() {
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = `translateX(${-size * counter}px)`;
  }

  rightbtn.addEventListener("click", rightbtnclicked);
  leftbtn.addEventListener("click", leftbtnclicked);

  function moveAgain() {
    if (carouselImages[counter].id === "lastClone") {
      slider.style.transition = "none";
      counter = carouselImages.length - 2;
      slider.style.transform = `translateX(${-size * counter}px)`;
    }
    if (carouselImages[counter].id === "firstClone") {
      slider.style.transition = "none";
      counter = carouselImages.length - counter;
      slider.style.transform = `translateX(${-size * counter}px)`;
    }
  }
  slider.addEventListener("transitionend", moveAgain);
};

export const smoothScrollFunction = () => {
  let navlink;
  const navlinks = document.querySelectorAll("nav a");
  for (navlink of navlinks) {
    navlink.addEventListener("click", smoothscroll);
  }
  function smoothscroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    let offsetTop = document.querySelector(targetId).offsetTop;
    window.scroll({
      top: offsetTop - 110,
      behavior: "smooth",
    });
  }
};
