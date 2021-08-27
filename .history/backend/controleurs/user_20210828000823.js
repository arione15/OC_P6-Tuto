const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(monHash=>{
        const user = new User({
            email: req.body.email, password: monHash
        });
        user.save();    
    })
    .then(()=>{res.staus})


    
};

exports.login = (req, res, next)=>{

};