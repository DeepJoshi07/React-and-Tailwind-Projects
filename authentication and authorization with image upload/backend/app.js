import express from "express"
import env from "dotenv"
import connectDb from "./config/config.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

env.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/",userRouter);


app.listen(port,()=>{
    connectDb();
    console.log(`the app is listening at port ${port}`);
    
})