import { Router } from "express";
import axios from 'axios'
const wordsapiRouter = Router()

wordsapiRouter.get('/',async(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://wordsapiv1.p.rapidapi.com/words/',
        params: {random: 'true',hasDetails:'definitions'},
        headers: {
          'x-rapidapi-key': process.env.RANDOM_WORD_KEY,
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
      };
    const {data}=await axios.request(options)
    res.json(data)
})

export default wordsapiRouter