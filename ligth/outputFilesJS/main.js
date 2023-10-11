"use strict";
const switchButton = document.getElementById('buttonSwitch');
const ligthImage = document.querySelector('#ligth img');
const zoomRange = document.getElementById('range');
const rangeInput2 = document.getElementById("range2");
const valueZoom = document.getElementById('value');
function toggleLight(event) {
    if (ligthImage.src.includes("off.jpg")) {
        ligthImage.src = "images/on.jpg";
        switchButton.innerHTML = '<img src="images/bon.jpg" alt="switchOn">';
    }
    else {
        ligthImage.src = "images/off.jpg";
        switchButton.innerHTML = '<img src="images/boff.jpg" alt="switchOff">';
    }
}
function updateOpacity() {
    const value = parseFloat(rangeInput2.value);
    const opacity = value / 100;
    ligthImage.style.opacity = opacity.toString();
}
function zoom() {
    const scaleValue = zoomRange.value;
    ligthImage.style.transform = `scale(${scaleValue})`;
}
switchButton.addEventListener("click", toggleLight);
rangeInput2.addEventListener("input", updateOpacity);
zoomRange.addEventListener('input', zoom);
