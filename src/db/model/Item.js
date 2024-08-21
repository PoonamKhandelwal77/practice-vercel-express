const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    ItemId: Number,
    Name: String,

    MRP: Number,
    desc: String
})

const itemModel=new mongoose.model('Item',itemSchema)

module.exports=itemModel