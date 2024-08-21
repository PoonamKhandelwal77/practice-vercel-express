const express=require('express')
const { getAllItems, getItemById, getItemByName, createNewItem, updateItem ,deleteItem, hello}=require('../controller/itemController')

const router=new express.Router()

// const itemControl=new getAllItems()
// router.route('/').get(hello)
router.route('/').get(getAllItems)
router.route('/:id').get(getItemById)
// router.route('/:nm').get(getItemByName)
router.route('/').post(createNewItem)
router.route('/:id').patch(updateItem)
router.route('/:id').delete(deleteItem)
router.route('/home').get(getAllItems)


// itemControl.register(router)

module.exports=router