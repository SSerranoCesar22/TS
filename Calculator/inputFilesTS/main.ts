const scr = document.getElementById('screen') as HTMLElement;
const numberButtons = document.querySelectorAll(".number");
const clear = document.getElementById('reset') as HTMLElement;
const del = document.getElementById('del') as HTMLElement;
const scrDel = document.querySelectorAll("#screen p");
let isSecondValue = false;
let isNegative = false;
let value1: string[] = [];
let value2: string[] = [];
document.addEventListener("DOMContentLoaded", function () {
    inputScreen();
});
document.getElementById('add')?.addEventListener("click", () => setSymbol("+"));
document.getElementById('subtract')?.addEventListener("click", () => setSymbol("-"));
document.getElementById('divide')?.addEventListener("click", () => setSymbol("/"));
document.getElementById('multiply')?.addEventListener("click", () => setSymbol("X"));
function deleteLastCharacter() {
    const paragraph = scr.querySelector("p");
    if (paragraph) {
        const currentContent = paragraph.textContent || "";
        if (currentContent.length > 0) {
            paragraph.textContent = currentContent.slice(0, -1);
            if (isSecondValue) {
                value2.pop();
            } else {
                value1.pop();
            }
        }
    }
}


function setSymbol(symbol: string) {
    const paragraph = scr.querySelector("p");
    if (paragraph) {
        const currentContent = paragraph.textContent || "";

        if (currentContent.length === 0) {
            // Controla el caso de un número negativo
            if (symbol === "-") {
                paragraph.textContent = "-";
            }
        } else {
            paragraph.textContent = currentContent + symbol;
            isSecondValue = true; // Indica que estamos ingresando el segundo valor
        }
    }
}
function num1(number: number) {
    value1.push(number.toString());
}

function num2(number: number) {
    value2.push(number.toString());
}
function inputScreen() {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value") ?? "";
            const paragraph = scr.querySelector("p");

            if (paragraph) {
                const currentContent = paragraph.textContent || "";
                const parsedValue = parseFloat(value);

                if (!isNaN(parsedValue)) {
                    paragraph.textContent = currentContent + parsedValue;

                    if (isNegative) {
                        num2(parsedValue);
                    } else {
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


function concatenateAndParse(value1: string[], value2: string[]) : [number, number] {
    const concatenatedValue = parseFloat(value1.join(''));
    const concatenatedValue2 = parseFloat(value2.join(''));
    return[concatenatedValue,concatenatedValue2];
}
function sum(value1: string[], value2 : string[]) :number{
    const [num1,num2] = concatenateAndParse(value1,value2);
    const result = num1 + num2;
    return result;
}
function sub(value1: string[], value2 : string[]) :number{
    const [num1,num2] = concatenateAndParse(value1,value2);
    const  result = num1 - num2;
    return result;
}
function div(value1: string[], value2 : string[]) :number | string{
    const [num1,num2] = concatenateAndParse(value1,value2);
    let result;
    result = num1 / num2;
    if(num2 == 0){
        result = "math error";
    }
    return result;
}
function multp(value1: string[], value2 : string[]) :number{
    const [num1,num2] = concatenateAndParse(value1,value2);
    const  result = num1 * num2;
    return result;
}
function operation() {
    const resultParagraph = scr.querySelector("p")!;

    if (value1.length === 0 || value2.length === 0) {
        resultParagraph.textContent = "Ingrese números en ambos campos";
    } else {
        const operationSymbol = resultParagraph.textContent;  // Obtén el símbolo del contenido del párrafo

        if (operationSymbol === "+") {
            resultParagraph.textContent = sum(value1, value2).toString();
        } else if (operationSymbol === "-") {
            resultParagraph.textContent = sub(value1, value2).toString();
        } else if (operationSymbol === "X") {
            resultParagraph.textContent = multp(value1, value2).toString();
        } else if (operationSymbol === "÷") {
            resultParagraph.textContent = div(value1, value2).toString();
        }
    }
}

