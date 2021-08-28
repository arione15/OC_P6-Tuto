const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = ecodedToken.userId;

        if (req.body.userId && req.body.userId !== userId) { // Si on a un userId dans le corps de la requête et que celui-ci correspond bien au userId du token
            throw 'userId non valable'; 
        } else {
            next();
        }
    } catch(error) {
        res.status(401).json({
            error: error | 'Requête non authentifiée !'
        })
    }
};

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';// throw envoi l'erreur vers le catch()
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};