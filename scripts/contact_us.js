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
            "url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711964566/Rafico/top-img-about_us_cyonba.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 10%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711970680/Rafico/top-contact-mobile-img_nnphmn.png)";
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
            "url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711964566/Rafico/top-img-about_us_cyonba.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 10%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711970680/Rafico/top-contact-mobile-img_nnphmn.png)";
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
            "url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711967233/Rafico/contact_us-map-img_zgxnoj.png)";
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
    window.location.href = "/index.html";
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
      .then((res) => res.json())
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
