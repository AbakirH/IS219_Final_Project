module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("Task", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Task;
  };