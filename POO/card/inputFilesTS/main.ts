class Card {
    private cardContainer: HTMLElement;
    private images: HTMLCollectionOf<HTMLImageElement>;

    constructor() {
        this.cardContainer = document.getElementById("cards") as HTMLElement;
        this.images = this.cardContainer.getElementsByTagName("img");
        this.attachEventListeners();
    }

    private changeImageByFront(event: MouseEvent) {
        const img = event.target as HTMLImageElement;
        if (img && img.src) {
            img.src = "images/card-front.png";
        }
    }

    private rchangeImageBack(event: MouseEvent) {
        const img = event.target as HTMLImageElement;
        if (img && img.src) {
            img.src = "images/card-back.png";
        }
    }

    private attachEventListeners() {
        for (const img of this.images) {
            img.addEventListener("mouseover", this.changeImageByFront);
            img.addEventListener("mouseout", this.rchangeImageBack);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const card = new Card();
});
