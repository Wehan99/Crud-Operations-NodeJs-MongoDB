const mongoose= require('mongoose')

const personSchema = new mongoose.Schema({                      //databse schema

    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },





})

module.exports=mongoose.model('Person',personSchema)            //exporting person scema 