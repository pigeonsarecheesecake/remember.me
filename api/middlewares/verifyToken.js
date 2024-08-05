import jwt from "jsonwebtoken"
const jwtSecret=process.env.JWT_KEY

export default function verifyToken(req,res,next){
    const {token}=req.cookies
    if(!token){
        res.status(401).json('Token does not exist, please log in')
        return
    }
    try {
        jwt.verify(
            token, jwtSecret,{},async(err,verifiedToken)=>{
                if(err){
                    res.json(err.message)
                }
                req.body.id=verifiedToken.id
                next()
            }
        )
    } catch (error) {
        res.json(error.message)
    }
}