const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,

    },
});

const FormData = mongoose.model('FormData',FormDataSchema);
module.exports = FormData;

