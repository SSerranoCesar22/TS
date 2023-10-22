"use strict";
const submit = document.getElementById('submit');
const select = document.getElementById('select');
const searchInput = document.getElementById('searchInput');
const submitButton = document.getElementById('sea');
submit === null || submit === void 0 ? void 0 : submit.addEventListener('click', randomJoke);
function randomJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
        const jokeText = data.value;
        displayJoke(jokeText);
    })
        .catch(error => {
        console.log('error', error);
    });
}
select === null || select === void 0 ? void 0 : select.addEventListener('change', selectCategorie);
function selectCategorie() {
    const selectedCategory = select.value;
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        displayJokeByCategorie(data.value);
    })
        .catch(error => console.log('error', error));
}
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", randomJokeByKeyWord);
function randomJokeByKeyWord() {
    const query = searchInput.value.trim(); // Elimina espacios en blanco alrededor de la palabra clave
    if (query === "") {
        console.log("Por favor, ingresa una palabra clave válida.");
        return;
    }
    const apiUrl = `https://api.chucknorris.io/jokes/search?query=${query}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        // Asegúrate de que la respuesta es un objeto con un campo 'result'
        if (data.result) {
            displayJokeByKeyWord(data.result);
        }
        else {
            console.log('Respuesta inesperada de la API');
        }
    })
        .catch(error => console.log('error', error));
}
function displayJoke(jokeText) {
    const jokeContainer = document.getElementById('joke');
    if (jokeContainer) {
        jokeContainer.textContent = jokeText;
    }
}
function displayJokeByCategorie(jokeText) {
    const jokeContainer = document.getElementById('jokeCategory');
    if (jokeContainer) {
        jokeContainer.textContent = jokeText;
    }
}
function displayJokeByKeyWord(jokes) {
    const jokeContainer = document.getElementById('jokeKeyWord');
    if (jokeContainer) {
        jokeContainer.innerHTML = ""; // Limpia el contenedor
        const randomIndex = Math.floor(Math.random() * jokes.length); // Genera un índice aleatorio
        const randomJoke = jokes[randomIndex]; // Obtiene el chiste aleatorio
        const jokeItem = document.createElement('p');
        jokeItem.textContent = randomJoke.value;
        jokeContainer.appendChild(jokeItem);
    }
}
