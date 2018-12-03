module.exports = function(sequelize, Sequelize) {
    var Transaction = sequelize.define('transaction', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        type: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
 
        amount: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        },

        date: {
            type: Sequelize.DATE,
            notEmpty: true
        }
        
 
    });
 
    return Transaction;
 
}