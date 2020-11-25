const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    })


    return users;
}