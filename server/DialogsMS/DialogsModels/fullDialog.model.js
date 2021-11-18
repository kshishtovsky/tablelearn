const { sequelize } = require('../../sequelize')
const { DataTypes } = require('sequelize')

const fullDialog = sequelize.define("Users", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false
});

module.exports = {
  fullDialog
}