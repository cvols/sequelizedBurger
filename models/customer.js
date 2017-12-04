module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define('Customer', {
        customer_name: {
            type: DataTypes.STRING,
            defaultValue: false
        }
    })

    Customer.associate = function(models) {
        Customer.hasMany(models.Burger, {
            onDelete: 'cascade'
        })
    }
    
    return Customer
}