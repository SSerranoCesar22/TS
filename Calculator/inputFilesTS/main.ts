class Calculator {
    private scr ;
    private numberButtons;
    private decimalButton;
    private expression;
    private lastResult;
    private operatorPressed;
    constructor() {
        this.scr = document.getElementById('screen') as HTMLElement;
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

        document.getElementById('add')?.addEventListener("click", () => this.setSymbol("+"));
        document.getElementById('subtract')?.addEventListener("click", () => this.setSymbol("-"));
        document.getElementById('divide')?.addEventListener("click", () => this.setSymbol("/"));
        document.getElementById('multiply')?.addEventListener("click", () => this.setSymbol("X"));
        document.getElementById('reset')?.addEventListener("click", this.cleanScreen);
        document.getElementById('del')?.addEventListener("click", this.deleteLastCharacter);
        document.getElementById('equal')?.addEventListener("click", this.operation);

        this.decimalButton?.addEventListener("click", () => {
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

    setSymbol(symbol : string) {
        if (this.lastResult !== "") {
            this.lastResult = "";
        }

        const lastChar = this.expression.trim().slice(-1);

        if (symbol === '-' && this.isSymbol(lastChar) && lastChar !== '-') {
            this.expression += ' -';
        } else if (this.isSymbol(symbol) && this.isSymbol(lastChar)) {
            return;
        } else {
            if (symbol === "X") {
                this.expression += " * ";
            } else {
                this.expression += ` ${symbol} `;
            }
        }
        this.updateScreen();
    }

    isSymbol(char : string) {
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
                } else {
                    resultParagraph.textContent = "Error";
                    this.lastResult = "Error";
                }
            } catch (error) {
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
