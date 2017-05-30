const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    name: {
        type: String,
        trim: true,
        minlength: 1
    }
});