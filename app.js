const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
    message: String
});

// Define a model
const ExampleModel = mongoose.model('Example', exampleSchema);

// Middleware
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    try {
        // Create a new document
        const example = new ExampleModel({ message: 'Hello from MongoDB!' });
        await example.save();
        
        // Retrieve all documents
        const examples = await ExampleModel.find();
        res.json(examples);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
