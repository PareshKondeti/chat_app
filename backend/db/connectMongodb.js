import mongoose from "mongoose";
import dotnev from "dotenv"
dotnev.config()
const mongodbconnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDb")
    } catch (error) {
        console.log(process.env.MONGO_URI)
        console.log("Error connecting to mongodb",error.message)
    }

}
export default  mongodbconnection;
