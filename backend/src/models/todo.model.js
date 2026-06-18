import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  task:{
    type:String,
    required:true,
    trim:true
  },
  isCompleted:{
    type:Boolean,
    default:false,
    
  },
  user:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:"User",
    required:true
  }

 

},{timestamps:true});
const Todo =mongoose.model("Todo",userSchema);



export default Todo;

