const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const myDatabaseMongoServer  = require("./config/database");

// Middleware
app.use(cors());


// Connect to the database
myDatabaseMongoServer()
// Routes
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
