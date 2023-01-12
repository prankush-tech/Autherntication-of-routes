const express = require('express');
const router = express.Router();

// login/landing page
// get request

router.get('/',(req, res) => {
    res.send('Login')
})


// login/DAshboard
// get request dashboard

router.get('/dashboard',(req, res) => {
    res.send('Dashboard')
})



module.exports = router