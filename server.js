const express = require('express');
const app = express();

const authentication = require('./routes/authentication.js');

app.use('/auth', authentication);

app.listen(3000, () => console.log('Example app listening on port 3000!'));