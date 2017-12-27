const express = require('express');
const router = express.Router();
const mongoose = require('../configs/mongoose');
const FbUser = require('../schemas/fb.user');

router.get('/info/:userID', (req, res) => {
  const FbUsers = mongoose.model('fb_users', FbUser);
  FbUsers.findOne({ facebookID: req.params.userID }, (err, user) => {
    res.send(user);
  });
});

module.exports = router;