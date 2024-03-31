// Handle Navbar click event
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function (link, index) {
    if (!index == 2) {
      link.classList.remove("active");
    }
  });
});

// lazy loading top image
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".top-img");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 20%, transparent),url(../assets/images/products-top-img.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
// lazy loading images of products shoes
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".pro-img1");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-shoe1.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".pro-img2");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-shoe2.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".pro-img3");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-shoe3.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".pro-img4");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-shoe4.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".pro-img5");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-shoe5.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".pro-img6");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-shoe6.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});

// lazy loading boys images
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".unboxing-shoes-img1");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-boys1.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".unboxing-shoes-img2");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-boys2.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".unboxing-shoes-img3");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/products-mens-boys3.svg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
// Animation headding
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".headding");
  element.style.opacity = "0";
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.classList.add("animate__animated", "animate__fadeIn");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
