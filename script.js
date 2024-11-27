async function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;

    const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1, num2, operation }),
    });

    const data = await response.json();
    const resultElement = document.getElementById('result');

    if (data.error) {
        resultElement.textContent = `Error: ${data.error}`;
    } else {
        resultElement.textContent = `Result: ${data.result}`;
    }
}
