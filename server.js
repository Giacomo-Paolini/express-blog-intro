const express = require("express");
const dotenv = require('dotenv');
const controllerHome = require('./controllers/home')

dotenv.config();

const host = process.env.HOST;
const port = process.env.PORT;

const app = express();

app.use(express.static("public"));

app.get("/", controllerHome.index)

app.listen(port || 3000, () => {
    console.log(`Server running on http://${host}:${port}`)
})