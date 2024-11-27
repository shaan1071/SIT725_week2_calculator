const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON bodies
app.use(express.static(__dirname)); // Serve static files from the current directory

// GET route for basic calculation (addition, subtraction, multiplication, division)
app.get('/calculate', (req, res) => {
    const { num1, num2, operation } = req.query;

    // Ensure the user has provided the numbers and operation
    if (!num1 || !num2 || !operation) {
        return res.status(400).json({ error: 'Please provide num1, num2, and operation' });
    }

    let result;

    // Perform the requested operation
    switch (operation) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            if (parseFloat(num2) === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    // Send the result as a response
    res.json({ result });
});

// POST route for basic calculation (with request body)
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    if (!num1 || !num2 || !operation) {
        return res.status(400).json({ error: 'Please provide num1, num2, and operation' });
    }

    let result;

    switch (operation) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            if (parseFloat(num2) === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
