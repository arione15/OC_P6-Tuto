const Thing = require('../models/Thing.js');


exports.createThing=(req, res, next) => {
  
    delete req.body._id;   doit supprimer le champ id provenant du frontend
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
  }