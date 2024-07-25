import { Router } from "express";
import OpenAI from 'openai'
// import verifyToken from "../middlewares/verifyToken";

const openAiRouter = Router()
const openai = new OpenAI({apiKey:process.env.OPENAI_KEY})

openAiRouter.post('/',async (req,res)=>{
    const worbite= 'superfluous'
    const partOfSpeech='adjective'
    const input="Its superfluous to check your job application every second"
    const response = await openai.chat.completions.create({
        messages: [{ 
            role: "user", 
            content: `
            Only say yes when ${worbite} exists in ${input} and is used correctly.
            Please tell me if the word ${worbite} is used correctly as a/an ${partOfSpeech} in this this example: "${input}".
            Your response should adhere to these following rules.
            Rule 1: First sentence is always on of these following: yes, no, or ${worbite} is missing.
            Rule 2: Second sentence is always the following conditionals:
            If ${worbite} is not used correctly, provide the correct example using ${worbite} don't add anything else.
            If ${worbite} rule 1 is yes, only return yes. 
            If ${worbite} is not found in my input, say worbite is missing.
            ` }],
            model: "gpt-4o-mini",
        })
    res.json({message:response.choices[0].message.content})
})


export default openAiRouter