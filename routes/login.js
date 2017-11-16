app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/admin',
  failureRedirect : '/login',
  failureFlash: true
}));
