const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for the HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/post1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'post1.html'));
});

app.get('/post2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'post2.html'));
});

app.get('/post3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'post3.html'));
});

app.get('/post4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'post4.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
