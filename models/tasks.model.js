 const DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("todos", {
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
      createddate: {
        type: DataTypes.DATE
      },
      duedate: {
        type: DataTypes.DATE
      },
      isdone: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Task;
  };