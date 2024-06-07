import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"

// Models
import UserModel from "./models/User.js"

import "dotenv/config"

const app = express()
const port = 3000

// Middlewares
app.use(express.json())

// Connect to database
connectDB()
async function connectDB(){
    try{
        await mongoose.connect(process.env.DB_CONNECT)
        console.log('Connected to the database')
    }catch(e){
        console.log(e.message);
    }
}

// Routes
app.get('/', async(req,res)=>{
    try{
        const allUsers=await UserModel.find({})
        res.json(allUsers)
    }catch(e){
        res.json(e.message)
    }
})

app.post('/register',async(req,res)=>{
    const bcryptSalt=bcrypt.genSaltSync(10)
    const {name,username,password}=req.body
    const usernameExists=await UserModel.exists({username})

    // Check if username exists
    if (usernameExists){
        res.json('username exists, please pick a different username')
        return
    }

    // If username doesn't exist
    try {
        const user = new UserModel({
            name,
            username,
            password:bcrypt.hashSync(password,bcryptSalt)
        })
        await user.save()
        res.json('User created')
    } catch (e) {
        res.json(e.message)
    }
})

app.post('/login',async(req,res)=>{
    const{username,password}=req.body
    const usernameExists=await UserModel.findOne({username})
    // If user exists, compare the password
    if(usernameExists){
        const correctPassword=bcrypt.compareSync(password, usernameExists.password)
        if (correctPassword){
            res.json('Logged In')
        }else{
            res.json('Wrong Password')
        }
    }else{
        res.json('User does not exist, please create a new account')
    }
})


// Functions
app.listen(port,()=>{console.log('Server is running');})