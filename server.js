const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

const authentication = require('./routes/authentication.js');

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authentication);
app.get('/app', (req, res) => {
  res.send('Welcome ! :)');
});

app.listen(3000, () => console.log('Server listening on port 3000'));