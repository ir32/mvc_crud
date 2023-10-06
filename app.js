// app.js

const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/contacts', contactRoutes);

// url http://localhost:3000/contacts/get_data
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// url http://localhost:3000/project/