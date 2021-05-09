const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("Task", {
      title: {
        type: Sequelize.STRING
      },
      owneremail: {
        type: Sequelize.STRING
      },
      ownerid: {
        type: DataTypes.INTEGER
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