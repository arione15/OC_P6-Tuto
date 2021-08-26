const mongoose = require('mongoose');

const thingShema = mongoose.Shema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    price: {type: String, required: true},
    userId: {type: Numbre, required: true}
});

module.exports = mongoose.model('Thing', thingShema);