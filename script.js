// Clock
function showClock() {
    let now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
  }
  setInterval(showClock, 1000);
  showClock();
  
  // Stopwatch
  let time = 0;
  let running = false;
  let timer;
  
  function format(ms) {
    let s = Math.floor(ms / 1000);
    let h = String(Math.floor(s / 3600)).padStart(2, '0');
    let m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    let sec = String(s % 60).padStart(2, '0');
    return `${h}:${m}:${sec}`;
  }
  
  function update() {
    document.getElementById("stopwatch").textContent = format(time);
  }
  
  document.getElementById("startStop").onclick = function () {
    if (!running) {
      let start = Date.now() - time;
      timer = setInterval(() => {
        time = Date.now() - start;
        update();
      }, 1000);
      this.textContent = "Stop";
      running = true;
    } else {
      clearInterval(timer);
      this.textContent = "Start";
      running = false;
    }
  };
  
  document.getElementById("restart").onclick = function () {
    clearInterval(timer);
    time = 0;
    running = false;
    update();
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("lapList").innerHTML = "";
  };
  
  document.getElementById("lap").onclick = function () {
    if (running) {
      let lapTime = format(time);
      let lapItem = document.createElement("div");
      lapItem.textContent = "Lap: " + lapTime;
      document.getElementById("lapList").appendChild(lapItem);
    }
  };
  