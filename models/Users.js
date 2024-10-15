const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  age : {
    type : Number,
    required : true,
  },
  email : {
    type : String,
    required : true,
  }
})
const Usermodel = mongoose.model("fristmern", UserSchema)

module.exports =  Usermodel