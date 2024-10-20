import { Router } from "express";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import "dotenv/config"

// Router instance is a complete middleware and routing system
// Mini-app
const accountRouter = Router()
const jwtSecret=process.env.JWT_KEY

accountRouter.get('/', async(req,res)=>{
    try{
        const allUsers=await UserModel.find({})
        res.json(allUsers)
    }catch(error){
        res.json(error.message)
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
        const userDoc = new UserModel({
            name,
            username,
            password:bcrypt.hashSync(password,bcryptSalt)
        })
        await userDoc.save()
        res.json('User created')
    } catch (error) {
        res.json(error.message)
    }
})

// Login
accountRouter.post('/login',async(req,res)=>{
    const{username,password}=req.body
    // This returns user object
    const userExists=await UserModel.findOne({username})
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
            res.status(401).json({'message':'Invalid username or password'})
        }
    }else{
        res.status(401).json({'message':'Invalid username or password'})
    }
})

// Profile
accountRouter.get('/profile',async(req,res)=>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token,jwtSecret,{},async(err,verifiedToken)=>{
            if(err){
                res.json(err.message)
                return
            }
            const{name,username,_id}=await UserModel.findById(verifiedToken.id)
            res.json({name,username,_id})
        })
    }else{
        res.json(null)
    }
})


// Logout
accountRouter.post('/logout',async(req,res)=>{
    res.clearCookie('token').json('Logged Out').end()
})

// Delete Profile
accountRouter.delete('/profile',async(req,res)=>{
    const{token}=req.cookies
    if(token){
        jwt.verify(token,jwtSecret,{},async(err,verifiedToken)=>{
            if(err){
                res.json(err.message)
                return
            }
            await UserModel.findByIdAndDelete(verifiedToken.id)
            res.clearCookie('token').json('Account Deleted').end()
        })
    }else{
        res.json('Token missing, please log back in')
    }
})

export default accountRouter