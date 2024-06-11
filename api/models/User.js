import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        name:String,
        username:String,
        password:String
    }
)

const UserModel = mongoose.model('User',UserSchema)

export default UserModel