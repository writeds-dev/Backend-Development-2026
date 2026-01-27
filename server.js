const express=require("express")
// port number
const Port =3000
//connection for the database
const connectDB =require("./src/config/database")
//create the server 
const app=express()
//database connection
connectDB()
app.listen(Port,()=>{
  console.log(`the server is connected at ${Port}`)  
})