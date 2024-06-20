import { Router } from "express"
import WorbitesModel from "../models/Worbites.js"
import verifyToken from "../middlewares/verifyToken.js"

// Router
const worbiteRouter = Router()

// Middleware
worbiteRouter.use(verifyToken)

// Add a new worbite
worbiteRouter.post('/',async(req,res)=>{
    const{
        worbite,partOfSpeech,definition,
        examples,addedBy,id
    }=req.body

    try {
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
    } catch(error) {
        res.json(error.message)
    }
})

// Retrieve all worbites
worbiteRouter.get('/',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id})
        res.json(worbiteAdded)
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve a worbite
worbiteRouter.get('/:worbite',async(req,res)=>{
    const{id}=req.body
    const{worbite:worbiteParam}=req.params
    const worbiteUppercase = worbiteParam[0].toUpperCase() + worbiteParam.slice(1)
    try {
        const worbiteDoc=await WorbitesModel.findOne({worbite:worbiteUppercase,addedBy:id})
        worbiteDoc ?  res.json(worbiteDoc) : res.json("Worbite doesn't exist")
    } catch (error) {
        res.json(error.message)
    }
})

// Update Worbite's examples
worbiteRouter.put('/:worbite',async(req,res)=>{
    const{examples,id}=req.body
    const{worbite:worbiteParam}=req.params
    const worbiteUppercase = worbiteParam[0].toUpperCase() + worbiteParam.slice(1)
    try {
        // updateOne does not throw an error if no document is found. Use The returned objects property of deletedCount instead
        const {modifiedCount} = await WorbitesModel.updateOne({worbite:worbiteUppercase,addedBy:id},{examples:examples})
        modifiedCount === 1 ? res.json('Examples Updated') : res.json('No Worbite found')
    } catch (error) {
        res.json(error.message)
    }
})

// Delete Worbite
worbiteRouter.delete('/:worbite',async(req,res)=>{
    const{id}=req.body
    const{worbite:worbiteParam}=req.params
    const worbiteUppercase = worbiteParam[0].toUpperCase() + worbiteParam.slice(1)
    try {
        // deleteOne does not throw an error if no document is found. Use The returned objects property of deletedCount instead
        const {deletedCount} = await WorbitesModel.deleteOne({worbite:worbiteUppercase,addedBy:id})
        deletedCount === 1 ? res.json('Worbite deleted') : res.json('No Worbite found')
    } catch (error) {
        res.json(error.message)
    }
})

export default worbiteRouter