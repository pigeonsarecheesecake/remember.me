import { Router } from "express";
import OpenAI from 'openai'
// import verifyToken from "../middlewares/verifyToken";

const openAiRouter = Router()
const openai = new OpenAI({apiKey:process.env.OPENAI_KEY})

openAiRouter.post('/',async (req,res)=>{
    const {example,pos,worbite} = req.body
    let partOfSpeech;
    switch(pos){
        case 'a.':
        partOfSpeech= 'bg-adjective'
        break
        case 'adv.':
        partOfSpeech='bg-adverb'
        break
        case 'conj.':
        partOfSpeech='bg-conjunction'
        break
        case 'interj.':
        partOfSpeech='bg-interjection'
        break  
        case 'n.':
        partOfSpeech='bg-noun'
        break
        case 'prep.':
        partOfSpeech='bg-preposition'
        break
        case 'pron.':
        partOfSpeech='bg-pronoun'
        break
        case 'v.':
        partOfSpeech='bg-verb'
        break
    }
    const response = await openai.chat.completions.create({
        messages: [{ 
            role: "user", 
            content: `
            Only say yes when ${worbite.toLowerCase()} exists in ${example} and is used correctly.
            Please tell me if the word ${worbite.toLowerCase()} is used correctly as a/an ${partOfSpeech.slice(3)} in this this example: "${example}".
            Your response should adhere to these following rules.
            Rule 1: First sentence is always on of these following strictly: yes, no, or missing.
            Rule 2: Second sentence is always the following conditionals:
            If ${worbite.toLowerCase()} is not used correctly, provide only the correct example using ${worbite.toLowerCase()} don't add anything else.
            If ${worbite.toLowerCase()} rule 1 is yes, only return yes. 
            If ${worbite.toLowerCase()} is not found in my input, say worbite is missing.
            Rule 3: Return answer in one line.
            ` }],
            model: "gpt-4o-mini",
        })
    res.json({message:response.choices[0].message.content})
})


export default openAiRouter