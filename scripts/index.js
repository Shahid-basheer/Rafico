// Handle Navbar click event
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbar = document.querySelector(
    "#navbar-placeholder .container nav div > div"
  );
  console.log(navbar);
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
