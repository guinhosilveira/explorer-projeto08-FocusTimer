export default function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
}) {
    
    function clickPlay() {
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
        buttonSet.classList.add('hide');
        buttonStop.classList.remove('hide');
    }   
    
    function clickPause() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
    }

    function reset() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        buttonSet.classList.remove('hide');
        buttonStop.classList.add('hide');
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?');
        if (!newMinutes) {
            return false;
        }
    
        return newMinutes;
    }

    function changeButtonSound() {
        buttonSoundOn.classList.toggle('hide');
        buttonSoundOff.classList.toggle('hide');
    }

    return {
        reset,
        clickPlay,
        clickPause,
        getMinutes,
        changeButtonSound
    }

}



