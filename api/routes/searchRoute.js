import { Router } from "express";
import axios from 'axios'
import "dotenv/config"

const searchRouter = Router()

searchRouter.post('/',async(req,res)=>{
  const {userInput} = req.body
  try {
    const {data} = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${process.env.DICTIONARY_KEY}`)
    res.json(data)
  } catch (error) {
    res.json({message:error.message})
  }
})



export default searchRouter