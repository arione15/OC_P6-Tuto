const express = require('express');
const routeur = express.Router();
const controleurStuff = require('../controleurs/stuff.js');
const auth = require('../middlewares/auth');

routeur.post('/', authcontroleurStuff.createThing);
routeur.get('/', authcontroleurStuff.getAllThing);
routeur.get('/:id', authcontroleurStuff.getOneThing);
routeur.put('/:id', authcontroleurStuff.modifyThing);
routeur.delete('/:id', authcontroleurStuff.deleteThing);

module.exports = routeur;