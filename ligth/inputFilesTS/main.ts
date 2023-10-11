const switchButton = document.getElementById('buttonSwitch') as HTMLButtonElement;
const ligthImage = document.querySelector('#ligth img') as HTMLImageElement;
const zoomRange = document.getElementById('range') as HTMLInputElement;
const rangeInput2 = document.getElementById("range2") as HTMLInputElement;
const valueZoom = document.getElementById('value') as HTMLInputElement;

function toggleLight(event: MouseEvent) {
    if (ligthImage.src.includes("off.jpg")) {
        ligthImage.src = "images/on.jpg";
        switchButton.innerHTML = '<img src="images/bon.jpg" alt="switchOn">';
    } else {
        ligthImage.src = "images/off.jpg";
        switchButton.innerHTML = '<img src="images/boff.jpg" alt="switchOff">';
    }
}


function updateOpacity() {
    const value = parseFloat(rangeInput2.value);
    const opacity = value / 100;
    ligthImage.style.opacity = opacity.toString();
}
function zoom(){
    const scaleValue = zoomRange.value;
    ligthImage.style.transform = `scale(${scaleValue})`;

}

switchButton.addEventListener("click", toggleLight);
rangeInput2.addEventListener("input", updateOpacity);
zoomRange.addEventListener('input', zoom);