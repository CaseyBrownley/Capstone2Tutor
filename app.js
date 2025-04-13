// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const PORT = 3000;

app.use(express.json());

const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);

// Example route
app.get('/', (req, res) => {
    res.send('Hello from localhost 3000!');
  });
  
  // Example POST route
  app.post('/api/users', (req, res) => {
    console.log(req.body); // logs the posted user info
    res.status(201).json({ message: 'User received!', user: req.body });
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });

mongoose.connect('mongodb://localhost:27017/user-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(3000, () => console.log("Server running on port 3000")))
.catch(error => console.log(error));

mongoose.connect('mongodb://localhost:27017/mvc-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(error => console.log(error));

  // Fetching data from an API and storing it in a variable
let apiData;

// API Call
fetch('/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20')
  .then(response => response.json())
  .then(data => {
    apiData = data; // Storing response data
    console.log(apiData); // Access the data
  })
  .catch(error => console.error('Error fetching data:', error));

