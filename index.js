const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Usermodel = require('./models/Users.js')
//to connect to frontend
const cors = require('cors')
app.use(cors())
// Connect to MongoDB
mongoose.connect("mongodb+srv://fristmern:fristmern@cluster0.vbb0m.mongodb.net/fristmern")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error', err));

// Middleware to parse JSON
app.use(express.json())

// Get all users
app.get('/user', async (req, res) => {
  try {
    const result = await Usermodel.find({})
    res.json(result)
  } catch (error) {
    res.json(error)
  }
})

// Create a new user
app.post('/create', async (req, res)=>{
  const user = req.body
  const newuser = Usermodel(user)
  try{
   await newuser.save()
   res.json(user)
  } catch (err) {
 res.json('couldnot post')
  }
})

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
