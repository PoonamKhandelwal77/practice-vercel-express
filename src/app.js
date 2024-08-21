const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})



const path=require('path')
const userRouter=require('./routes/userRoute.js')
const itemRouter=require('./routes/itemRoute.js')

const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

const port=process.env.PORT || 8000


app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 
app.use(cookieParser())

app.use('/api/item',itemRouter)
app.use("/api/user",userRouter) 

app.get('/',(req,res)=>{
    res.send('helloo from deployment')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})



module.exports=app