require('../db/conn/userConn')
const userModel = require('../db/model/User')
const itemModel = require('../db/model/Item')
const bcrypt=require('bcrypt')
const { getAllItems } = require('./itemController')


const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        // res.status(200).render('registration')
        res.status(200).send(users)
       
    } catch (error) {
        res.status(400).send(error)
    }

}

const getUserById = async (req, res) => {
    try {
        const _id = req.params.id
        const users = await userModel.findById(_id)
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }

}

const getUserByName = async (req, res) => {
    try {
        const nm=req.params.id
        const student = await userModel.findOne({ Name: nm })
        res.send(student)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}



const createNewUser = async (req, res) => {
    try {
       
        const {
            UserId,
            Name,
            Birthday,
            Address,
            password,
            cPassword
        }=req.body
        
        
        
        if(password===cPassword){
            const salt=await bcrypt.hash(password,10)
            console.log(salt);
            
            const newUser = new userModel({
                UserId,
                Name,  
                Birthday,
                Address,
                password:salt,
                cPassword:undefined
            })
            const newregisteredUser = await newUser.save()

            const items= await itemModel.find()
            res.status(201).render('home',{item:getAllItems})
        }
        else{
            res.status(400).render('registration',{ msg:"passwords are not matched"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}


const updateUser = async (req, res) => {
    try {
        const _id = req.params.id
        const updatedUser = await userModel.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(updatedUser)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}
const deleteUser = async (req, res) => {
    try {
        const _id = req.params.id
        const deletedUser = await userModel.findByIdAndDelete(_id, req.body, {
            new: true
        })
        res.status(201).send(deletedUser)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}



module.exports = { getAllUsers, getUserById, getUserByName, createNewUser, updateUser ,deleteUser}