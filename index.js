const express = require ("express");
const mongoose = require ("mongoose");
const app = express();

const user = require ('./conn.js');


app.use (express.json());

async function connectDB(){
   try { 
      await mongoose.connect ('mongodb+srv://Ahmed1:123456788@startnow.qmlclaj.mongodb.net/startnow?retryWrites=true&w=majority&appName=StartNow'
)
       
      console.log ("Connected to MongoDB successfully");


    } catch (err) {
      console.log (`Sorry Ahmed No Created... ${err}`)
    }
 }
connectDB()


app.post ("/us",async (req,res) => {
    try {
      const { name, age , email , id } = req.body;
      const data = new user({ name , age , email , id });

      res.status(201).send(`User>  ${data}  <created successfully`);
      await data.save();


    } catch (err) {
        console.log (`Sorry Ahmed No Created... ${err}`)
        return res.status(401).send('Error creating user');
    }

})
app.get ("/us", async (req,res) => {
    try {
      const us = await user.find()
      res.status(200).json(`successfully Ahmed. ${us}`);


    } catch (err) {
      console.log (`Sorry Ahmed No Created... ${err}`)
      return res.status(400).send('Error retrieving users');
    }
})

app.put ("/us/:id", async (req,res) => {
    try {
      const { id } = req.params;
      const data1 = req.body;
      const us = await user.findOneAndUpdate (id , data1 , { new: true})
      res.status(200).json( { message: `User updated successfully:` , us });

    } catch (err) {
      res.status(400).json ({message: err.message});
     
    }
})
  


app.listen (3000, () => {
    console.log (`Creatad User Ahmed....`)
})