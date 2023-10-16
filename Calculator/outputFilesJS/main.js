"use strict";
var _a, _b, _c, _d, _e, _f, _g;
const scr = document.getElementById('screen');
const numberButtons = document.querySelectorAll(".number");
const decimalButton = document.querySelector(".decimal");
const clear = document.getElementById('reset');
const del = document.getElementById('del');
const scrDel = document.querySelectorAll("#screen p");
let expression = "";
let lastResult = "";
let operatorPressed = false;
document.addEventListener("DOMContentLoaded", function () {
    inputScreen();
});
window.addEventListener('keydown', function (event) {
    const key = event.key;
    switch (key) {
        case '0':
            expression += key;
            updateScreen();
            break;
        case '1':
            expression += key;
            updateScreen();
            break;
        case '2':
            expression += key;
            updateScreen();
            break;
        case '3':
            expression += key;
            updateScreen();
            break;
        case '4':
            expression += key;
            updateScreen();
            break;
        case '5':
            expression += key;
            updateScreen();
            break;
        case '6':
            expression += key;
            updateScreen();
            break;
        case '7':
            expression += key;
            updateScreen();
            break;
        case '8':
            expression += key;
            updateScreen();
            break;
        case '9':
            expression += key;
            updateScreen();
            break;
        case '.':
            expression += key;
            updateScreen();
            break;
        case '/':
            setSymbol(key);
            break;
        case '*':
            setSymbol(key);
            break;
        case '-':
            setSymbol(key);
            break;
        case '+':
            setSymbol(key);
            break;
        case 'Backspace':
            deleteLastCharacter();
        case 'Enter':
            operation();
        default:
            break;
    }
});
function inputScreen() {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (lastResult !== "") {
                expression = "";
                lastResult = "";
            }
            const value = button.getAttribute("data-value") || "";
            if (expression.length < 20) {
                expression += value;
                updateScreen();
            }
        });
    });
    decimalButton === null || decimalButton === void 0 ? void 0 : decimalButton.addEventListener("click", () => {
        if (lastResult !== "") {
            expression = "";
            lastResult = "";
        }
        if (operatorPressed) {
            expression += "0";
        }
        const components = expression.split(/([+*/-])/);
        const secondValue = components.slice(-1)[0];
        if (!secondValue.includes(".")) {
            expression += ".";
        }
        operatorPressed = false;
        updateScreen();
    });
}
function setSymbol(symbol) {
    if (lastResult !== "") {
        lastResult = "";
    }
    const lastChar = expression.trim().slice(-1);
    if (symbol === '-' && isSymbol(lastChar) && lastChar !== '-') {
        expression += ' -';
    }
    else if (isSymbol(symbol) && isSymbol(lastChar)) {
        return;
    }
    else {
        if (symbol === "X") {
            expression += " * ";
        }
        else {
            expression += ` ${symbol} `;
        }
    }
    updateScreen();
}
function isSymbol(char) {
    const symbols = ["+", "-", "X", "/"];
    return symbols.includes(char);
}
function updateScreen() {
    const paragraph = scr.querySelector("p");
    if (paragraph) {
        paragraph.textContent = expression;
    }
}
function cleanScreen() {
    expression = "";
    lastResult = "";
    updateScreen();
}
function operation() {
    const resultParagraph = scr.querySelector("p");
    if (resultParagraph) {
        try {
            const sanitizedExpression = expression.replace(/X/g, '*');
            const result = eval(sanitizedExpression);
            if (isFinite(result)) {
                resultParagraph.textContent = result.toString();
                lastResult = result.toString();
            }
            else {
                resultParagraph.textContent = "Error";
                lastResult = "Error";
            }
        }
        catch (error) {
            resultParagraph.textContent = "Error";
            lastResult = "Error";
        }
    }
}
(_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => setSymbol("+"));
(_b = document.getElementById('subtract')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => setSymbol("-"));
(_c = document.getElementById('divide')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => setSymbol("/"));
(_d = document.getElementById('multiply')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => setSymbol("X"));
(_e = document.getElementById('reset')) === null || _e === void 0 ? void 0 : _e.addEventListener("click", cleanScreen);
(_f = document.getElementById('del')) === null || _f === void 0 ? void 0 : _f.addEventListener("click", deleteLastCharacter);
(_g = document.getElementById('equal')) === null || _g === void 0 ? void 0 : _g.addEventListener("click", operation);
function deleteLastCharacter() {
    if (lastResult !== "") {
        lastResult = "";
    }
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        updateScreen();
    }
}
