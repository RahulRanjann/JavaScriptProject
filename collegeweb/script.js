function clickFun(element) {
  const pages = document.querySelectorAll(".pages");
  pages.forEach(function (page) {
    page.classList.remove("active");
  });
  console.log(element.dataset.active);
  const sect = document
    .getElementById(element.dataset.activePage)
    .classList.add("active");
}

var typed = new Typed(".typing", {
  strings: ["Rahul", " a friend.", "a programmer.", "a Gamer.", "a student."],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
});
