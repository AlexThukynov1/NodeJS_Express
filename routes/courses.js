const {Router} = require('express');
const router = Router()
const Courses = require('../models/course.js')

router.get('/', async (req, res) => {
    const courses = await Courses.find()
    res.render('courses', {
        title: 'Courses page',
        isCourses: true,
        courses
    })
})

router.get('/:id/edit', async (req, res) => {
    if(!req.query.allow) {
        return res.redirect('/')
    }

    const course = await Courses.findById(req.params.id)

    res.render('course-edit', {
        title: `Edit ${course.title}`,
        course
    })

    router.post('/edit', async (req, res) => {
        const {id} = req.body;
        delete req.body.id
        await Courses.findByIdAndUpdate(id, req.body)
        return res.redirect('/courses')
    })
})

router.post('/remove', async (req, res) => {
    try {
        await Courses.deleteOne({_id: req.body.id})
        res.redirect('/courses')
    } catch (error) {
        console.log(error)
    }
    
})

router.get('/:id',  async(req, res) => {
    const course = await Courses.findById(req.params.id)
   res.render('course', {
    layout : 'empty',
    title: `Course ${course.title}`,
    course
   }) 
})

module.exports = router