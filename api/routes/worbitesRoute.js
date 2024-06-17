import { Router, json } from "express"
import WorbitesModel from "../models/Worbites.js"
import jwt from "jsonwebtoken"

const worbiteRouter = Router()
const jwtSecret=process.env.JWT_KEY



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

// Adds new worbite
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
    } catch(error) {
        res.json(error.message)
    }
})

// Delete Worbite
worbiteRouter.delete('/:worbite',async(req,res)=>{
    const{token}=req.cookies
    const{worbite}=req.params
    const worbiteParam = worbite[0].toUpperCase() + worbite.slice(1)
    if(!token){
        res.json('Token does not exist, please log in')
        return
    }
    try {
        jwt.verify(
            token,jwtSecret,{},async(err,verifiedToken)=>{
                if(err){
                    res.json(err.message)
                    return
                }
                const{id}=verifiedToken
                // deleteOne does not throw an error if no document is found. Use The returned objects property of deletedCount instead
                const {deletedCount} = await WorbitesModel.deleteOne({worbite:worbiteParam,addedBy:id})
                deletedCount === 1 ? res.json('Worbite deleted') : res.json('No Worbite found')
            }
        )
    } catch (error) {
        res.json(error.message)
    }
})

export default worbiteRouter