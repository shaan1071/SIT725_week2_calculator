async function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    const method = document.getElementById('method').value; // GET or POST

    let url = '/calculate';
    let options = {
        method: 'POST', // Default to POST
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1, num2, operation }),
    };

    if (method === 'get') {
        // For GET request, append parameters to the URL
        url += `?num1=${num1}&num2=${num2}&operation=${operation}`;
        options = {}; // Clear options for GET
    }

    const response = await fetch(url, options);
    const data = await response.json();
    const resultElement = document.getElementById('result');

    if (data.error) {
        resultElement.textContent = `Error: ${data.error}`;
    } else {
        resultElement.textContent = `Result: ${data.result}`;
    }
}
