const Thing = require('../models/Thing.js');


exports.createThing = (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({
            message: 'Objet enregistré !'
        }))
        .catch(error => res.status(400).json({
            error
        }));
}

exports.getAllThing = (req, res, next) => {
    Thing.find()
      .then((mesObjets)=>res.status(200).json(mesObjets))
      .catch(error=>res.status(400).json({error}));
  }

  exports.getOneThing = (req, res, next) => {
    Thing.findOne({"_id": req.params.id})
      .then((monObjet)=>res.status(200).json(monObjet))
      .catch(error=>res.status(404).json({error}));
  }

  exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ "_id": req.params.id }, { ...req.body, "_id": req.params.id })
      .then(()=>{
        res.status(200).json({"message": "Objet modifié !"});
      })
      .catch(error=>res.status(404).json({error}));
  }