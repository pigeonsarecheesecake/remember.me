import { Router } from "express";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import "dotenv/config"

// Router instance is a complete middleware and routing system
// Mini-app
const accountRouter = Router()

accountRouter.get('/', async(req,res)=>{
    try{
        const allUsers=await UserModel.find({})
        res.json(allUsers)
    }catch(e){
        res.json(e.message)
    }
})

// Register
accountRouter.post('/register',async(req,res)=>{
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

// Login
const jwtSecret=process.env.JWT_KEY
accountRouter.post('/login',async(req,res)=>{
    const{username,password}=req.body
    const userExists=await UserModel.findOne({username})
    // If user exists, compare the password
    if(userExists){
        const correctPassword=bcrypt.compareSync(password, userExists.password)
        if (correctPassword){
            jwt.sign(
                {
                    username:userExists.username,
                    id:userExists._id
                },jwtSecret,{}, (err,token)=>{
                    if(err){
                        res.json(err.message)
                        return
                    }
                    res.cookie('token',token).json(userExists)
                }
            )
        }else{
            res.json('Wrong Password')
        }
    }else{
        res.json('User does not exist, please create a new account')
    }
})

// Profile
accountRouter.get('/profile',async(req,res)=>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token,jwtSecret,{},async(err,userData)=>{
            if(err){
                res.json(err.message)
                return
            }
            const{name,username,_id}=await UserModel.findById(userData.id)
            res.json({name,username,_id})
        })
    }else{
        res.json('Token does not exist')
    }
})

export default accountRouter