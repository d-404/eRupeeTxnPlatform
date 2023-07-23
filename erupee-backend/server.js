const express = require('express');
const app = express();
const port = 3000;
const bodyPasrser = require('body-parser');

app.use(bodyPasrser.json);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to e₹ Platform!');
});

app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const balance = req.body.balance;
    const password = req.body.password;

    res.send(`Registration request received: ${name}`);
    if(emailExists) {
        res.status(400).json({error: 'Email Id already exists!'});
    }
});