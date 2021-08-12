const express = require('express')
const router = express.Router()

//Sayfa yönlendirmeleri
router.get('/', (req, res) => {
    res.render('site/index')
})
router.get('/register', (req, res) => {
    res.render('site/register')
})
router.get('/login', (req, res) => {
    res.render('site/login')
})
router.get('/users', (req, res) => {
    res.render('site/users')
})
router.post('/register/add', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router