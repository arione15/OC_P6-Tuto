const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
email: {type: String, requiered: true, unique: true},
password: {type: String, required: true}
});

module.exports=mon