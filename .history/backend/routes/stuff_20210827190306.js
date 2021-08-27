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
  routeur.put('/:id', modifyThing);
  
  // ***************************************************** //
  // *************** Supprimer un objet ***************** //
  routeur.delete('/:id', deleteThing);

module.exports=routeur;

