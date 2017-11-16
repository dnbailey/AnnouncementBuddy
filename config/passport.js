const LocalStrategy   = require('passport-local').Strategy;
const User = require('../models/users.js');
module.exports = function(passport) {
  passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        User.findOne({ 'local.email' :  email }, function(err, user) {
          console.log(user);
            // if (err)
            //     return done(err);
            // if (!user)
            //     return done(null, false, req.flash('loginMessage', 'No user found.'));
            // if (!user.validPassword(password))
            //     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
            // return done(null, user);
        });
    }));
}
