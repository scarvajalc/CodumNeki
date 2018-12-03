

module.exports = function(sequelize, Sequelize) {
    var User = require("./user")(sequelize, Sequelize);
    var Mattress = sequelize.define('mattress', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        balance: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        }
        
 
    });

    Mattress.belongsTo(User);
 
    return Mattress;
 
}