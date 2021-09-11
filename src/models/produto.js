const produto = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: {
            type: DataTypes.STRING
        },
        preco: {
            type: DataTypes.DOUBLE
        }
    }, {
        tablename: 'produto'
    }
    )
    return Produto
}

module.exports = produto