const monServeurNode = require('http'); // importez le package HTTP natif de Node et l'utilisez pour créer un serveur
const monAppExpress = require('./app');

//console.log("bla bla");

monAppExpress.set('port', process.env.PORT || 3000);


//const server = monServeurNode.createServer((req, res) => { //en passant une fonction qui sera exécutée à chaque appel effectué vers ce serveur. Cette fonction reçoit les objets request et response en tant qu'arguments.
//    res.end('Voilà la réponse du serveur !'); //Dans cet exemple, vous utilisez la méthode end de la réponse pour renvoyer une réponse de type string à l'appelant.
//});
const server = monServeurNode.createServer(monAppExpress); 
// monAppExpress est une fonction qui va recevoir la requête et envoyer la réponse

server.listen(process.env.PORT || 3000); /* le serveur pour qu'il écoute :
    soit la variable d'environnement du port grâce à process.env.PORT : si la plateforme de déploiement propose un port par défaut, c'est celui-ci qu'on écoutera ;
    soit le port 3000, ce qui nous servira dans le cas de notre plateforme de développement. */