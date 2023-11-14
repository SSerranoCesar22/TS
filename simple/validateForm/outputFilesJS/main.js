"use strict";
var _a;
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const username = document.getElementById("username");
    const city = document.getElementById("city");
    const select = document.getElementById("select");
    const accept = document.getElementById("accept");
    const zip = document.getElementById("zip");
    // Validar que el campo "First name" no esté vacío
    if (firstname.value.trim() === "") {
        alert('The value "First name" is cannot empty.');
        event.preventDefault();
        return;
    }
    // Validar que el campo "Last name" no esté vacío
    if (lastname.value.trim() === "") {
        alert('the value "Last name" is cannot empty.');
        event.preventDefault();
        return;
    }
    // Validar que el campo "Username" no esté vacío
    if (username.value.trim() === "") {
        alert('The value "Username" is cannot empty.');
        event.preventDefault();
        return;
    }
    // Validar que el campo "Username" contenga al menos un "@" y un "."
    if (!username.value.includes("@") || !username.value.includes(".")) {
        alert('the value "Username" should content a "@" and ".".');
        event.preventDefault();
        return;
    }
    // Validar que el campo "city" no esté vacío
    if (city.value.trim() === "") {
        alert('The value "City" is cannot empty.');
        event.preventDefault();
        return;
    }
    // Validar que el campo "zip" no esté vacío
    if (zip.value.trim() === "") {
        alert('The value "Zip" is cannot empty.');
        event.preventDefault();
        return;
    }
    // Validar que el checkbox esté marcado
    if (!accept.checked) {
        alert("you should accept terms and condition.");
        event.preventDefault();
        return;
    }
    // Validar que se haya seleccionado una opción en el campo "Select"
    if (select.value === 'choose') {
        alert('you should any option in  "Select" value.');
        event.preventDefault();
    }
    console.log("formulario enviado");
});
