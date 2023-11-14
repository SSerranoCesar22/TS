"use strict";
const options = ["✂", "📋", "🥌"];
let playerScore = 0;
let computerScore = 0;
let playing = true;
let showingResult = false;
function scissor() {
    return "✂";
}
function paper() {
    return "📋";
}
function stone() {
    return "🥌";
}
function handleChoice(choice) {
    const resultElement = document.getElementById("resultPl");
    const resultIaElement = document.getElementById("resultIa");
    let computer;
    let playerImageSrc = "";
    let computerImageSrc = "";
    if (choice === "✂") {
        playerImageSrc = "images/scissor.webp";
    }
    else if (choice === "📋") {
        playerImageSrc = "images/paper.jpg";
    }
    else if (choice === "🥌") {
        playerImageSrc = "images/stone.png";
    }
    computer = generateRamdomChoice();
    if (computer === "✂") {
        computerImageSrc = "images/scissor.webp";
    }
    else if (computer === "📋") {
        computerImageSrc = "images/paper.jpg";
    }
    else if (computer === "🥌") {
        computerImageSrc = "images/stone.png";
    }
    resultElement.innerHTML = `<img src="${playerImageSrc}" alt="${choice}">`;
    resultIaElement.innerHTML = `<img src="${computerImageSrc}" alt="${computer}">`;
    hideHeader();
    hideRound();
    const result = determineWinner(choice, computer);
    updateScore();
    showPlay(playing);
    if (result === "win" || result === "lose") {
        showingResult = true;
        showResult();
    }
    else {
        showPlay(playing);
    }
}
function generateRamdomChoice() {
    const randomChoice = getRandomOption();
    const resultElement = document.getElementById("resultIa");
    resultElement.textContent = randomChoice;
    return randomChoice;
}
function getRandomOption() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function updateScore() {
    const sComputer = document.getElementById("scoreComputer");
    const sPlayer = document.getElementById("scorePlayer");
    sPlayer.textContent = playerScore.toString();
    sComputer.textContent = computerScore.toString();
}
function determineWinner(computer, player) {
    if (computer === player) {
        return "tie";
    }
    else if ((player === "✂" && computer === "📋") ||
        (player === "🥌" && computer === "✂") ||
        (player === "📋" && computer === "🥌")) {
        computerScore++;
        return "win";
    }
    else {
        playerScore++;
        return "lose";
    }
}
function hideHeader() {
    const hide = document.getElementById("header");
    hide.style.display = "none";
}
function hideRound() {
    const hide = document.getElementById("round");
    hide.style.display = "none";
}
function showRound() {
    const show = document.getElementById("round");
    show.style.display = "block";
}
function showResult() {
    const hide = document.getElementById("result");
    hide.style.display = "block";
}
function hideResult() {
    const hide = document.getElementById("result");
    hide.style.display = "none";
}
function showPlay(playing) {
    const show = document.getElementById("play");
    show.style.display = "block";
    showResult();
    if (!playing) {
        hideRound();
    }
}
function hidePlay() {
    const show = document.getElementById("play");
    show.style.display = "none";
}
function keepPlaying() {
    playing = true;
    showPlay(playing);
    hideResult();
    showingResult = false;
    showRound();
    const restartButton = document.getElementById("play");
    restartButton.style.display = "none";
}
function restart() {
    computerScore = 0;
    playerScore = 0;
    keepPlaying();
    const restartButton = document.getElementById("play");
    restartButton.style.display = "none";
    updateScore();
}
function leftTheGame() {
    playing = false;
    showPlay(playing);
    hideResult();
    endGame();
    showingResult = false;
    const restartButton = document.getElementById('replay');
    restartButton.style.display = 'none';
}
function endGame() {
    if (playerScore > computerScore) {
        alert("¡Congratulations the player is the winner 🔥🏆!");
    }
    else if (playerScore < computerScore) {
        alert("¡opps the computer is the winner 😭😭😭!");
    }
    else {
        alert("the game is end in tie ✖!");
    }
    alert("the game is finished 👋👋");
}
