const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.Authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_SECRET_TOKEN');
        const userId = ecodedToken.userId;

        if(req.body.userId && req.body.userId) // Si on a un userId dans le corps de la requête et que celui-ci correspond bien 
	


    }catch(error){res.status(401).json({error: error | 'Requête non authentifiée !'})}
};