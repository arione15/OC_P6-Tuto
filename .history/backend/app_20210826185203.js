const expr = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/Thing.js');

const monAppExpress = expr();

mongoose.connect('mongodb+srv://massine15:3QWciFPeHpaGVtYa@oc-p6-tuto.oiokl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


monAppExpress.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// middleware pour transformer le corps de la requête en un format utilisable
monAppExpress.use(bodyParser.json());

// *************** La route post *********************** //
monAppExpress.post('/api/stuff', (req, res, next) => {
  //console.log(req.body);
  //res.status(201).json({"message": "L'objet a été reçu !!"});

  delete req.body._id; //le frontend envoi un id mais qui ne sera pas gardé car le backend fait automoatiquement son id : donc on doit supprimer le champ id provenant du frontend
  const thing = new Thing({
    // title: req.body.title, ... on peut écrire comme ça mais avec le spread c'est plus compact
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ //Il faut toujours envoyer une réponse
      message: 'Objet enregistré !'
    }))
    .catch(error => res.status(400).json({ // raccourci pour error: error
      error
    }));
});

// La route get
monAppExpress.get('/api/stuff', (req, res, next) => {
  const stuff = [{
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = monAppExpress;