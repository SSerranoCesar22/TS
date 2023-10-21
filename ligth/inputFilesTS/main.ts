class Ligth {
    private switchButton: HTMLButtonElement;
    private ligthImage: HTMLImageElement;
    private zoomRange: HTMLInputElement;
    private rangeInput2: HTMLInputElement;
    private rotateImage: HTMLInputElement;

    constructor() {
        this.switchButton = document.getElementById("buttonSwitch") as HTMLButtonElement;
        this.ligthImage = document.querySelector("#ligth img") as HTMLImageElement;
        this.zoomRange = document.getElementById("range") as HTMLInputElement;
        this.rangeInput2 = document.getElementById("range2") as HTMLInputElement;
        this.rotateImage = document.getElementById("range3") as HTMLInputElement;
        this.switchButton.addEventListener("click", this.toggleLight.bind(this));
        this.rangeInput2.addEventListener("input", this.updateOpacity.bind(this));
        this.zoomRange.addEventListener("input", this.zoom.bind(this));
        this.rotateImage.addEventListener("input", this.rotate.bind(this));
    }

    private toggleLight() {
        if (this.ligthImage.src.includes("on.jpg")) {
            this.ligthImage.src = "images/off.jpg";
            this.switchButton.innerHTML = '<img src="images/boff.jpg" alt="switchOff">';
        } else {
            this.ligthImage.src = "images/on.jpg";
            this.switchButton.innerHTML = '<img src="images/bon.jpg" alt="switchOn">';
        }
    }

    private updateOpacity() {
        const value = parseFloat(this.rangeInput2.value);
        const opacity = value / 100;
        this.ligthImage.style.opacity = opacity.toString();
    }

    private zoom() {
        const scaleValue = this.zoomRange.value;
        this.ligthImage.style.transform = `scale(${scaleValue})`;
    }

    private rotate() {
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
