import { v2 as cloudinary} from 'cloudinary'
import fs from "fs"
import env from 'dotenv'
env.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
});

const uploadImage = async(multerFile)=>{
     try {
        if(!multerFile){
            return null;
        }
        const uploadResult = await cloudinary.uploader.upload(multerFile);
        fs.unlinkSync(multerFile)
        return uploadResult.secure_url;

     } catch (error) {
        fs.unlinkSync(multerFile);
        console.log(error);
     }

}

export default uploadImage;