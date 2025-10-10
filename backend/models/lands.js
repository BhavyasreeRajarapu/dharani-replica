const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // link lands to users

const Land = sequelize.define('Land', {
  surveyNo: { type: DataTypes.INTEGER, allowNull: false },
  location: { type: DataTypes.STRING },
  area: { type: DataTypes.STRING }
});

// Associate land with user
Land.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Land, { foreignKey: 'userId' });

module.exports = Land;
