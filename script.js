const buttons = document.querySelectorAll('button');
const display = document.querySelector('.output');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            displayValue = '';
        } else if (value === '=') {
            try {
                displayValue = eval(displayValue);
            } catch {
                displayValue = 'Error';
            }
        } else {
            displayValue += value;
        }

        display.textContent = displayValue || '0';
    });
});
