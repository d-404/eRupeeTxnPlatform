const express = require('express')
const cors = require('cors')
const { Pool } = require('pg');
const app = express()

app.use(cors());
app.use(express.json())

const port = 5000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Users',
    password: 'root',
    port: 5432, 
  });


app.post('/register', async (req, res) => {
    const { name, email, password, balance } = req.body;
  
    try {
      const query = 'INSERT INTO users (name, email, password, balance) VALUES ($1, $2, $3, $4)';
      await pool.query(query, [name, email, password, balance]);
      res.json({ message: 'Registration successful!' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Registration failed!' });
    }
});


app.listen(port, () => {
    console.log('Server running at port ' + port)
});