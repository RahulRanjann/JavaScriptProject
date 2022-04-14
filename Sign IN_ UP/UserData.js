document.getElementById("BookNow").addEventListener("submit", submitForm);

var whereTo;
var howMany;
var arrivals;
var leaving;

function submitForm(e) {
  e.preventDefault();
  var leaving = getInputVal('leaving');
  var whereTo = getInputVal('whereTo');
  var howmany = getInputVal('howMany');
  var arrivals = getInputVal('arrivals');

  console.log(whereTo);
}

// function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}
