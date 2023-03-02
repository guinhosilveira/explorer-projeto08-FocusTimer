import Sound from "./sounds.js";

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}) {

    let timerTimeOut;
    let minutes = Number(minutesDisplay.textContent); 

    
    function updateDisplay(minutes, seconds) {
        secondsDisplay.textContent = String(seconds).padStart(2, "0"); 
        minutesDisplay.textContent = String(minutes).padStart(2, "0"); 
    }

    function reset() {
        updateDisplay(minutes, 0);
        clearTimeout(timerTimeOut);
    }

    function countDown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);
            
            if (seconds <= 0) {
                if (minutes == 0) {
                    resetControls();
                    reset();
                    Sound().timeEnd();
                    return;
                } else {
                    seconds = 60;
                }
                --minutes;
            }
            
            updateDisplay(minutes, String(seconds - 1))
            
            countDown();
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes;
    }

    function hold() {
        clearTimeout(timerTimeOut);
    }

    return {
        countDown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }

}