const express=require("express")

const Port =3000

const connectDB =require("./src/config/database")

const restaurants=require("./src/Routes/Restaurant")

const app=express()
app.use(express.json())
app.use("/restaurants",restaurants)
connectDB()
app.listen(Port,()=>{
  console.log(`the server is connected at ${Port}`)  
})