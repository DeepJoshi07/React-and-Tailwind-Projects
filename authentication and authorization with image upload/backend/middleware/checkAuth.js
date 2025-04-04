import jwt from "jsonwebtoken";
import env from "dotenv"
env.config();

export const auth = async (req,res,next)=>{
    try {
        const token = req.cookies.access;
        if(!token){
            return res.send("you must log in")
        }
        let decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = decoded.id;
    } catch (error) {
       res.send("internal server error")
    }
    next();
}