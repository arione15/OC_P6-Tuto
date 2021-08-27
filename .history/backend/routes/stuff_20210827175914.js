const express = require('express');

const routeur = express.Router();

// ***************************************************** //
// *************** Enregistrer un objet **************** //
routeur.post('', (req, res, next) => {
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
  routeur.get('/', (req, res, next) => {
    Thing.find()
      .then((mesObjets)=>res.status(200).json(mesObjets))
      .catch(error=>res.status(400).json({error}));
  });
  
  // ***************************************************** //
  // *************** Récupérer un seul objet ************ //
  routeur.get('/:id', (req, res, next) => {
    Thing.findOne({"_id": req.params.id})
      .then((monObjet)=>res.status(200).json(monObjet))
      .catch(error=>res.status(404).json({error}));
  });
  
  // ***************************************************** //
  // *************** Modifier un objet ******************* //
  routeur.put('/:id', (req, res, next) => {
    Thing.updateOne({ "_id": req.params.id }, { ...req.body, "_id": req.params.id })
      .then(()=>{
        res.status(200).json({"message": "Objet modifié !"});
      })
      .catch(error=>res.status(404).json({error}));
  });
  
  // ***************************************************** //
  // *************** Supprimer un objet ***************** //
  routeur.delete('/:id', (req, res, next) => {
    Thing.deleteOne({ "_id": req.params.id })
      .then(()=>{
        res.status(200).json({"message": "Objet supprimé !"});
      })
      .catch(error=>res.status(400).json({error}));
  });

module.exports=

