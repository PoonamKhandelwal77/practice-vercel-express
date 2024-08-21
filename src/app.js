const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})


const port=process.env.PORT || 8000

app.get('/',(req,res)=>{
    res.send('helloo from deployment')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})

module.exports=app