const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
mongoose.set('strictQuery', false);

 const conn=mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("successfully connected");
}).catch(e=>{
    console.log(e);
})

module.exports=conn