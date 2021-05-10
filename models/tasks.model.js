// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("todos", {
      title: {
        type: Sequelize.STRING
      },
      owneremail: {
        type: Sequelize.STRING
      },
      ownerid: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
      isdone: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Task;
  };