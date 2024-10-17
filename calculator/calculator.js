const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const screen = calculator.querySelector('.calculator-screen');
let currentInput = '';
let firstOperand = '';
let operator = '';
let secondOperand = '';

keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.value;

        if (!isNaN(action) || action === '.') {
            currentInput += action;
            screen.value = currentInput;
        }

        if (action === '+' || action === '-' || action === '*' || action === '/') {
            if (operator !== '') {
                firstOperand = screen.value;
                screen.value = firstOperand + action;
                operator = action;
            } else {
                firstOperand = currentInput;
                screen.value = currentInput + action;
                currentInput = '';
                operator = action;
            }
        }

        if (action === '=') {
            secondOperand = currentInput;
            let result = '';
            switch (operator) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
                default:
                    break;
            }
            screen.value = result;
            currentInput = result.toString();
            firstOperand = '';
            operator = '';
            secondOperand = '';
        }

        if (action === 'clear') {
            currentInput = '';
            firstOperand = '';
            operator = '';
            secondOperand = '';
            screen.value = '';
        }
    }
});

