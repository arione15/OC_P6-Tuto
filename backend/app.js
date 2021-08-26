const expr= require('express');

const monAppExpress = expr();


// Ajout du meadlware pour les headers afin de pallier aux problèmes liés à CORS : dire au navigateur "tout va bien vous pouvez utiliser cette API !"
monAppExpress.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //accéder à l'API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //ajouter des headers aux requêtes envoyées vers l'API
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  //envoyer des requêtes avec les méthodes mentionnées
  next();
});

// Route pour get de l'appli frontend
monAppExpress.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});
module.exports = monAppExpress;