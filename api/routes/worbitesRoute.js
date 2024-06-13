import { Router } from "express"
import WorbitesModel from "../models/Worbites.js"
import jwt from "jsonwebtoken"

const worbiteRouter = Router()
const jwtSecret=process.env.JWT_KEY

// Worbites routes

// Getting all worbites
worbiteRouter.get('/',async(req,res)=>{
    const {token}=req.cookies
    if(!token){
        res.json('Token does not exist, please log in')
        return
    }
    try {
        jwt.verify(
            token, jwtSecret,{},async(err,verifiedToken)=>{
                if(err){
                    res.json(err.message)
                    return
                }
                const{id}=verifiedToken
                // If worbite has been added by user, let user know
                const worbiteAdded=await WorbitesModel.find({addedBy:id})
                res.json(worbiteAdded)
            }
        )
    } catch (error) {
        res.json(error.message)
    }
})

// Ellicit id from token
worbiteRouter.post('/',async(req,res)=>{
    const {token}=req.cookies
    if(!token){
        res.json('Token does not exist, please log in')
        return
    }

    const{
        worbite,partOfSpeech,definition,
        examples,addedBy
    }=req.body

    try {
        jwt.verify(
            token, jwtSecret,{},async(err,verifiedToken)=>{
                if(err){
                    res.json(err.message)
                    return
                }
                const{id}=verifiedToken

                // If worbite has been added by user, let user know
                const worbiteAdded=await WorbitesModel.findOne({worbite:worbite,addedBy:id})
                if(worbiteAdded){
                    res.json(`Worbite: ${worbite} exists in collection`)
                    return
                }

                // If worbite is new, add it to the database
                const worbiteDoc = new WorbitesModel({
                    worbite,partOfSpeech,definition,
                    examples,addedBy,addedBy:id
                })
                await worbiteDoc.save()
                res.json('Worbite has been added!')
            }
        )
    } catch (error) {
        res.json(error.message)
    }
})

export default worbiteRouter