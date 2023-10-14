const scr = document.getElementById('screen') as HTMLElement;
const numberButtons = document.querySelectorAll(".number");
const decimalButton = document.querySelector(".decimal");
const clear = document.getElementById('reset') as HTMLElement;
const del = document.getElementById('del') as HTMLElement;
const scrDel = document.querySelectorAll("#screen p");
let expression = "";
let lastResult = "";

document.addEventListener("DOMContentLoaded", function () {
    inputScreen();
});

function inputScreen() {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (lastResult !== "") {
                expression = "";
                lastResult = "";
            }
            const value = button.getAttribute("data-value") || "";
            expression += value;
            updateScreen();
        });
    });

    decimalButton?.addEventListener("click", () => {
        if (lastResult !== "") {
            expression = "";
            lastResult = "";
        }
        if (!expression.endsWith(".")) {
            expression += ".";
            updateScreen();
        }
    });
}

function setSymbol(symbol: string) {
    if (lastResult !== "") {
        lastResult = "";
    }
    if (symbol === "X") {
        expression += " * ";
    } else {
        expression += ` ${symbol} `;
    }
    updateScreen();
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
            } else {
                resultParagraph.textContent = "Error";
                lastResult = "Error";
            }
        } catch (error) {
            resultParagraph.textContent = "Error";
            lastResult = "Error";
        }
    }
}

document.getElementById('add')?.addEventListener("click", () => setSymbol("+"));
document.getElementById('subtract')?.addEventListener("click", () => setSymbol("-"));
document.getElementById('divide')?.addEventListener("click", () => setSymbol("/"));
document.getElementById('multiply')?.addEventListener("click", () => setSymbol("X"));
document.getElementById('reset')?.addEventListener("click", cleanScreen);
document.getElementById('del')?.addEventListener("click", deleteLastCharacter);
document.getElementById('equal')?.addEventListener("click", operation);

function deleteLastCharacter() {
    if (lastResult !== "") {
        lastResult = "";
    }
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        updateScreen();
    }
}
