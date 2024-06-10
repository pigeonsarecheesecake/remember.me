import express from "express"
import mongoose from "mongoose"
import accountRouter from "./routes/account.js"
import cookieParser from "cookie-parser"
import "dotenv/config"

// Variables
const app = express()
const port = 3000

// Connect to database
connectDB()
async function connectDB(){
    try{
        await mongoose.connect(process.env.DB_CONNECT)
        console.log('Connected to the database')
    }catch(e){
        console.log(e.message)
    }
}

// Middlewares
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/account',accountRouter)

// Functions
app.listen(port,()=>{console.log('Server is running')})