import mongoose from "mongoose";

export const dbConnect=async()=>{
  try {
    if (!process.env.MONGO_DB_URL){
      console.log("Mongo db url not found");
      process.exit(1)

    }
    await mongoose.connect(`${process.env.MONGO_DB_URL}/mydb`)
    console.log("Successfully connected Mongo Db ")
    
  } catch (error) {
    console.log(" not connected Mongo Db ",error)
    process.exit(1)
    

    

    
  }

}