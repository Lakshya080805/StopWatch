let working=false;
let interval;

const displayWatch = document.getElementById('watch');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function ShowTime(){
     updatedTime = new Date().getTime();
}

function startTimer() {
    if (!working) {
       let startTime = new Date().getTime();
        interval = setInterval(getShowTime, 10) ;
        working = true;
    }
}

function stopTimer() {
    if (working) {
        clearInterval(interval);
        working = false;
    }
}

function resetTimer() {
    clearInterval(interval);
    running = false;
    watch.innerHTML = "00:00:00";
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);