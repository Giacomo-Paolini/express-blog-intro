const express = require("express");
const dotenv = require('dotenv');
const controllerHome = require('./controllers/controllerHome')
const controllerPosts = require('./controllers/controllerPosts')

dotenv.config();

const host = process.env.HOST;
const port = process.env.PORT;

const app = express();

app.use(express.static("public"));

app.get("/", controllerHome.index);
app.get("/posts", controllerPosts.index);

app.listen(port || 3000, () => {
    console.log(`Server running on http://${host}:${port}`)
})

/*

Creiamo poi una rotta /posts che ritorni tramite content negotiation la lista dei post, da un array locale. Ritorniamo i dati sotto forma di json e html stampando una semplice ul.

Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato controllers/posts.js

Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

Testare le immagini scrivendo manualmente il link nel browser.
Bonus
Nel stampare la ul in html, si potrebbe inserire anche un tag img, la descrizione e la lista dei tag
Spostiamo l’array dei post in un file separato da importare poi dentro il controller
Buon lavoro!
*/