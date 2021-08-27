const Thing = require('../models/Thing.js');


exports.createThing=(req, res, next) => {
  
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({
        message: 'Objet enregistré !'
      }))
      .catch(error => res.status(400).json({ // raccourci pour error: error
        error
      }));
  }