const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
email: {type: String, requiered: true, unique: true},
password: {type: String, required: true}
});

use
module.exports=mongoose.model('User', userSchema);