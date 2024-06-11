import mongoose from "mongoose";

const WorbitesSchema = new mongoose.Schema(
    {
        worbite:{type:String,required:true},
        partOfSpeech:{type:String,required:true},
        definition:{type:String,required:true},
        examples:{type:[String],required:true},
        addedBy:{type:mongoose.Schema.Types.ObjectId,ref:'users',required:true}
    },{timestamps:true}
)

const WorbitesModel= mongoose.model('Worbite',WorbitesSchema)
export default WorbitesModel