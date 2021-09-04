const express =  require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/personDB'
const app = express();

mongoose.connect(url, {useNewUrlParser:true})   // to avoid the warning         //connecting the databse
 const con= mongoose.connection;                                 //to handle the databse


con.on('open',function(){                           //if database connect print a message
    console.log("databse connected..")
})

app.use(express.json())

const personRouter= require('../All Cruds/routers/persons')          //creating routers
app.use('/persons',personRouter)                           //for all the person requests, reques to personRouter
 
//listening to the server
app.listen(9000, function(){
    console.log("Server starts...")
})