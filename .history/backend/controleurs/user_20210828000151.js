const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(monHash=>{
    res.status(200)    
    })

    
};

exports.login = (req, res, next)=>{

};