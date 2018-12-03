module.exports = function(sequelize, Sequelize) {
    var Goal = sequelize.define('goal', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        date: {
            type: Sequelize.DATE,
            notEmpty: true
        },

        amount: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        },

        balance: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        }
        
 
    });
 
    return Goal;
 
}