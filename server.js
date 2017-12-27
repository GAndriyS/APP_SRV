const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

const authentication = require('./routes/authentication');
const user = require('./routes/user');

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authentication);
app.use('/user', user);

app.get('/app', (req, res) => {
  res.send('Welcome ! :)');
});
app.get('/login', (req, res) => {
  res.send('Login first!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));