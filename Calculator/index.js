const screen = document.getElementById("screen");
let storeNum = [""];
function valueofBtn(e) {
  screen.value += e.value;
  storeNum.push(e.value);
  console.log(storeNum);
}
function calculate() {
  screen.value = eval(screen.value);
  storeNum = [""];
}
function Clear() {
  screen.value = " ";
}
function delet() {
    storeNum.pop();
    screen.value = storeNum.join('');
}
