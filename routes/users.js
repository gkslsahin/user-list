var express = require('express');
var router = express.Router();


var mongoose = require("mongoose");
var User = mongoose.model("User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("list");
});

router.get("/create",function(req,res,next){
  res.render("create");
})

router.post("/create",function(req,res,next){

   new User({
     name : req.body.name,
     lastname : req.body.lastname,
     birth : req.body.birth,
     email : req.body.email
   }).save(function(error,comment){

    res.redirect("/users");

   })





 
})

router.get("/delete/:id",function(req,res,next){
  res.send("data deleted...");
})

module.exports = router;
