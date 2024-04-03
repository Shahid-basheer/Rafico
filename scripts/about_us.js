// Handle Navbar click event
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function (link, index) {
    if (!index == 1) {
      link.classList.remove("active");
    }
  });
});

// lazy loading top img
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".top-img");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && window.innerWidth > 800) {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 20%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711964196/Rafico/top-img-about_us_odsgpw.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 25%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711970121/Rafico/top-about-mobile-img_aqf1dw.png)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
window.addEventListener("resize", function () {
  var element = document.querySelector(".top-img");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && window.innerWidth > 800) {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 20%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711964196/Rafico/top-img-about_us_odsgpw.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 25%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711970121/Rafico/top-about-mobile-img_aqf1dw.png)";
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

// Animation what we do section left and right
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".wht-we-do-column-right");
  element.style.opacity = "0";
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.classList.add("animate__animated", "animate__fadeInRight");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
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
document.addEventListener("DOMContentLoaded", () => {
  var footer = document.querySelector(".hr-line-mobile");
  if (window.innerWidth < 425) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});
