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

// ***************************************************** //
// *************** Enregistrer un objet **************** //
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

// ***************************************************** //
// ************* Récupérer tous les objets ************ //
monAppExpress.get('/api/stuff', (req, res, next) => {
  Thing.find()
    .then((mesObjets)=>res.status(200).json(mesObjets))
    .catch(error=>res.status(400).json({error}));
});

// ***************************************************** //
// *************** Récupérer un seul objet ************ //
monAppExpress.get('/api/stuff/:id', (req, res, next) => {
  Thing.findOne({"_id": req.params.id})
    .then((monObjet)=>res.status(200).json(monObjet))
    .catch(error=>res.status(404).json({error}));
});

// ***************************************************** //
// *************** Modifier un objet ******************* //
monAppExpress.put('/api/stuff/:id', (req, res, next) => {
  Thing.updateOne({"_id": req.params.id}, { ...req.body, "_id": req.params})
    .then((monObjet)=>res.status(200).json(monObjet))
    .catch(error=>res.status(404).json({error}));
});

module.exports = monAppExpress;