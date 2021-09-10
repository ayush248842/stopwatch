var ms = 0, s = 0, m = 0;
var timer;
var flag = 0;
var stopwatchEl = document.querySelector('.stopwatch');
var lapsContainer = document.querySelector('.lap-container');

// Start button function
function start() {
    flag = 1;
	if(!timer) {
		timer = setInterval(run, 10);
	}
}

function run() {
	stopwatchEl.textContent = getTimer();
	ms+=10;
	if(ms == 1000) {
		ms = 0;
		s++;
	}
	if(s == 60) {
		s = 0;
		m++;
	}
}

// Stop button function
function stop() {
    stopTimer();
}		

// Reset button function
function reset() {
    stopTimer();
    animation();
    lapsContainer.innerHTML = '';
    ms = 0;
    s = 0;
    m = 0;
    flag = 0;
    stopwatchEl.textContent = getTimer();
}		

function animation(){
    stopwatchEl.style.animation = "hinge";
    stopwatchEl.style.animationDuration = "2s";
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}		

function getTimer() {
    var min;
    var sec;
    var milSec;

    if(m < 10){
        min = "0" + m;
    }else{
        min = m;
    }

    if(s < 10){
        sec = "0" + s;
    }else{
        sec = s;
    }

    if(ms < 10){
        milSec = "00" + ms;
    }else if(ms < 100){
        milSec = "0" + ms;
    }else{
        milSec = ms;
    }

    return (min) + ":" + (sec) + ":" + (milSec);
}				

// Laps creation function
function lap() {
    if(timer || flag == 1) {
        var li = document.createElement('li');
        li.innerText = getTimer();
        li.style.listStyle = "none";
        li.style.margin = "0.5rem";
        li.style.fontSize = "2rem";
        li.style.color = "#9f95d8";
        lapsContainer.appendChild(li);
    }
}		
		