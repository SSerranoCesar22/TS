"use strict";
const cardContainer = document.getElementById("cards");
const images = cardContainer.getElementsByTagName("img");
function cambiarImagenFront(event) {
    const img = event.target;
    if (img && img.src) {
        img.src = "images/card-front.png";
    }
}
function restaurarImagenBack(event) {
    const img = event.target;
    if (img && img.src) {
        img.src = "images/card-back.png";
    }
}
for (const img of images) {
    img.addEventListener("mouseover", cambiarImagenFront);
    img.addEventListener("mouseout", restaurarImagenBack);
}
