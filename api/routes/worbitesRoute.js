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
                pos:'worbites',
                count:allCount,
                backgroundColor:'bg-white',
                id:1
            },
            {
                pos:'adjectives',
                count:adjectiveCount,
                backgroundColor:'bg-adjective',
                id:2
            },
            {
                pos:'adverbs',
                count:adverbCount,
                backgroundColor:'bg-adverb',
                id:3
            },
            {
                pos:'conjunctions',
                count:conjunctionCount,
                backgroundColor:'bg-conjunction',
                id:4
            },
            {
                pos:'interjections',
                count:interjectionCount,
                backgroundColor:'bg-interjection',
                id:5
            },
            {
                pos:'nouns',
                count:nounCount,
                backgroundColor:'bg-noun',
                id:6
            },
            {
                pos:'prepositions',
                count:prepositionCount,
                backgroundColor:'bg-preposition',
                id:7
            },
            {
                pos:'pronouns',
                count:pronounCount,
                backgroundColor:'bg-pronoun',
                id:8
            },
            {
                pos:'verbs',
                count:verbCount,
                backgroundColor:'bg-verb',
                id:9
            }
            ])
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve all worbites
worbiteRouter.get('/',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id})
        const count = await WorbitesModel.countDocuments({addedBy:id})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve all adjectives
worbiteRouter.get('/adjective',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'adjective'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'adjective'})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve all adverbs
worbiteRouter.get('/adverb',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'adverb'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'adverb'})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve all conjunctions
worbiteRouter.get('/conjunction',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'conjunction'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'conjunction'})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})


// Retrieve all interjections
worbiteRouter.get('/interjection',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'interjection'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'interjection'})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})


// Retrieve all nouns
worbiteRouter.get('/noun',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'noun'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'noun'})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve all prepositions
worbiteRouter.get('/preposition',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'preposition'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'preposition'})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve all pronouns
worbiteRouter.get('/pronoun',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'pronoun'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'pronoun'})
        res.json({worbiteAdded,count})
    } catch (error) {
        res.json(error.message)
    }
})

// Retrieve all verbs
worbiteRouter.get('/verb',async(req,res)=>{
    const{id}=req.body
    try {
        const worbiteAdded=await WorbitesModel.find({addedBy:id, partOfSpeech:'verb'})
        const count = await WorbitesModel.countDocuments({addedBy:id, partOfSpeech:'verb'})
        res.json({worbiteAdded,count})
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