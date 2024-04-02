// Handle Navbar click event
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function (link, index) {
    if (!index == 0) {
      link.classList.remove("active");
    }
  });
});

//lazy loading images home top img
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("resize", () => {
    var element = document.querySelector(".top-img");
    var observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && window.innerWidth > 690) {
            element.style.backgroundImage =
              " linear-gradient(to right, #01253d 40%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711964046/Rafico/top-img-home_bgw3pw.png)";
            observer.unobserve(entry.target);
          } else {
            element.style.backgroundImage =
              "linear-gradient(to bottom, #01253d 45%, transparent),url(./assets/images/top-img.svg)";
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
  });
});
//lazy loading images home top introduction img
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".top-introduction-img");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.setAttribute("src", "./assets/images/home-top-img.svg");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
//lazy loading images home center img
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".center-img");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711966169/Rafico/center-img_y6f2jd.png)";
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
//lazy loading images home core values icon
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".core-values-icon1");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(./assets/images/home-core-values1.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".core-values-icon2");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(./assets/images/home-core-values2.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".core-values-icon3");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(./assets/images/home-core-values3.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".core-values-icon4");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(./assets/images/home-core-values4.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".core-values-icon5");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(./assets/images/home-core-values5.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".core-values-icon6");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(./assets/images/home-core-values6.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});

// Animation
// Animation top heading
document.addEventListener("DOMContentLoaded", function () {
  var heading = document.querySelector(".headding");
  heading.style.opacity = "0";
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          heading.classList.add("animate__animated", "animate__fadeInDown");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(heading);
});
// Animation top heading for mobile
document.addEventListener("DOMContentLoaded", function () {
  var heading = document.querySelector(".headding-mobile");
  heading.style.opacity = "0";
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          heading.classList.add("animate__animated", "animate__fadeInDown");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(heading);
});

// Animation introduction module for desktop
document.addEventListener("DOMContentLoaded", function () {
  var colLeft = document.querySelector(".introduction-animation-left");
  var colRight = document.querySelector(".introduction-animation-right");
  colLeft.style.opacity = "0";
  colRight.style.opacity = "0";
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          colLeft.classList.add("animate__animated", "animate__fadeInLeft");
          colRight.classList.add("animate__animated", "animate__fadeInRight");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(colLeft, colRight);
});

// Animation why choose
document.addEventListener("DOMContentLoaded", function () {
  var element1 = document.querySelector(".why-choose-row1");
  var element2 = document.querySelector(".why-choose-row2");
  element1.style.opacity = "0";
  element2.style.opacity = "0";
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element1.classList.add("animate__animated", "animate__fadeInUp");
          element2.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element1, element2);
});

// footer mobile
window.addEventListener("resize", () => {
  var footer = document.querySelector(".hr-line-mobile");
  if (window.innerWidth < 425) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});
