const express = require('express');
const cors = require('cors');
const processApiRequest = require('./processApiRequest');
const PORT = 8000; 

const app = express(); 

// Cors needed to make req from react app 
app.use(cors({
    origin: 'http://localhost:3000',
}));

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// end-point 
app.post('/api/data', processApiRequest);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));