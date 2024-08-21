const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    UserId: Number,
    Name: String, 
    Birthday: Date,
    Address: String,
    password:String,
    cPassword:String
})



const userModel=new mongoose.model('User',userSchema)

module.exports=userModel