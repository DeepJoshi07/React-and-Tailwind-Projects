import mongoose from "mongoose";
import env from "dotenv"
env.config();


const connectDb = async() => {
  await mongoose.connect(process.env.MONGODB_URL);

}
connectDb()
.then(()=>{
    console.log("Db is connected");
    
})
.catch(err => console.log(err));

export default connectDb;