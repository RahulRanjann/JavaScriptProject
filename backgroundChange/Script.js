var remote = true;
const layer_1 = document.getElementById("Layer_1");
const day = document.getElementById("day");

function kit() {
  if (remote) {
    layer_1.style.fill = "#ffff00";
    document.body.style.background = "black";
    remote = false;
    day.innerHTML = "<p>Good night night</p>";
  } else {
    layer_1.style.fill = "none";
    document.body.style.background = "none";
    remote = true;
    day.innerHTML = "<p>Good morning</p>";
  }
}
