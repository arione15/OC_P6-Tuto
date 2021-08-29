const express = require('express');
const routeur = express.Router();
const controleurStuff = require('../controleurs/stuff.js');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

routeur.post('/', auth, multercontroleurStuff.createThing);
routeur.get('/', auth, multercontroleurStuff.getAllThing);
routeur.get('/:id', auth, multercontroleurStuff.getOneThing);
routeur.put('/:id', auth, multercontroleurStuff.modifyThing);
routeur.delete('/:id', auth, multercontroleurStuff.deleteThing);

module.exports = routeur;