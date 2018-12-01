var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/user-list",{useMongoClient : false});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    lastname : String,
    birth : String,
    email : String
});

mongoose.model("User",userSchema);

module.exports = mongoose ;