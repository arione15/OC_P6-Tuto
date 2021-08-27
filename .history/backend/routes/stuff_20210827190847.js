const express = require('express');
const routeur = express.Router();
const controleurStuff = require('./controleurs/stuff.js')

routeur.post('/', createThing);
routeur.get('/', getAllThing);
routeur.get('/:id', getOneThing);
routeur.put('/:id', modifyThing);
routeur.delete('/:id', deleteThing);

module.exports = routeur;