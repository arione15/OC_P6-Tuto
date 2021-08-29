const express = require('express');
const routeur = express.Router();
const controleurStuff = require('../controleurs/stuff.js');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');


routeur.post('/', auth, multer, controleurStuff.createThing);
routeur.get('/', auth, controleurStuff.getAllThing);
routeur.get('/:id', auth, multer, controleurStuff.getOneThing);
routeur.put('/:id', auth, multer, controleurStuff.modifyThing);
routeur.delete('/:id', auth, multer, controleurStuff.deleteThing);

module.exports = routeur;