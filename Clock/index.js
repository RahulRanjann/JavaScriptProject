const hourHand = document.getElementById("hour");
const minHand = document.getElementById("minute");
const secHand = document.getElementById("second");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  console.clear();
  console.log(hour + ":" + minute + ":" + second);

  let secPosition = (second * 360) / 60;
  let minPosition = (minute * 360) / 60;
  let hourPosition = (hour * 360) / 12;

  hourHand.style.transform = "rotate(" + hourPosition + "deg)";
  minHand.style.transform = "rotate(" + minPosition + "deg)";
  secHand.style.transform = "rotate(" + secPosition + "deg)";
}, 1000);
