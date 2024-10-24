// Get references to buttons and output display
const buttons = document.querySelectorAll('.num-button');
const output = document.getElementById('output');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

// Variables to hold current expression and result
let currentInput = '';
let operator = '';
let previousInput = '';
output.textContent = 0;

// Add click event listeners to number buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //This way we can append multiple digit numbers into one string.
        currentInput += button.textContent;
        output.textContent = currentInput;
    });
});

// Add click event listeners to operators
plus.addEventListener('click', () => setOperator('+'));
minus.addEventListener('click', () => setOperator('-'));
//Check i was understanding the usage of Arrow Function well.
multiply.addEventListener('click', function() {
    setOperator('*');
});
divide.addEventListener('click', () => setOperator('/'));

// Set operator and store the first input
function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Add click event listener to the equal button to compute the result
equal.addEventListener('click', () => {
    if (currentInput === '' || previousInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    output.textContent = result;
    previousInput = '';
    //First version the currentInput was set to empty.
    //Calculator could not have "Chain" property with previous solution.
    currentInput = output.textContent;
    operator = '';
});

// Add click event listener to clear button to reset the calculator
clear.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    output.textContent = '0';
});
