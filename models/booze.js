'use strict';
module.exports = (sequelize, DataTypes) => {
  const booze = sequelize.define('booze', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    ounces: DataTypes.INTEGER
  }, {});
  booze.associate = function(models) {
    // associations can be defined here
  };
  return booze;
};