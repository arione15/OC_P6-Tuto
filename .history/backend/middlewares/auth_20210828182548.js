const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.Authorization.split(' ')[1];
        
	


    }catch(error){res.status(401).json({error: error | 'Requête non authentifiée !'})}
};