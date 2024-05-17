const express = require("express");
const router = express.Router();

// import model
const Studentreg = require("../models/register");

//get route
router.get("/register", (req, res) => {
    res.render("studentform");
  });

//post route
router.post("/register", async (req, res) => {
    try {
      const student = new Studentreg(req.body);
      console.log(student);
      await student.save();
      res.redirect("back");
    } 
    catch (error) {
      res.status(400).send("sorry, something went wrong!");
      console.log("Error registering student", error);
    }
  
  });







module.exports = router;