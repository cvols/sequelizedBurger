// creating model for sequelize
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 100]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    })

    Burger.associate = function (models) {
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: true
            }
        })
    }

    return Burger
}