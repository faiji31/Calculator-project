document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.num');
    const display = document.querySelector('.value');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            } else if (value === '=') {
                if (operator && previousInput && currentInput) {
                    currentInput = eval(`${previousInput}${operator}${currentInput}`).toString();
                    display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['/', '*', '-', '+'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        currentInput = eval(`${previousInput}${operator}${currentInput}`).toString();
                    }
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
