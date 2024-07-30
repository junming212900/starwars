// models/index.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'starwars.sqlite'
});

const Character = sequelize.define('Character', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    planet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shipName: {
        type: DataTypes.STRING,  // Add this line to include the ship name directly in the Character model
        allowNull: true          // This can be nullable if not every character has a ship
    }
}, {
    tableName: 'characters'
});

module.exports = { sequelize, Character };
