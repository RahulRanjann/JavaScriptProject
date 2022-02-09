const btns = document.querySelectorAll(".Btn");
function change(element) {
  btns.forEach(function (btn) {
    btn.style.background = "white";
  }); 
    element.style.background = "yellow";
}