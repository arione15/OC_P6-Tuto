const expr = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user')

const monAppExpress = expr();

mongoose.connect('mongodb+srv://massine15:3QWciFPeHpaGVtYa@oc-p6-tuto.oiokl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// ************************************************************************** //
// ********************* middleware pour le CORS **************************** //
monAppExpress.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// ************************************************************************** //
// middleware pour transformer le corps de la requête en un format utilisable
monAppExpress.use(bodyParser.json());

monAppExpress.use('/api/stuff/', stuffRoutes);

monAppExpress.use('/api/auth/', userRoutes);

module.exports = monAppExpress;