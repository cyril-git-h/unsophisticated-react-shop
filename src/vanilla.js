export const sliderFunction = () => {
  window.addEventListener('scroll', () => 
  {let scroll = window.pageYOffset;
  })
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

    if (!document.querySelector(".banner").classList.contains("hidden")) {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
      ) {
        document.querySelector(".banner").classList.add("hidden");
      }
      return setTimeout(() => {
        let offsetTop = document.querySelector(targetId).offsetTop;
        window.scroll({
          top: offsetTop - 110,
          behavior: "smooth",
        });
      }, 1000);
    }

    return window.scroll({
      top: offsetTop - 110,
      behavior: "smooth",
    });
  }
};

export const preventScroll = () => {
  let touchStart = 0;
  let touchEnd = 0;
  let banner = document.querySelector(".banner");

  if (!banner) return;

  banner.classList.remove("hidden");

  window.addEventListener("unload", () => {
    window.scroll({
      top: 0,
    });
  });

  document.addEventListener("touchstart", (event) => {
    touchStart = event.changedTouches[0].clientY;
  });
  document.addEventListener("touchend", (event) => {
    touchEnd = event.changedTouches[0].clientY;
    if (touchEnd > touchStart) {
      performScroll(1);
    }
    return performScroll(-1);
  });

  function performScroll(value) {
    if (value == 1 && window.pageYOffset <= 492) {
      banner.classList.remove("hidden");
    }

    window.addEventListener("scroll", () => {
      if (value == -1 && window.pageYOffset <= 492) {
        banner.classList.add("hidden");
      }
    });
  }
};
