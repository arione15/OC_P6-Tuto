const express = require('express');
const routeur = express.Router();
const controleurStuff = require('../controleurs/stuff.js');
const auth = require('../middlewares/auth')

routeur.post('/', controleurStuff.createThing);
routeur.get('/', controleurStuff.getAllThing);
routeur.get('/:id', controleurStuff.getOneThing);
routeur.put('/:id', controleurStuff.modifyThing);
routeur.delete('/:id', controleurStuff.deleteThing);

module.exports = routeur;