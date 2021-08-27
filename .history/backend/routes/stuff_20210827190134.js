const express = require('express');
const routeur = express.Router();
const controleurStuff = require('backend/controleurs/stuff.js')


// ***************************************************** //
// *************** Créer (enregistrer) un objet **************** //
routeur.post('/', createThing);
  
  // ***************************************************** //
  // ************* Récupérer tous les objets ************ //
  routeur.get('/', getAllThing);
  
  // ***************************************************** //
  // *************** Récupérer un seul objet ************ //
  routeur.get('/:id', getOneThing);
  
  // ***************************************************** //
  // *************** Modifier un objet ******************* //
  routeur.put('/:id', );
  
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

