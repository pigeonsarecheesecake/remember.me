import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from 'cors'
import "dotenv/config"
import accountRouter from "./routes/accountRoute.js"
import worbiteRouter from "./routes/worbitesRoute.js"
import wordsapiRouter from "./routes/wordsapiRoute.js"
import openAiRouter from "./routes/openAiRoute.js"

// Variables
const app = express()
const port = 3000

// Connect to database
connectDB()
async function connectDB(){
    try{
        await mongoose.connect(process.env.DB_CONNECT)
        console.log('Connected to the database')
    }catch(error){
        console.log(error.message)
    }
}

// Middlewares
// credentials true to send token
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
app.use(express.json())
app.use(cookieParser())



// Routes
app.use('/account',accountRouter)
app.use('/worbites',worbiteRouter)
app.use('/wordsapi',wordsapiRouter)
app.use('/check',openAiRouter)

// Functions
app.listen(port,()=>{console.log('Server is running')})