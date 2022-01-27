const { Product } = require("../models/index.js");
 
module.exports = app => {
    const HELLO = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", HELLO.create);
  
    // Retrieve all Tutorials
    router.get("/", HELLO.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", HELLO.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", HELLO.findOne);
    // Update a Tutorial with id
    router.put("/:id", HELLO.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", HELLO.delete);
  
    // Delete all Tutorials
    router.delete("/", HELLO.deleteAll);
  
    app.use('/api/HELLOs', router);
  };