const express = require('express');
const router = express.Router();
const userCtrl = require('../controleurs/user.js');

router.post('./signup', userCtrl.signup);
router.post('./login')
