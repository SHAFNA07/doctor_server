const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/docapp')

//mongoosemodel

const Appointment=mongoose.model('Appointment',

{
    id:String,
    name:String, 
    email:String,
    phonenumber:Number,
    date:Date
})

module.exports={
    Appointment
}