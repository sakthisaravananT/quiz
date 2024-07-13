//Working On Timer

var count = 21;
var interval = setInterval(function () {
  document.getElementById("timer").innerHTML = count - 1;
  count--;
  if (count === 0) {
    getNewQuestion();
    count = 21;
  }
}, 1000);
