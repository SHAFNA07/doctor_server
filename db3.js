const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/docapp')

//admin model


const newmodel=new mongoose.Schema({
    

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const admin= mongoose.model("admin",newmodel)

module.exports=admin
