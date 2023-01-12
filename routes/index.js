const express = require('express');
const router = express.Router();

// login/landing page
// get request

router.get('/',(req, res) => {
    res.render('login',{
        layout: 'login',
    })
})


// login/DAshboard
// get request dashboard

router.get('/dashboard',(req, res) => {
    res.render('dashboard')
})



module.exports = router