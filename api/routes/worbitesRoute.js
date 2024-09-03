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
        word,pos,definitions,
        examples,id
    }=req.body

    try {
        // If worbite has been added by user, let user know
        const worbiteAdded=await WorbitesModel.findOne({worbite:word,addedBy:id})
        if(worbiteAdded){
            res.json(`Worbite: ${word} exists in collection`)
            return
        }

        // If worbite is new, add it to the database
        const worbiteDoc = new WorbitesModel({
            worbite:word,partOfSpeech:pos,definition:definitions,
            examples,addedBy:id
        })
        await worbiteDoc.save()
        res.json('Worbite has been added!')
    } catch(error) {
        res.json(error.message)
    }
})

// Worbites count endpoint
worbiteRouter.get('/count',async(req,res)=>{
    const{id}=req.body
    try {
        const [ allCount, adjectiveCount, adverbCount, 
                conjunctionCount, interjectionCount, nounCount, 
                prepositionCount, pronounCount, verbCount] = await Promise.all([
            WorbitesModel.countDocuments({addedBy:id}), 
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'adjective'}),
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'adverb'}),
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'conjunction'}),
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'interjection'}),
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'noun'}),
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'preposition'}),
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'pronoun'}),
            WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'verb'})
        ])
        res.json([
            {
                pos:'worbite',
                count:allCount,
                backgroundColor:'bg-white',
                id:1
            },
            {
                pos:'adjective',
                count:adjectiveCount,
                backgroundColor:'bg-adjective',
                id:2
            },
            {
                pos:'adverb',
                count:adverbCount,
                backgroundColor:'bg-adverb',
                id:3
            },
            {
                pos:'conjunction',
                count:conjunctionCount,
                backgroundColor:'bg-conjunction',
                id:4
            },
            {
                pos:'interjection',
                count:interjectionCount,
                backgroundColor:'bg-interjection',
                id:5
            },
            {
                pos:'noun',
                count:nounCount,
                backgroundColor:'bg-noun',
                id:6
            },
            {
                pos:'preposition',
                count:prepositionCount,
                backgroundColor:'bg-preposition',
                id:7
            },
            {
                pos:'pronoun',
                count:pronounCount,
                backgroundColor:'bg-pronoun',
                id:8
            },
            {
                pos:'verb',
                count:verbCount,
                backgroundColor:'bg-verb',
                id:9
            }
            ])
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve filtered worbites
worbiteRouter.get('/:pos',async(req,res)=>{
    const{id}=req.body
    const{pos}=req.params
    try {
        let filteredWorbites
        pos === 'worbite' ? filteredWorbites=await WorbitesModel.find({addedBy:id}) : filteredWorbites=await WorbitesModel.find({addedBy:id, partOfSpeech:pos})
        const count = filteredWorbites.length
        res.json({filteredWorbites,count})
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve sorted worbites by date
worbiteRouter.get('/filter/:yearMonth',async(req,res)=>{
    const{id}=req.body
    const {yearMonth} = req.params
    const year = Number(yearMonth.slice(0,4))
    const month = Number(yearMonth.slice(5))
    try {
        const results = await WorbitesModel.find({
            addedBy:id,
            $expr:{
                $and:[
                    {$eq:[{$month:"$createdAt"},month]},
                    {$eq:[{$year:"$createdAt"},year]}
                ]
            }
        })
        res.json(results)
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