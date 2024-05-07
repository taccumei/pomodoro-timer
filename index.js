const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const pauseEl = document.getElementById("pause");
const longBreakEl = document.getElementById("longBreak");
const shortBreakEl = document.getElementById("shortBreak");
const pomodoroEl = document.getElementById("pomodoro");


let interval;
let timeLeft;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);/// chia ko du
  let seconds = timeLeft % 60;///chia lay phan du
  let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

  timerEl.innerHTML = formattedTime;
}

let clicked = false;

let timerObj = {
  pomodoro: function () {    
    timeLeft = 15;
    updateTimer();
    document.body.style.background = "rgb(183, 69, 69)";
    startEl.style.color = "rgb(183, 69, 69)";
    pauseEl.style.color = "rgb(183, 69, 69)";
    shortBreakEl.classList.remove("enable");
    longBreakEl.classList.remove("enable");
    pomodoroEl.classList.add("enable");
    clicked = true;
    resetTimer();
  },
  shortBreak: function () {
    timeLeft = 3;
    updateTimer();
    document.body.style.background = "rgb(155, 130, 56)";
    startEl.style.color = "rgb(155, 130, 56)";
    pauseEl.style.color = "rgb(155, 130, 56)";
    shortBreakEl.classList.add("enable");
    pomodoroEl.classList.remove("enable");
    longBreakEl.classList.remove("enable");
    clicked = true;
    resetTimer();
  },
  longBreak: function() {
    timeLeft = 6;
    updateTimer();
    document.body.style.background = "rgb(81, 138, 88)";
    startEl.style.color = "rgb(81, 138, 88)";
    pauseEl.style.color = "rgb(81, 138, 88)";
    longBreakEl.classList.add("enable");
    shortBreakEl.classList.remove("enable");
    pomodoroEl.classList.remove("enable");
    clicked = true;
    resetTimer();
  }
};

[...document.getElementsByTagName("button")].forEach(function (item) {
  item.addEventListener('click', function () {
    timerObj[this.id]();
    console.log(this.id);
  })
});

window.onload = function () {
  document.getElementById('pomodoro').click();
}

startEl.addEventListener("click", () => {
  interval = setInterval(() => {
    console.log(clicked);
    console.log(timeLeft);
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("timer's up");
      updateTimer();
    }
    }, 1000);
  pauseEl.style.display = '';
  startEl.style.display = 'none';
  });

pauseEl.addEventListener("click", () => {
  pauseTimer();
  })

function pauseTimer() {
  clearInterval(interval);
  pauseEl.style.display = 'none';
  startEl.style.display = '';
}

function resetTimer() {
  clicked = false;
  clearInterval(interval);
  updateTimer();
  pauseEl.style.display = 'none';
  startEl.style.display = '';
}

if(timeLeft < 0) {
      clearInterval(interval);
      switch (type) {
      case "Session":
          title.innerHTML = 'Break';
          timer(parseInt(breakRange.value*6), "Break");
      break;
      case "Break":
          title.innerHTML = 'Session';
          timer(parseInt(sessionRange.value*6), "Session");
      break;
    }
    return;
 }
// TODO LIST SECTION

//Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodeList.length; i++){
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

//Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please add a task");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}