const express =  require('express');
const person = require('../models/person');
const router= express.Router();
const Person=require('../models/person')


router.get('/', async function(req, res){                   //for all
  
    try{
            const persons=await Person.find()           //await use for to be asyncronize request
            res.json(persons)                            //to return data in Json format
    }catch(err){                                    //used try catch for error
        res.send('Error : '+err)
    }
})

router.get('/:id', async function(req, res){               //for 1 person
  
    try{
            const person=await Person.findById(req.params.id)           //await use for to be asyncronize request
            res.json(person)                            //to return data in Json format
    }catch(err){                                    //used try catch for error
        res.send('Error : '+err)
    }
})


router.post('/',async function(req, res){
    const person=new Person ({                      //creating the object
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            designation: req.body.designation
            
    })   
    
    try{
        const p1= await person.save();      //saving in the data base
        res.json(p1)
        
    }catch(err){
        res.send("Error P")
    }

})


router.patch('/:id', async function(req, res){
    try{

        const person= await Person.findById(req.params.id)          //finding what elemnt should edit
        person.firstName=req.body.firstName                         //editing the first name
        const p1= await person.save()                               //update the data base
        res.json(p1)
    }
    catch(err){
        res.send("Error in Patch "+err)
    }
})

router.delete('/:id', async function(req, res){
    try{

        const person= await Person.findById(req.params.id)          //finding what elemnt should edit
        //person.firstName=req.body.firstName                         //editing the first name
        const p1= await person.delete()                              //update the data base
        res.json(p1)
    }
    catch(err){
        res.send("Error in Patch "+err)
    }
})



module.exports = router;        //export the router to acces in app.js file