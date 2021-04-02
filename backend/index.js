const express = require("express");
const cors = require("cors");
const {errors} = require('celebrate');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const routes = require('./src/Routes/index');
const router = express.Router();

app.get('/',(req,res) => {
    res.send("<h1>Bem vindo ao Urbis ToDo WebApp</h1>");
});

app.use('/',routes(router));

app.use(errors());

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado!!!");
});