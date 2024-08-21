const express=require('express')
const {getAllUsers, getUserById,getUserByName,createNewUser,updateUser,deleteUser } =require('../controller/userController')

const {getAllItems}=require('../controller/itemController')
const router=new express.Router()

router.route('/').get(getAllUsers)
router.route('/:id').get(getUserById)

router.route('/').post(createNewUser)
router.route('/:id').patch(updateUser)
router.route('/:id').delete(deleteUser)

router.route('/items').get(getAllItems)

module.exports=router