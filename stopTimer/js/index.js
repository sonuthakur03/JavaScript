const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('laplist');

/// stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// func to reset laps
const resetLaps = () => {
    lapList.innerHTML = "";
}

// func to reset timer and laps
const resetTimer = () => {
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;
    resetLaps();
}

// func to pause timer
const pauseTimer = () => {
    clearInterval(interval);
    addtoList();
    startButton.disabled = false;

}

// func to reset timer to 0
const resetTimerData = () => {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTimer(); 
}

// func to add laps
const addtoList = () =>{
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

    const lapItem = document.createElement('li');
    lapItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span> ${lapTime}`;
    lapList.appendChild(lapItem);
}

// func to stop timer and show lap
const stopTimer = () => {
    clearInterval(interval);
    addtoList();
    resetTimerData();
    startButton.disabled = false;
}

// func to display timer increment
const displayTimer = () => {
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

// func to make number 2 digits
const padTime = (time) => {
    return time.toString().padStart(2,'0')
}

// func to to update timer
const updateTimer = () =>{
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    displayTimer();
}

// func to start timer
const startTimer = () =>{
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);