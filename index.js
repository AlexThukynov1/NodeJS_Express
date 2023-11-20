const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const expHbs = require('express-handlebars')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const cardRoute = require('./routes/card')
const coursesRoute = require('./routes/courses')
const User = require('./models/user')

const server = express();

const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

server.engine('hbs', hbs.engine)
server.set('view engine', 'hbs')
server.set('views', 'pages')

server.use( async(req, res, next) => {
    try {
        const user = await User.findById('65588f8f57aea44bd28d6833')
        req.user = user
        next()
    } catch (error) {
        console.log(error)
    }
    
})

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({extended:true}))
server.use('/', homeRoute)
server.use('/courses', coursesRoute)
server.use('/add', addRoute)
server.use('/card', cardRoute)



const PORT = process.env.PORT || 5000;
 
async function start () {
    try {
        const url = 'mongodb+srv://alexthukynov:5y6yHGPwA6KMV1IO@cluster0.xrhtaow.mongodb.net/shop'

        await mongoose.connect(url)
        server.listen(PORT, () => {
            console.log(`Server running on ${PORT} port`)
        })
        const candidate = await User.findOne()
        if(!candidate) {
            const user = new User({
                email: 'test_mail@gmail.com',
                name: 'Test Name',
                card: {items: []}
            })
            await user.save()
        }
    } catch (error) {
        console.log(Error)
    }
    
}

start()