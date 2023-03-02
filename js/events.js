export function Events({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    controls,
    timer,
    sound
}) {
    buttonPlay.addEventListener('click', function () {
        controls.clickPlay();
        timer.countDown();
        sound.pressButton();
    });
    
    buttonPause.addEventListener('click', function () {
        controls.clickPause();
        timer.hold();
        sound.pressButton();
    });
    
    buttonStop.addEventListener('click', function (){
        controls.reset();
        timer.reset();
        sound.pressButton();
    });
    
    buttonSoundOn.addEventListener('click', function () {
        controls.changeButtonSound();
        sound.bgAudio.pause();
    });
    buttonSoundOff.addEventListener('click', function () {
        controls.changeButtonSound()
        sound.bgAudio.play();
    });
    
    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes();
        if (!newMinutes) {
            timer.reset();
            return;
        }
    
        timer.updateDisplay(newMinutes, 0);
        timer.updateMinutes(newMinutes);
    });
}