// const express = require('express');
// const { connectDB } = require('./db');
// const cors = require('cors'); // Import cors
// const driverRoutes = require('./routes/Driverroutes');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors()); // Enable CORS for all origins

// // Connect to the database
// connectDB();

// // Define routes
// app.use('/api/drivers', driverRoutes); // Base route for drivers

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express'); // Import Express
const app = express();             // Create an Express app
const PORT = 3000;                 // Define the port

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, it is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
