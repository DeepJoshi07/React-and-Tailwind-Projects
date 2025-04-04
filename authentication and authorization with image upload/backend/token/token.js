import jwt from "jsonwebtoken"
import env from "dotenv"
env.config();

const addToken = (id)=>{
    const token = jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"})
    return token;
}

export default addToken;