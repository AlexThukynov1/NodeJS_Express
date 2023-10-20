const express = require('express');
const expHbs = require('express-handlebars')

const server = express();

const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

server.engine('hbs', hbs.engine)
server.set('view engine', 'hbs')
server.set('views', 'pages')

server.use(express.static('public'))

server.get('/', (req, res) => {
    res.render('index')
})

server.get('/about', (req, res) => {
    res.render('about')
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('Server running')
})