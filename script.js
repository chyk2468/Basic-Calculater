document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'Clear') {
                display.value = '';
            } else if (value === '=') {
                if (display.value.trim() !== '') {
                    try {
                        // Use eval to calculate the string expression
                        // In a production app, a custom parser is safer than eval
                        display.value = eval(display.value);
                    } catch (e) {
                        display.value = 'Error';
                    }
                }
            } else {
                // Append the button value to the display
                display.value += value;
            }
        });
    });
});
