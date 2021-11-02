const $1 = document.querySelector.bind(document);
const $2 = document.querySelectorAll.bind(document);

const mobileOpen = $1(".mobile-open");
const mobileClose = $1(".mobile-close");
const mobileNav = $1(".header-mobile-navbar");

const App = {
  hendleEvents: function () {
    mobileOpen.onclick = () => {
      mobileNav.style.animation = "openNavMobile 0.4s linear";
      mobileNav.style.display = "block";
    };

    mobileClose.onclick = () => {
      mobileNav.style.display = "none";
    };
  },

  start: function () {
    this.hendleEvents();
  },
};

App.start();
