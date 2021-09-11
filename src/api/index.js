const express = require("express");

const produtosRouter = require('./produtos');
const fornecedoresRouter = require('./fornecedores');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Tela inicial'); //localhost:3000/
})

router.use('/produtos', produtosRouter);
router.use('/fornecedores', fornecedoresRouter);

module.exports = router;