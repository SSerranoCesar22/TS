"use strict";
class Ligth {
    constructor() {
        this.switchButton = document.getElementById("buttonSwitch");
        this.ligthImage = document.querySelector("#ligth img");
        this.zoomRange = document.getElementById("range");
        this.rangeInput2 = document.getElementById("range2");
        this.rotateImage = document.getElementById("range3");
        this.switchButton.addEventListener("click", this.toggleLight.bind(this));
        this.rangeInput2.addEventListener("input", this.updateOpacity.bind(this));
        this.zoomRange.addEventListener("input", this.zoom.bind(this));
        this.rotateImage.addEventListener("input", this.rotate.bind(this));
    }
    toggleLight() {
        if (this.ligthImage.src.includes("on.jpg")) {
            this.ligthImage.src = "images/off.jpg";
            this.switchButton.innerHTML = '<img src="images/boff.jpg" alt="switchOff">';
        }
        else {
            this.ligthImage.src = "images/on.jpg";
            this.switchButton.innerHTML = '<img src="images/bon.jpg" alt="switchOn">';
        }
    }
    updateOpacity() {
        const value = parseFloat(this.rangeInput2.value);
        const opacity = value / 100;
        this.ligthImage.style.opacity = opacity.toString();
    }
    zoom() {
        const scaleValue = this.zoomRange.value;
        this.ligthImage.style.transform = `scale(${scaleValue})`;
    }
    rotate() {
        const rotateValue = parseInt(this.rotateImage.value, 10);
        const maxRotation = 50;
        let rotationAngle = (rotateValue / maxRotation) * 360;
        if (rotateValue < maxRotation) {
            rotationAngle = (1 - rotateValue / maxRotation) * 360;
        }
        this.ligthImage.style.transform = `rotate(${rotationAngle}deg)`;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const ligth = new Ligth();
});
