let counter;
let timer;

function updateCounter() {
  counter = parseInt(sessionStorage.getItem("counter")) || 0;
  counter++;
  sessionStorage.setItem("counter", counter);
  document.getElementById("counter").textContent =
    "Tempo trascorso: " + counter + " secondi";
}

function startTimer() {
  timer = setInterval(updateCounter, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// Nel caso in cui non si ha il focus principale sulla tab del browser
// il timer si ferma per poi ripartire nel momento
// in cui si ritorna sulla tab

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    stopTimer();
  } else {
    startTimer();
  }
});

updateCounter();
startTimer();
