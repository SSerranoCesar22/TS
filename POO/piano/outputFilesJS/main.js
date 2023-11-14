"use strict";
class Piano {
    constructor() {
        this.allKeys = [];
        this.playSound = (key) => {
            const click = document.querySelectorAll(`[data-key="tunes/${key}.wav"]`);
            this.audio.src = `tunes/${key}.wav`;
            this.audio.play();
            click.forEach((element) => {
                element.classList.add('active');
            });
            setTimeout(() => {
                click.forEach((element) => {
                    element.classList.remove('active');
                });
            }, 150);
        };
        this.pianoKeys = document.querySelectorAll("#piano-keys .key");
        this.audio = new Audio('tunes/a.wav');
        document.addEventListener('keydown', (event) => {
            if (event.key >= 'a' && event.key <= 'z') {
                this.playSound(event.key.toLowerCase()); // Convierte la tecla a minúsculas
                this.activateKey(event.key.toLowerCase());
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.key >= 'a' && event.key <= 'z') {
                this.deactivateKey(event.key.toLowerCase()); // Convierte la tecla a minúsculas
            }
        });
    }
    activateKey(key) {
        const keyElement = document.querySelector(`[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.add("active");
        }
    }
    deactivateKey(key) {
        const keyElement = document.querySelector(`[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.remove("active");
        }
    }
}
const piano = new Piano();
