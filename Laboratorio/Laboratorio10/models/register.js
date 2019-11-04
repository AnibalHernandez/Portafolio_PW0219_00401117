const Mongoose = require('mongoose');

const RegisterSchema = Mongoose.Schema({
    carnet: String,
    schedule: Boolean,
    isLate: Boolean,
    dateline: Date, 
});

module.exports = Mongoose.model('Register', RegisterSchema);