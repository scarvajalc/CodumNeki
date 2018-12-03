module.exports = function(sequelize, Sequelize) {
    var Pocket = sequelize.define('pocket', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        balance: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        }
        
 
    });
 
    return Pocket;
 
}