const express=require("express")
// port number
const Port =3000
//connection for the database
const connectDB =require("./src/config/database")
//mapping the routes in the server files 
const restaurants=require("./src/Routes/Restaurant")
//create the server 
const app=express()
app.use(express.json())
app.use("/restaurants",restaurants)
//database connection
connectDB()
app.listen(Port,()=>{
  console.log(`the server is connected at ${Port}`)  
})