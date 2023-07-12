const express=require('express')
const server=express()
const cors=require('cors')
server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))


server.get("/login",cors(),(req,res)=>{

})
server.get("/adminlogin",cors(),(req,res)=>{

})

const collection = require("./db2")

const admin=require("./db3")



server.post("/register",async(req,res)=>{
    const{username,email,password}=req.body

    const data={
        username:username,
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


server.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


server.post("/adminlogin",async(req,res)=>{
    const{email,password}=req.body

    try{
        const checkk=await admin.findOne({email:email})

        if(checkk){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

const logic=require('./logic')


server.listen(8000,()=>{
    console.log("docapp started...");
})




//all appointments


server.get('/allappointments',(req,res)=>{
    logic.Allappointments().then(result=>{
        res.status(result.statusCode).json(result)

    })

})

//each appointments


server.get('/eachappointment/:id',(req,res)=>{
    logic.Eachappointment(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)

    })

})



//add appointments

server.post('/bookappointment', (req, res)=>{
    logic.bookAppointment(req.body.id,
        req.body.name,
        req.body.email,
        req.body.phonenumber,
        req.body.date,).then(result =>{
        res.status(result.statusCode).json(result)

    })

})

//edit appointments

server.post('/editappointment', (req, res)=>{
    logic.editAppointment(req.body.id,
        req.body.name,
        req.body.email,
        req.body.phonenumber,
        req.body.date,).then(result =>{
        res.status(result.statusCode).json(result)

    })

})

//delete appointments

server.delete('/deleteappointment/:id',(req,res)=>{
    logic.removeAppointment(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)

    })

})




