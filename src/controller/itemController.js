require('../db/conn/userConn')
const itemModel=require('../db/model/Item')





const hello=async(req,res)=>{
    try {
        res.status(200).send("helloo from items page")
        console.log("helloo fron item controller");
    } catch (error) {
        console.log(error);
    }
}
const getAllItems = async () => {
    try {
        const items = await itemModel.find()
        // res.status(200).render('home',{item:items})
        // res.render('home')
        // console.log(items);
        return items
    } catch (error) {
        // res.status(400).send(error)
        return error
    }

}

const getItemById = async (req, res) => {
    try {
        const _id = req.params.id
        const items = await itemModel.findById(_id)
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send(error)
    }

}

const getItemByName = async (req, res) => {
    try {
        const item = await itemModel.find({ Name: req.params.nm })
        res.send(item)
    } catch (error) {
        console.log(error);
    }
}



const createNewItem = async (req, res) => {
    try {
        const newItem = new itemModel(req.body)
        const newregisteredItem = await newItem.save()
        res.status(201).send(newItem)
    } catch (error) {
        console.log(e);
        res.status(400).send(error)
    }
}


const updateItem = async (req, res) => {
    try {
        const _id = req.params.id
        const updatedItem = await itemModel.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(updatedItem)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}
const deleteItem = async (req, res) => {
    try {
        const _id = req.params.id
        const deletedItem = await itemModel.findByIdAndDelete(_id)
        res.status(201).send(deletedItem)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}



module.exports = {getAllItems, getItemById, getItemByName, createNewItem, updateItem ,deleteItem, hello}