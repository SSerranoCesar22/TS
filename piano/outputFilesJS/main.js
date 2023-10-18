"use strict";
const pianoKeys = document.querySelectorAll("#piano-keys .key");
let allKeys = [], audio = new Audio(`tunes/a.wav`); //object audio
const playSound = (key) => {
    const click = document.querySelectorAll(`[data-key="tunes/${key}.wav"]`); // audio = new Audio(`tunes/a.wav`); 
    audio.src = `tunes/${key}.wav`;
    audio.play();
    click.forEach((element) => {
        element.classList.add('active');
    });
    setTimeout(() => {
        click.forEach((element) => {
            element.classList.remove('active');
        });
    }, 150);
};
document.addEventListener('keydown', (event) => {
    if (event.key >= 'a' && event.key <= 'z') {
        playSound(event.key);
    }
});
