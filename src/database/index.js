const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/noderest')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
