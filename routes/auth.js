const express = require('express');
const passport = require('passport');
const router = express.Router();

// login/ Auth wuth google
// get request

router.get('/google', passport.authenticate('google', {scope: ['profile']}))


// login/Google auth callbak
// get request auth/google/callback

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}),(req,res)=>{
    res.redirect('/dashboard')
})

//logout user
router.get('/logout', (req, res, next) => {
    req.logout((error)=>{
        if (error) {return next(error)}
        res.redirect('/')
    });  
})


module.exports = router