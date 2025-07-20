const start = document.getElementById("start");
const stop  = document.getElementById("stop");
const restart  = document.getElementById("restart");

let timeArea = document.getElementById("time-area");

let running = false;
let startTime = null;
let intervalId = null;
let elapsedBefore = 0; 

start.addEventListener("click", () => {
  if (running) return; 
  running = true;

  startTime = Date.now() - elapsedBefore; 
  intervalId = setInterval(() => {
    const elapsed = Date.now() - startTime;
    elapsedBefore = elapsed;

    let milliseconds = elapsed % 1000;
    let totalSeconds = Math.floor(elapsed / 1000);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    timeArea.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  }, 10);
});

stop.addEventListener("click", () => {
  if (!running) return;
  running = false;
  clearInterval(intervalId);
});

restart.addEventListener("click", () => {
  running = false;
  clearInterval(intervalId);
  elapsedBefore = 0;

  timeArea.innerHTML = "0:0:0";
});
