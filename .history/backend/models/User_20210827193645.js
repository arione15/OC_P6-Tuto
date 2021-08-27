const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
email: {type: String, requiered: true, unique: true},

});