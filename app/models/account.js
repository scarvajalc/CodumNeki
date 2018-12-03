

module.exports = function(sequelize, Sequelize) {
    var User = require("./user")(sequelize, Sequelize);
    var Account = sequelize.define('account', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        number: {
            type: Sequelize.BIGINT,
            notEmpty: true
        },
 
        balance: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        }
        
 
    });

    Account.belongsTo(User);
 
    return Account;
 
}