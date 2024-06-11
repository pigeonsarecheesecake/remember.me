import mongoose from "mongoose";

const WorbitesSchema = new mongoose.Schema(
    {
        worbite:String,
        partOfSpeech:String,
        definition:String,
        exampleOne:String,
        exampleTwo:String,
        exampleThree:String,
        exampleFour:String,
        exampleFive:String
    },{timestamps:true}
)

const WorbitesModel= mongoose.model('Worbite',WorbitesSchema)
export default WorbitesModel