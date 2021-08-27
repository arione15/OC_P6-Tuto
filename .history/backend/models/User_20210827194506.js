const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
email: {type: String, requiered: true, unique: true},
password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator); // Appliquer le vaidator au schema avant d'en faire un modèle

module.exports=mongoose.model('User', userSchema);