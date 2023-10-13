"use strict";
var _a, _b, _c, _d;
const scr = document.getElementById('screen');
const numberButtons = document.querySelectorAll(".number");
const clear = document.getElementById('reset');
const del = document.getElementById('del');
const scrDel = document.querySelectorAll("#screen p");
let isSecondValue = false;
let isNegative = false;
let value1 = [];
let value2 = [];
document.addEventListener("DOMContentLoaded", function () {
    inputScreen();
});
(_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => setSymbol("+"));
(_b = document.getElementById('subtract')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => setSymbol("-"));
(_c = document.getElementById('divide')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => setSymbol("/"));
(_d = document.getElementById('multiply')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => setSymbol("X"));
function deleteLastCharacter() {
    const paragraph = scr.querySelector("p");
    if (paragraph) {
        const currentContent = paragraph.textContent || "";
        if (currentContent.length > 0) {
            paragraph.textContent = currentContent.slice(0, -1);
            if (isSecondValue) {
                value2.pop();
            }
            else {
                value1.pop();
            }
        }
    }
}
function setSymbol(symbol) {
    const paragraph = scr.querySelector("p");
    if (paragraph) {
        const currentContent = paragraph.textContent || "";
        if (currentContent.length === 0) {
            // Controla el caso de un número negativo
            if (symbol === "-") {
                paragraph.textContent = "-";
            }
        }
        else {
            paragraph.textContent = currentContent + symbol;
            isSecondValue = true; // Indica que estamos ingresando el segundo valor
        }
    }
}
function num1(number) {
    value1.push(number.toString());
}
function num2(number) {
    value2.push(number.toString());
}
function inputScreen() {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            var _a;
            const value = (_a = button.getAttribute("data-value")) !== null && _a !== void 0 ? _a : "";
            const paragraph = scr.querySelector("p");
            if (paragraph) {
                const currentContent = paragraph.textContent || "";
                const parsedValue = parseFloat(value);
                if (!isNaN(parsedValue)) {
                    paragraph.textContent = currentContent + parsedValue;
                    if (isNegative) {
                        num2(parsedValue);
                    }
                    else {
                        num1(parsedValue);
                    }
                }
            }
        });
    });
}
function cleanScreen() {
    for (const paragraph of scrDel) {
        paragraph.textContent = "";
    }
}
function concatenateAndParse(value1, value2) {
    const concatenatedValue = parseFloat(value1.join(''));
    const concatenatedValue2 = parseFloat(value2.join(''));
    return [concatenatedValue, concatenatedValue2];
}
function sum(value1, value2) {
    const [num1, num2] = concatenateAndParse(value1, value2);
    const result = num1 + num2;
    return result;
}
function sub(value1, value2) {
    const [num1, num2] = concatenateAndParse(value1, value2);
    const result = num1 - num2;
    return result;
}
function div(value1, value2) {
    const [num1, num2] = concatenateAndParse(value1, value2);
    let result;
    result = num1 / num2;
    if (num2 == 0) {
        result = "math error";
    }
    return result;
}
function multp(value1, value2) {
    const [num1, num2] = concatenateAndParse(value1, value2);
    const result = num1 * num2;
    return result;
}
function operation() {
    const resultParagraph = scr.querySelector("p");
    if (value1.length === 0 || value2.length === 0) {
        resultParagraph.textContent = "Ingrese números en ambos campos";
    }
    else {
        const operationSymbol = resultParagraph.textContent; // Obtén el símbolo del contenido del párrafo
        if (operationSymbol === "+") {
            resultParagraph.textContent = sum(value1, value2).toString();
        }
        else if (operationSymbol === "-") {
            resultParagraph.textContent = sub(value1, value2).toString();
        }
        else if (operationSymbol === "X") {
            resultParagraph.textContent = multp(value1, value2).toString();
        }
        else if (operationSymbol === "÷") {
            resultParagraph.textContent = div(value1, value2).toString();
        }
    }
}
