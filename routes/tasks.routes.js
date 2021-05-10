module.exports = app => {
    const tasks = require("../controllers/tasks.controller");
  
    const secured = (req, res, next) => {
        if (req.user) {
          return next();
        }
        req.session.returnTo = req.originalUrl;
        res.redirect("/login");
      };
    var router = require("express").Router();
  
    // // Create a new Tutorial
    router.post("/create",secured, tasks.create);
  
    // Retrieve all Tutorials
    router.get("/getAllTasks",secured, tasks.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tasks.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tasks.findOne);
  
    // // // Update a Tutorial with id
    // router.put("/update", tasks.update);
  
    // // // Delete a Tutorial with id
    // router.delete("/delete", tasks.delete);
  
    // // // Delete all Tutorials
    // router.delete("/deleteAll", tasks.deleteAll);
  
    app.use('/api/tasks', router);
  };