const start = document.getElementById("start");
const lap  = document.getElementById("lap");
const stop  = document.getElementById("stop");
const restart  = document.getElementById("restart");
const lapArea = document.querySelector(".lap-area");


let timeArea = document.getElementById("time-area");
let i = 0

let laps = ("");

let running = false;
let startTime = null;
let intervalId = null;
let elapsedBefore = 0; 

start.addEventListener("click", () => {
  if (running) return; 
  running = true;
  start.disabled = true
  start.innerText = "Continue"

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

lap.addEventListener("click", () => {
    if (!running) return;
    const elapsed = elapsedBefore;

    let milliseconds = elapsed % 1000;
    let totalSeconds = Math.floor(elapsed / 1000);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    const lapTime = `${minutes}:${seconds}:${milliseconds}`;

    const lapItem = document.createElement("div");
    i++
    lapItem.innerText = `Lap ${i} : ${lapTime}`;
    lapArea.appendChild(lapItem);
});


stop.addEventListener("click", () => {
  if (!running) return;
  running = false;
  clearInterval(intervalId);
  start.disabled = false
});

restart.addEventListener("click", () => {
  running = false;
  clearInterval(intervalId);
  elapsedBefore = 0;

  timeArea.innerHTML = "0:0:0";
  start.innerText="Start"
  start.disabled = false
  lapArea.innerHTML = ""
  i = 0
});
