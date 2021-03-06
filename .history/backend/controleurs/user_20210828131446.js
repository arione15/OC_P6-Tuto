const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(monHash => {
            const user = new User({
                email: req.body.email,
                password: monHash
            });
            user.save();
        })
        .then(() => {
            res.status(201).json({
                message: "Utilisateur ajouté !"
            })
        })
        .catch(error => res.status(400).json({
            error
        }));

};

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(!user){
                return res.status(401).json({error: 'Utilisateur non trouvé !'});
            }
            // s'il y a un user dont le email correspond alors on procède à la comparaison des hashs des mdp
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if
            })
            .catch(error => res.status(500).json({error}))
        })
        .catch(error => {
            res.status(500).json({error})
        });
}