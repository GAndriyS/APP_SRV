const express = require('express');
const app = express();

const authentication = require('./routes/authentication.js');

app.get('/', authentication);

app.listen(3000, () => console.log('Example app listening on port 3000!'));