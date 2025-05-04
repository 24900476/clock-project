# clock-project

A sleek and functional web app that displays a real-time digital clock alongside a fully featured stopwatch. Built with a clean and responsive user interface, this tool is perfect for timekeeping, productivity, and everyday use.

🚀 Features
Live Digital Clock – Continuously updates to show the current time in real time.

Stopwatch – Includes Start, Stop, and Reset buttons for precise time tracking.
Lap Timer – Record multiple lap times while the stopwatch is running.

Responsive Design – Looks great on all screen sizes and devices.

Theme Toggle – Switch between light and dark modes for optimal viewing comfort.

💻 Technologies Used
HTML5

CSS3 (with responsive and theme styling)

JavaScript (for dynamic functionality)
## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Simple Clock & Stopwatch</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="box">
    <h2>Clock</h2>
    <div id="clock" class="time">00:00:00</div>

    <h2>Stopwatch</h2>
    <div id="stopwatch" class="time">00:00:00</div>
    <button id="startStop">Start</button>
    <button id="restart">Restart</button>
    <button id="lap">Lap</button>
    <div id="lapList" class="laps"></div>
  </div>

  <script src="script.js"></script>

</body>
</html>
```
## style.css

```
body {
    font-family: sans-serif;
    text-align: center;
    background: black;
    padding: 40px;
  }
  
  .box {
    background: hsla(335, 93%, 48%, 0.77);
    padding: 20px;
    margin: auto;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px #aaa;
  }
  
  .time {
    font-size: 2em;
    margin: 20px 0;
    background: #eee;
    padding: 10px;
    border-radius: 5px;
  }
  
  button {
    margin: 5px;
    padding: 10px 15px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    background: rgb(170, 56, 170);
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background: pink;
  }
  
  .laps {
    margin-top: 15px;
    text-align: left;
    font-size: 0.9em;
    max-height: 100px;
    overflow-y: auto;
    background: #fafafa;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
```
## script.js
```
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
```
