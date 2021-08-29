const express = require('express');
const routeur = express.Router();
const controleurStuff = require('../controleurs/stuff.js');
const auth = require('../middlewares/auth');
const multer = require('middlewares/multer-config')

routeur.post('/', auth, controleurStuff.createThing);
routeur.get('/', auth, controleurStuff.getAllThing);
routeur.get('/:id', auth, controleurStuff.getOneThing);
routeur.put('/:id', auth, controleurStuff.modifyThing);
routeur.delete('/:id', auth, controleurStuff.deleteThing);

module.exports = routeur;