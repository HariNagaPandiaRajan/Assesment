
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const HI=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", HI.create);
  
    // Retrieve all Tutorials
    
    router.get("/", HI.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", HI.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", HI.findOne);
    // Update a Tutorial with id
    router.put("/:id", HI.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", HI.delete);
  
    // Delete all Tutorials
    router.delete("/", HI.deleteAll);
  
    app.use('/api/HIs', router);
  };