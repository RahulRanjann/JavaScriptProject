var typed = new Typed(".typing", {
  strings: ["Rahul", " a friend.", "a programmer.", "a Gamer."],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
});
function clickFun(element) {
  const pages = document.querySelectorAll(".pages");
  pages.forEach(function (page) {
    page.classList.remove("active");
  });

  const sect = document
    .getElementById(element.dataset.active)
    .classList.add("active");
}
