const db = require("../models");
const Tasks = db.tasks;
const Op = db.Sequelize.Op;

function getTime(date){
  console.log(date);
  let today = date;
  let dd = today.getDate();

  let mm = today.getMonth()+1; 
  const yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd=`0${dd}`;
  } 

  if(mm<10) 
  {
      mm=`0${mm}`;
  } 
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  today = `${mm}-${dd}-${yyyy}` + " " +time;
  return today;
}
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  console.log(req);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const task = {
    title: req.body.task,
    owneremail: req.user.displayName,
    ownerid:1,
    message: req.body.description,
    createddate: getTime(new Date()),
    duedate: getTime(new Date(req.body.dueDate +" "+ req.body.dueTime)),
    isdone: 0
  };
  console.log(req.body.dueDate +" "+ req.body.dueTime);
  // Save Tutorial in the database
  Tasks.create(task)
    .then(data => {
      res.redirect("/api/tasks/getAllTasks");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res, next) => {
  const userProfile =  req.user;
  let condition =  { "owneremail":  req.user.displayName};
  let tasks;
  Tasks.findAll({ where: condition}  )
    .then(data => { 
      tasks = data;
      console.log(tasks, req.user);
      res.render("tasks", {
        title: "Tasks",
        userProfile, userProfile,
        tasks: tasks
      });
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
    
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tasks.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tasks.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tasks.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tasks.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tasks.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};