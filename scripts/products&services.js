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
// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.querySelector(".pro-img1");
//   var observer = new IntersectionObserver(
//     function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           element.style.backgroundImage =
//             "url(../assets/images/products-mens-shoe1.svg)";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(element);
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.querySelector(".pro-img2");
//   var observer = new IntersectionObserver(
//     function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           element.style.backgroundImage =
//             "url(../assets/images/products-mens-shoe2.svg)";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(element);
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.querySelector(".pro-img3");
//   var observer = new IntersectionObserver(
//     function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           element.style.backgroundImage =
//             "url(../assets/images/products-mens-shoe3.svg)";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(element);
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.querySelector(".pro-img4");
//   var observer = new IntersectionObserver(
//     function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           element.style.backgroundImage =
//             "url(../assets/images/products-mens-shoe4.svg)";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(element);
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.querySelector(".pro-img5");
//   var observer = new IntersectionObserver(
//     function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           element.style.backgroundImage =
//             "url(../assets/images/products-mens-shoe5.svg)";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(element);
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.querySelector(".pro-img6");
//   var observer = new IntersectionObserver(
//     function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           element.style.backgroundImage =
//             "url(../assets/images/products-mens-shoe6.svg)";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(element);
// });

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
// Handle product btn click event
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".product-btn button");
  var productImage = document.getElementById("product-image");
  var productImagesContainer = document.getElementById("product-images");
  var categoryImages = {
    mens: [
      "products-mens-shoe1.svg",
      "products-mens-shoe2.svg",
      "products-mens-shoe3.svg",
      "products-mens-shoe6.svg",
      "products-mens-shoe5.svg",
    ],
    women: [
      "products-mens-shoe4.svg",
      "products-mens-shoe5.svg",
      "products-mens-shoe6.svg",
    ],
    kids: [
      "products-mens-shoe6.svg",
      "products-mens-shoe1.svg",
      "products-mens-shoe2.svg",
      "products-mens-shoe3.svg",
      "products-mens-shoe4.svg",
      "products-mens-shoe5.svg",
    ],
    sports: [
      "products-mens-shoe4.svg",
      "products-mens-shoe5.svg",
      "products-mens-shoe6.svg",
    ],
    boots: [
      "products-mens-shoe1.svg",
      "products-mens-shoe5.svg",
      "products-mens-shoe6.svg",
    ],
    loafers: [
      "products-mens-shoe4.svg",
      "products-mens-shoe2.svg",
      "products-mens-shoe5.svg",
    ],
  };
  function loadCategoryImages(button) {
    var category = button.getAttribute("data-category");
    var imagePaths = categoryImages[category];
    if (imagePaths && imagePaths.length > 0) {
      productImagesContainer.innerHTML = "";
      imagePaths.forEach((imagePath, index) => {
        var col = document.createElement("div");
        col.classList.add("col", "pt-3", "px-2");
        var innerDiv = document.createElement("div");
        innerDiv.style.minWidth = "22rem";
        innerDiv.style.height = "20rem";
        innerDiv.style.background = " #f4f4f4;";
        var imgDiv = document.createElement("div");
        imgDiv.classList.add("pro-img");
        imgDiv.style.backgroundImage = `url(../assets/images/${imagePath}`;
        col.appendChild(innerDiv);
        innerDiv.appendChild(imgDiv);
        productImagesContainer.appendChild(col);
      });
    } else {
      console.error("No images found for the selected category.");
    }
  }
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      buttons.forEach((btn) => {
        if (btn !== event.target) {
          btn.classList.remove("active-btn");
        }
      });
      event.target.classList.add("active-btn");
      loadCategoryImages(button);
      console.log(button);
    });
  });

  // default load category images
  loadCategoryImages(buttons[0]);
});
