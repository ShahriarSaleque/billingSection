const express = require('express');
const cors = require('cors');
const PORT = 8000; 

const app = express(); 

// Cors needed to make req from react app 
app.use(cors({
    origin: 'http://localhost:3000',
}));
  

// end-point 
app.get('/api/data', (req, res) => {
    res.json({message: 'Express get end point'});
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));