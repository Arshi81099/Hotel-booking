const express = require('express');
const router = express.Router();   
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const {saveRedirectUrl} = require('../middleware');

const userController = require('../controllers/users');

router.route('/signup')
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));


router.route('/login')
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), userController.login);


router.use((err, req, res, next) => { // Error handling middleware
    req.flash("error", err.message);
    res.redirect('/signup');
});

router.get('/logout', userController.logout);

module.exports = router;