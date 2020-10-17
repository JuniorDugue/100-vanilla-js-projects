let seconds = 00;
let tens = 00;

let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");

let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");

let interval; //to store timer values

// function will run when 'start' is clicked
function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

buttonStart.onclick = function () {
  interval = setInterval(startTimer);
};

