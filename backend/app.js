const expr= require('express');

const monAppExpress = expr();

monAppExpress.use((req, resp, next)=>{
    console.log("Requête reçue");
    next();
});
monAppExpress.use((req, resp, next)=>{
    resp.status(201);
    next();
});
monAppExpress.use((req, resp, next)=>{
    resp.json({"message": "Youpi !!! La requête a bien été reçue !"});
    next();
});
monAppExpress.use((req, resp, next)=>{
    console.log("Réponse envoyée avec succès !");
});

module.exports = monAppExpress;