import { Router, json } from "express"
import WorbitesModel from "../models/Worbites.js"
import jwt from "jsonwebtoken"

const worbiteRouter = Router()
const jwtSecret=process.env.JWT_KEY

// GET all worbites
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

// POST new worbite
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

// GET specific worbite
worbiteRouter.get('/:worbite',async(req,res)=>{
    const{token}=req.cookies
    const{worbite:worbiteParam}=req.params
    const worbiteUppercase = worbiteParam[0].toUpperCase() + worbiteParam.slice(1)
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
                const worbiteDoc=await WorbitesModel.findOne({worbite:worbiteUppercase,addedBy:id})
                worbiteDoc ?  res.json(worbiteDoc) : res.json("Worbite doesn't exist")
               
            }
        )
    } catch (error) {
        res.json(error.message)
    }
})

// PUT Worbite's examples
worbiteRouter.put('/:worbite',async(req,res)=>{
    const{token}=req.cookies
    const{worbite:worbiteParam}=req.params
    const worbiteUppercase = worbiteParam[0].toUpperCase() + worbiteParam.slice(1)
    const{examples}=req.body

    try {
        jwt.verify(
            token,jwtSecret,{},async(err,verifiedToken)=>{
                if(err){
                    res.json(err.message)
                    return
                }
                const{id}=verifiedToken
                // deleteOne does not throw an error if no document is found. Use The returned objects property of deletedCount instead
                const {modifiedCount} = await WorbitesModel.updateOne({worbite:worbiteUppercase,addedBy:id},{examples:examples})
                modifiedCount === 1 ? res.json('Examples Updated') : res.json('No Worbite found')
            }
        )
    } catch (error) {
        res.json(error.message)
    }
})

// DELETE Worbite
worbiteRouter.delete('/:worbite',async(req,res)=>{
    const{token}=req.cookies
    const{worbite:worbiteParam}=req.params
    const worbiteUppercase = worbiteParam[0].toUpperCase() + worbiteParam.slice(1)
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
                const {deletedCount} = await WorbitesModel.deleteOne({worbite:worbiteUppercase,addedBy:id})
                deletedCount === 1 ? res.json('Worbite deleted') : res.json('No Worbite found')
            }
        )
    } catch (error) {
        res.json(error.message)
    }
})

export default worbiteRouter