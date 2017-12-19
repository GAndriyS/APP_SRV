const USER_NAME = 'admin';
const USER_PW = 'admin';

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${USER_NAME}:${USER_PW}@ds159880.mlab.com:59880/app_db`, { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;