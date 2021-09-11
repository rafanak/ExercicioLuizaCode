const express = require('express');
const routers = require('./api/index'); //armazenar

const { sequelize } = require('./models/index')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

sequelize.sync().then(() =>{
    console.log('Banco conectado com sucesso');
})

app.listen(3000, function () {
    console.log("Servidor on");
});