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
        exampleFive:String,
        addedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
    },{timestamps:true}
)

const WorbitesModel= mongoose.model('Worbite',WorbitesSchema)
export default WorbitesModel