const express = require('express');
const expHbs = require('express-handlebars')
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const coursesRoute = require('./routes/courses')

const server = express();

const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

server.engine('hbs', hbs.engine)
server.set('view engine', 'hbs')
server.set('views', 'pages')

server.use(express.static('public'))
server.use('/', homeRoute)
server.use('/courses', coursesRoute)
server.use('/add', addRoute)



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('Server running')
})