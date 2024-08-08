const express = require('express');
const router = express.Router();   
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const {saveRedirectUrl} = require('../middleware');

router.get('/signup', (req, res) => {
    res.render('users/signup');
});


router.post('/signup', wrapAsync(async (req, res, next) => { // Added 'next' parameter
    let { email, username, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => { // Changed 'res.login' to 'req.login'
        if (err) {
            return next(err);
        }
        req.flash("success", "Welcome to Wanderlust!");
        return res.redirect('/listings'); // Added return to ensure proper flow
    });
}));

router.use((err, req, res, next) => { // Error handling middleware
    req.flash("error", err.message);
    res.redirect('/signup');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login',
    saveRedirectUrl,
    passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
    async (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect(req.locals.redirectUrl);
});

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
    if(err) {          
        return next(err);
    }
    req.flash("success", "Goodbye!");
    res.redirect('/listings');
});
});

module.exports = router;