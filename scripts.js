let expression = "";

function clearDisplay() {
    expression = "";
    updateDisplay();
}

function appendToDisplay(value) {
    expression += value;
    updateDisplay();
}

function calculate() {
    try {
        const sanitizedExpression = sanitizeExpression(expression);
        const result = eval(sanitizedExpression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = "Erro";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = expression;
}

function sanitizeExpression(input) {
    // Use expressões regulares para remover caracteres não permitidos
    return input.replace(/[^-()\d/*+.]/g, "");
}

