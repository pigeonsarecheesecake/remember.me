import { Router } from "express"
import WorbitesModel from "../models/Worbites.js"


const worbiteRouter = Router()

// Worbites routes
worbiteRouter.get('/',async(req,res)=>{
    try {
        const worbites = await WorbitesModel.find({})
        res.json(worbites)
    } catch (error) {
        res.json(error.message)
    }
})

worbiteRouter.post('/',(req,res)=>{
    try {
        
    } catch (error) {
        res.json(error.message)
    }
})

export default worbiteRouter