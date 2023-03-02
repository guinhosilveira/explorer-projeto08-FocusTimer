import Timer from "./timer.js";
import Controls from "./controls.js";
import { elements } from "./elements.js";
import Sound from "./sounds.js";
import { Events } from "./events.js";

const {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
} = elements;

const configControls = {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
};
const controls = Controls(configControls);

const configTimer = {
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
};
const timer = Timer(configTimer);

const sound = Sound();

const configEvent = {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    controls,
    timer,
    sound
};
const event = Events(configEvent);