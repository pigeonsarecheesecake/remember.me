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

worbiteRouter.post('/',async(req,res)=>{
    const{
        worbite,partOfSpeech,definition,
        exampleOne,exampleTwo,exampleThree,
        exampleFour, exampleFive
    }=req.body
    try {
        const worbiteDoc = new WorbitesModel({
            worbite,partOfSpeech,definition,
            exampleOne,exampleTwo,exampleThree,
            exampleFour, exampleFive
        })
        await worbiteDoc.save()
        res.json('Worbite has been added!')
    } catch (error) {
        res.json(error.message)
    }
})

export default worbiteRouter