
const start = document.getElementById("start");
const stop  = document.getElementById("stop");
const restart  = document.getElementById("restart");

let timeArea = document.getElementById("time-area");

let countedSecs = 0;

let running = false;
let intervalId;
let isIntervalRunning = false;


start.addEventListener("click", ()=>{
  running = true;

  if(!isIntervalRunning){
    intervalId = setInterval(() => {
      if(running){ 
        countedSecs += 1;
        timeArea.innerHTML = countedSecs
      }
    }, 1000)
    isIntervalRunning = true;
  }
})

stop.addEventListener("click", () => {
  running = false;
  clearInterval(intervalId);
  isIntervalRunning = false;
});


restart.addEventListener("click", ()=>{
  countedSecs = 0;
  timeArea.innerHTML = 0;
  running = false;
  
})