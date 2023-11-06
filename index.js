const express = require('express');
const path = require('path')
const expHbs = require('express-handlebars')
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const cardRoute = require('./routes/card')
const coursesRoute = require('./routes/courses')

const server = express();

const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

server.engine('hbs', hbs.engine)
server.set('view engine', 'hbs')
server.set('views', 'pages')

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({extended:true}))
server.use('/', homeRoute)
server.use('/courses', coursesRoute)
server.use('/add', addRoute)
server.use('/card', cardRoute)



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('Server running')
})