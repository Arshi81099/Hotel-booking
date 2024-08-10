const User = require('../models/user');

module.exports.renderSignupForm = (req, res) => {
    res.render('users/signup');
};

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login');
};

module.exports.signup = async (req, res, next) => { // Added 'next' parameter
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
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back!");
    let redirectUrl = res.locals.redirectUrl || '/listings';
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
    if(err) {          
        return next(err);
    }
    req.flash("success", "Goodbye!");
    res.redirect('/listings');
});
}