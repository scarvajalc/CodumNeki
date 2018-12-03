
module.exports = function(sequelize, Sequelize) {
    var Pocket = require("./pocket")(sequelize,Sequelize);
    var Goal = require("./goal")(sequelize,Sequelize);
    var Transaction = require("./transaction")(sequelize,Sequelize);
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
 
    });

    User.hasMany(Pocket);
    User.hasMany(Goal);
    User.hasMany(Transaction);
 
    return User;
 
}