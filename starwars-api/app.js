const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Make sure this path matches the location of your Sequelize models
const characterRoutes = require('./routes/characterRoutes'); // Adjust if your file structure is different

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Basic route for home to test if API is running
app.get('/', (req, res) => {
    res.send('Star Wars API is running!');
});

// Character routes
app.use('/characters', characterRoutes);

// Setting up error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and sync the database
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log('Database connected and synced');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

