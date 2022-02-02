var remote = true;
const layer_1 = document.getElementById("Layer_1");
const day = document.getElementById("day");

layer_1.addEventListener("click", function kit() {
  if (remote) {
    layer_1.style.fill = "#ffff00";
    document.body.style.background = "black";
    remote = false;
    day.innerHTML = "<p class ="para">Good night🌃</p>";
    document.querySelector(".para").style.color = "white"
  } else {
    layer_1.style.fill = "none";
    document.body.style.background = "none";
    remote = true;
    day.innerHTML = "<p class = "para2">Good morning🌄</p>";
    document.querySelector(".para").style.color = "black"
  }
});
