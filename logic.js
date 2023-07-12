const db=require('./db')

//all appointments


Allappointments=()=>{
    return db.Appointment.find().then(users=>{
         if(users){
             return {
                 status:true,
                 statusCode:200,
                 message:users
             }
         }
         else{
             return {
                 status:false,
                 statusCode:400,
                 message:'no appointments'
             }
 
         }
     })
 }

//each appointments


Eachappointment=id=>{
    return db.Appointment.findOne({id}).then(appointment=>{
         if(appointment){
             return {
                 status:true,
                 statusCode:200,
                 message:appointment
             }
         }
         else{
             return {
                 status:false,
                 statusCode:400,
                 message:'no appointments present'
             }
 
         }
     })
 }

//add appointments


bookAppointment = (id, name, email, phonenumber, date) =>{
    return db.Appointment.findOne({ id }).then(appointment=>{
         if(appointment){
             return {
                 status:false,
                 statusCode:400,
                 message: "appointment already present"
             }
         }
         else{
         const newAppointment= new db.Appointment({
                id,
                name,
                email, 
                phonenumber,
                date
            })
            newAppointment.save()
             return {
                 status:true,
                 statusCode:200,
                 message: 'new appointment added'
             }
 
         }
     })
 }

//edit appointments


editAppointment = (id, name, email, phonenumber, date) =>{
    return db.Appointment.findOne({ id }).then(appointment=>{
         if(appointment){
             appointment.name=name
             appointment.email=email
             appointment.phonenumber=phonenumber
             appointment.date=date

             appointment.save()

             return{
                status:true,
                statusCode:200,
                message: "appointment data updated"}
             }
         
         else{
         
             return {
                 status:false,
                 statusCode:400,
                 message: 'no appointment updated'}
        }
     })
 }


//delete appointments


removeAppointment=id=>{
    return db.Appointment.deleteOne({id}).then(data=>{
         if(data){
             return {
                 status:true,
                 statusCode:200,
                 message:'appointment deleted'
             }
         }
         else{
             return {
                 status:false,
                 statusCode:400,
                 message:'no appointment present'
             }
 
         }
     })
 }




module.exports={
    Allappointments,Eachappointment,
    removeAppointment,bookAppointment,editAppointment

}
