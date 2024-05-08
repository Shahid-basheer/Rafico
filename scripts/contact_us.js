// Handle Navbar click event
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function (link, index) {
    if (!index == 3) {
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
            "url(../assets/images/top-contact-img.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 10%, transparent),url(../assets/images/top-contact-img-mobile.jpg)";
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
            "url(../assets/images/top-contact-img.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 10%, transparent),url(../assets/images/top-contact-img-mobile.jpg)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
// lazy loading map img
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".map-img");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          element.style.backgroundImage =
            "url(../assets/images/contacts_us-map.png)";
          entry.target.style.opacity = "1";
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

// Animation contact form
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".contact-form");
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

// Handle contact form

document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.querySelector("#contact-form");
  var myModal = new bootstrap.Modal(document.querySelector("#thanks-page"));
  var errorForm = document.querySelector(".error-form");
  var headding = document.querySelector(".form-headding");

  myModal._element.addEventListener("hidden.bs.modal", function () {
    window.location.href = "../index.html";
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var response = grecaptcha.getResponse();
    if (!response) {
      alert("Please verify the captcha");
      return;
    }

    var formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: "post",
      body: formData,
    })
      .then((data) => {
        myModal.show();
        contactForm.reset();
      })
      .catch((error) => {
        headding.classList.remove("mb-4");
        errorForm.style.display = "block";
        errorForm.innerHTML = "Something went wrong!";
      });
  });
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
