const Thing = require('../models/Thing.js');


exports.createThing=(req, res, next) => {
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
  }