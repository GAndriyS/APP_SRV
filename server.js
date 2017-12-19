const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const authentication = require('./routes/authentication.js');

app.use(bodyParser.json());
app.use('/auth', authentication);

app.listen(3000, () => console.log('Server listening on port 3000'));