const express = require('express');
const router = express.Router();
const {ensureAuth , ensureGuest} = require('../middleware/auth')

// login/landing page
// get request

router.get('/', ensureGuest,(req, res) => {
    res.render('login',{
        layout: 'login',
    })
})


// login/DAshboard
// get request dashboard

router.get('/dashboard', ensureAuth,(req, res) => {
    res.render('dashboard')
})



module.exports = router