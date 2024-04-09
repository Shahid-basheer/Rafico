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
        if (entry.isIntersecting && window.innerWidth > 800) {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 20%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711964391/Rafico/top-img-product_iqhyz9.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711970410/Rafico/top-product-img-mobile_cmuzo8.png)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});
// lazy loading top image
window.addEventListener("resize", function () {
  var element = document.querySelector(".top-img");
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && window.innerWidth > 800) {
          element.style.backgroundImage =
            "linear-gradient(to right, #01253d 20%, transparent),url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711964391/Rafico/top-img-product_iqhyz9.png)";
          observer.unobserve(entry.target);
        } else {
          element.style.backgroundImage =
            "url(https://res.cloudinary.com/dnvykpdlo/image/upload/v1711970410/Rafico/top-product-img-mobile_cmuzo8.png)";
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
          entry.target.style.opacity = "1";
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
          entry.target.style.opacity = "1";
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
// Handle product btn click event
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".product-btn button");
  var productImage = document.getElementById("product-image");
  var productImagesContainer = document.getElementById("product-images");
  var categoryImages = {
    mens: [
      "mens1.jpg",
      "mens2.jpg",
      "mens3.jpg",
      "mens4.jpg",
      "mens5.jpg",
      "mens6.jpg",
      "mens7.jpg",
      "mens8.jpg",
      "mens9.jpg",
      "mens10.jpg",
      "mens11.jpg",
    ],
    women: [
      "women1.jpg",
      "women2.jpg",
      "women3.jpg",
      "women4.jpg",
      "women5.jpg",
      "women6.jpg",
      "women7.jpg",
      "women8.jpg",
      "women9.jpg",
    ],
    kids: [
      "kid1.jpg",
      "kid2.jpg",
      "kid3.jpg",
      "kid4.jpg",
      "kid5.jpg",
      "kid6.jpg",
      "kid7.jpg",
    ],
    sports: [
      "sports1.jpg",
      "sports2.jpg",
      "sports3.jpg",
      "sports4.jpg",
      "sports5.jpg",
      "sports6.jpg",
    ],
    slippers: [
      "slip1.jpg",
      "slip2.jpg",
      "slip3.jpg",
      "slip4.jpg",
      "slip5.jpg",
      "slip6.jpg",
      "slip7.jpg",
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
        innerDiv.classList.add("pro-img-container");
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
