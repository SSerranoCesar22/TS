const cardContainer = document.getElementById("cards")!;
const images = cardContainer.getElementsByTagName("img")!;
function cambiarImagenFront(event: MouseEvent) {
    const img = event.target as HTMLImageElement;
    if (img && img.src) {
        img.src = "images/card-front.png";
    }
}
function restaurarImagenBack(event: MouseEvent) {
    const img = event.target as HTMLImageElement;
    if (img && img.src) {
        img.src = "images/card-back.png";
    }
}
for (const img of images) {
    img.addEventListener("mouseover", cambiarImagenFront);
    img.addEventListener("mouseout", restaurarImagenBack);
}