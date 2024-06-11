import { Router } from "express"
import WorbitesModel from "../models/Worbites.js"
import jwt from "jsonwebtoken"

const worbiteRouter = Router()
const jwtSecret=process.env.JWT_KEY

// Worbites routes
worbiteRouter.get('/',async(req,res)=>{
    try {
        const worbites = await WorbitesModel.find({})
        res.json(worbites)
    } catch (error) {
        res.json(error.message)
    }
})

// Ellicit id from token
worbiteRouter.post('/',async(req,res)=>{
    const {token}=req.cookies
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