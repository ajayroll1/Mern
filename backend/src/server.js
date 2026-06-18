
// import dotenv from "dotenv";

import app from "./App.js";
import { dbConnect } from "./Database/db.js"


// dotenv.config();

const startServer = async()=>{
  try{
    await dbConnect()
    app.listen(process.env.PORT,()=>{
      console .log("the server is running on port  no ",process.env.PORT);

    })
    

  }
  catch(error){
    console.log("there is a error in starting sever",error)

  }

}
startServer()


