
const mongoose=require("mongoose")

const connectDB=async()=>{
try{
    await mongoose.connect("mongodb://localhost:27017/Backend")
    console.log("mongodb connected...")
}catch(error){
console.error("not connected ")
}
}
module.exports=connectDB