const expr= require('express');

const monAppExpress = expr(); // création d'une application express

monAppExpress.use((req, resp)=>{ //faire une requête/réponse (vers le serveur via) Express
    resp.json({"message": "Coucoule !"});
});

module.exports = monAppExpress;