import express from "express";
import mongoose, { connect } from "mongoose";
import UserModel from "./models/User.js";
import 'dotenv/config'

const app = express()
const port = 3000

run()
async function run(){
    try{
        await mongoose.connect('')
        console.log('connected')
    }catch(e){
        console.log('Failed to connect');
    }
}


app.get('/', async(req,res)=>{
    try{
        const allUsers=await UserModel.find({})
        res.json(allUsers)
    }catch(e){
        res.status(404).json(e.message)
    }
})

// app.post('/',(req,res)=>{

// })

app.listen(port,()=>{
    console.log('Server is running');
}
)