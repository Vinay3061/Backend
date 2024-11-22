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


const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
const PORT = 3000;

// Allowed origins
const allowedOrigins = [
  'http://localhost:3001',
  'http://localhost:3000', // Frontend during development
  'https://frontend-8awn.onrender.com', // Deployed frontend
];

// Configure CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // If you need to allow cookies or authentication headers
  })
);

// Middleware for JSON parsing (if needed for POST/PUT requests)
app.use(express.json());

// Define a test route
app.get('/', (req, res) => {
  res.send('Hello, it is working!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
