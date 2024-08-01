import { Router } from "express";
import OpenAI from 'openai'
// import verifyToken from "../middlewares/verifyToken";

const openAiRouter = Router()
const openai = new OpenAI({apiKey:process.env.OPENAI_KEY})

openAiRouter.post('/',async (req,res)=>{
    const {example,pos,word} = req.body
    const response = await openai.chat.completions.create({
        messages: [{ 
            role: "user", 
            content: `
            Only say yes when ${word} exists in ${example} and is used correctly.
            Please tell me if the word ${word} is used correctly as a/an ${pos} in this this example: "${example}".
            Your response should adhere to these following rules.
            Rule 1: First sentence is always on of these following strictly: yes, no, or missing.
            Rule 2: Second sentence is always the following conditionals:
            If ${word} is not used correctly, return the corrected version using ${word} don't talk to me like a human, just return the corrected version.
            If ${word} rule 1 is yes, only return yes. 
            If ${word} is not found in my input, say worbite is missing.
            Rule 3: Return answer in one line.
            ` }],
            model: "gpt-4o-mini",
        })
    res.json({message:response.choices[0].message.content})
})


export default openAiRouter