const express = require("express");
const router = express.Router();

var listaProdutos = [];

router.get("/", (req, res) =>{
    res.json(listaProdutos)
})

router.post("/", (req, res) =>{
    const dadosProdutos = req.body;
    listaProdutos.push(dadosProdutos);
    res.send("Produto cadastrado com sucesso");
})

module.exports = router; 