const express = require('express');
const router = express.Router();

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// I have some security concerns here :/
const FACEBOOK_APP_ID = 1790902114267774;
const FACEBOOK_APP_SECRET = '84e8bb9ab42f48543f51668676973d59';
const CB_URL = 'http://localhost:3000/auth/facebook/callback';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: CB_URL
  },
  (accessToken, refreshToken, profile, cb) => {
    cb(profile);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.send('sucess login');
  }
);

router.get('/', (req, res) => {
  res.send('login page');
});

module.exports = router;