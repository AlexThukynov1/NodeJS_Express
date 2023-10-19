const express = require('express');
const { listen } = require('express/lib/application');
const path = require('path');

const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})

server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'))
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('Server running')
})