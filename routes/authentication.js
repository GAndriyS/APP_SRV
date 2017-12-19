const express = require('express');
const router = express.Router();

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const mongoose = require('../configs/mongoose');
const FbUser = require('../schemas/fb.user');

// I have some security concerns here :/
const FACEBOOK_APP_ID = 1790902114267774;
const FACEBOOK_APP_SECRET = '84e8bb9ab42f48543f51668676973d59';
const CB_URL = 'http://localhost:3000/auth/facebook/callback';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: CB_URL,
    profileFields: ['id', 'displayName', 'gender']
  },
  (accessToken, refreshToken, profile, done) => {
    /**
     * @TODO: investigate usage of FB Auth tokens
     */
    const FbUsers = mongoose.model('fb_users', FbUser);
    FbUsers.findOne({ facebookID: profile.id }, (err, user) => {
      if (!user) {
        const fbUser = new FbUsers({
          facebookID: profile.id,
          displayName: profile.displayName,
          gender: profile.gender
        });
        fbUser.save();
      }
      done(`${profile.id} ${profile.displayName} ${profile.gender}`);
    });
  }
));

router.get('/facebook', passport.authenticate('facebook', { scope: 'public_profile' }));
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