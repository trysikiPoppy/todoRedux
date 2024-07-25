'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {}
  }
  Todo.init(
    {
      todo: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Todo',
    },
  );
  return Todo;
};
