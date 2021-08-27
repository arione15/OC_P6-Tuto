const express = require('express');
const routeur = express.Router();
const controleurStuff


// ***************************************************** //
// *************** Créer (enregistrer) un objet **************** //
routeur.post('/', );
  
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

module.exports=routeur;

