"use strict";
class Calculator {
    constructor() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.scr = document.getElementById('screen');
        this.numberButtons = document.querySelectorAll(".number");
        this.decimalButton = document.querySelector(".decimal");
        this.expression = "";
        this.lastResult = "";
        this.operatorPressed = false;
        document.addEventListener("DOMContentLoaded", () => {
            this.inputScreen();
        });
        window.addEventListener('keydown', (event) => {
            const key = event.key;
            switch (key) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '.':
                    this.expression += key;
                    this.updateScreen();
                    break;
                case '/':
                case '*':
                case '-':
                case '+':
                    this.setSymbol(key);
                    break;
                case 'Backspace':
                    this.deleteLastCharacter();
                    break;
                case 'Enter':
                    this.operation();
                    break;
                default:
                    break;
            }
        });
        (_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.setSymbol("+"));
        (_b = document.getElementById('subtract')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => this.setSymbol("-"));
        (_c = document.getElementById('divide')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => this.setSymbol("/"));
        (_d = document.getElementById('multiply')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => this.setSymbol("X"));
        (_e = document.getElementById('reset')) === null || _e === void 0 ? void 0 : _e.addEventListener("click", this.cleanScreen);
        (_f = document.getElementById('del')) === null || _f === void 0 ? void 0 : _f.addEventListener("click", this.deleteLastCharacter);
        (_g = document.getElementById('equal')) === null || _g === void 0 ? void 0 : _g.addEventListener("click", this.operation);
        (_h = this.decimalButton) === null || _h === void 0 ? void 0 : _h.addEventListener("click", () => {
            if (this.lastResult !== "") {
                this.expression = "";
                this.lastResult = "";
            }
            if (this.operatorPressed) {
                this.expression += "0";
            }
            const components = this.expression.split(/([+*/-])/);
            const secondValue = components.slice(-1)[0];
            if (!secondValue.includes(".")) {
                this.expression += ".";
            }
            this.operatorPressed = false;
            this.updateScreen();
        });
    }
    inputScreen() {
        this.numberButtons.forEach(button => {
            button.addEventListener("click", () => {
                if (this.lastResult !== "") {
                    this.expression = "";
                    this.lastResult = "";
                }
                const value = button.getAttribute("data-value") || "";
                if (this.expression.length < 20) {
                    this.expression += value;
                    this.updateScreen();
                }
            });
        });
    }
    setSymbol(symbol) {
        if (this.lastResult !== "") {
            this.lastResult = "";
        }
        const lastChar = this.expression.trim().slice(-1);
        if (symbol === '-' && this.isSymbol(lastChar) && lastChar !== '-') {
            this.expression += ' -';
        }
        else if (this.isSymbol(symbol) && this.isSymbol(lastChar)) {
            return;
        }
        else {
            if (symbol === "X") {
                this.expression += " * ";
            }
            else {
                this.expression += ` ${symbol} `;
            }
        }
        this.updateScreen();
    }
    isSymbol(char) {
        const symbols = ["+", "-", "X", "/"];
        return symbols.includes(char);
    }
    updateScreen() {
        const paragraph = this.scr.querySelector("p");
        if (paragraph) {
            paragraph.textContent = this.expression;
        }
    }
    cleanScreen() {
        this.expression = "";
        this.lastResult = "";
        this.updateScreen();
    }
    operation() {
        const resultParagraph = this.scr.querySelector("p");
        if (resultParagraph) {
            try {
                const sanitizedExpression = this.expression.replace(/X/g, '*');
                const result = eval(sanitizedExpression);
                if (isFinite(result)) {
                    resultParagraph.textContent = result.toString();
                    this.lastResult = result.toString();
                }
                else {
                    resultParagraph.textContent = "Error";
                    this.lastResult = "Error";
                }
            }
            catch (error) {
                resultParagraph.textContent = "Error";
                this.lastResult = "Error";
            }
        }
    }
    deleteLastCharacter() {
        if (this.lastResult !== "") {
            this.lastResult = "";
        }
        if (this.expression.length > 0) {
            this.expression = this.expression.slice(0, -1);
            this.updateScreen();
        }
    }
}
const calculator = new Calculator();
