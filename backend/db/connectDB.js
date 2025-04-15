import mongoose from "mongoose";

export const connectDB = async () => {   
    
    try {
        console.log("Connecting to MongoDB...");

       // console.log("Mongo_uri: ", process.env.MONGO_URI);
       const conn=  await mongoose.connect(process.env.MONGO_URI) 
        console.log(`MongoDB Connected: ${conn.connection.host}` )            
       
    } catch (error) {
        console.error("MongoDB connection error:", error.message);        
        process.exit(1);
    }
}