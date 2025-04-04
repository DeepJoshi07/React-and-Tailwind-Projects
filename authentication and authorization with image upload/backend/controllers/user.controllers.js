import User from "../model/user.js"
import bcrypt from "bcrypt"
import addToken from '../token/token.js'
import uploadImage from '../config/cloudinary.js'

export const signup = async(req,res)=>{
    try {
        let {userName,password,email,firstName,lastName} = req.body;
        if(!userName || !password || !email || !firstName || !lastName){
            return res.status(401).json({message:"please send all details"});
        }
     
        let profileImage ;
        if(req.file){
            console.log(req.file.path)
            profileImage = await uploadImage(req.file.path);
        }

        const userExists = await User.findOne({email});

        if(userExists){
           return res.status(401).json({message:"user already exists"})
        }
        const newPass = await bcrypt.hash(password,10);

        const user = new User({
            firstName,
            lastName,
            email,
            userName,
            password:newPass,
            profileImage
        })

        const token = addToken(user.id);

        res.cookie("access",token,{
            httpOnly:true,
            sameSite:"strict",
            maxage:7 * 24 * 60 * 60 * 1000,
            secure:false
        })
         user.save();
        res.status(201).json({user})
    } catch (error) {
        console.log(error);
    }
  
}

export const login = async(req,res)=>{
    try {
        let {password,email} = req.body;
        if(!password || !email ){
            return res.status(401).json({message:"please send all details"});
        }
       
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(401).json({message:"user does not exists"})
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.status(401).json({message:"password is wrong"})
        }

        const token = addToken(user.id);

        res.cookie("access",token,{
            httpOnly:true,
            sameSite:"strict",
            maxage:7 * 24 * 60 * 60 * 1000,
            secure:false
        })
        return res.status(201).json({user})
    } catch (error) {
        console.log(error);
        
    }
}

export const logout = async(req,res)=>{
    try {
        res.clearCookie("access");
        res.status(201).json({message:"you have logged out"})
    } catch (error) {
        console.log(error);
        
    }
}

export const getUserData = async(req,res)=>{
    try {
        const userId = req.userId;
        if(!userId){
            return res.status(401).json({message:"userID does not exists"});
        }

        const user = await User.findById(userId)

        if(!user){
            return res.status(401).json({message:"user does not exists"});
        }

        return res.status(201).json({user})
    } catch (error) {
        return res.status(401).json({message:error})
    }
}