const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
email: {type: String, requiered: true, unique: true},
password: {type: String, required: true}
});

userSchema.use(pl)

module.exports=mongoose.model('User', userSchema);