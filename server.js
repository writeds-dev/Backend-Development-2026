const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

//setup the express server 

const app=express()
app.use(express.json())

//array as memory to store the user datamonogdb
const user=[]
//register the user
app.post("/register",async(req,res)=>{
  const {username,password}=req.body
  const hashpassword=await bcrypt.hash(password,10)
  user.push({username,password:hashpassword})
res.send("user register")

})
//login the user
app.post("/login",async(req,res)=>{
  //-- we are getting the data from the client
  const{username,password}=req.body
  const chachaji=user.find(chachaji=>chachaji.username===username)
  if(!chachaji){
    return res.status(400).send("user not found")
  }
  const isMatch=await bcrypt.compare(password,chachaji.password)
  if(!isMatch){
    return res.status(400).send("invalid username")
  }
const token=jwt.sign({username:chachaji.username},"superkey",{expiresIn:"1h"})
res.json({token})
})

function Auth(req,res,next){
const token =req.header('Authorization')
if(!token){
  return res.status(400).send("access denied")
}
try{
  const decoded =jwt.verify(token,"superkey")
  req.chachaji=decoded  //attach user data to the request 
  next()
}catch(err)
{
  res.status(400).send("invalid token")
}
}

app.get("/protected",Auth,(req,res)=>{
  res.send("this is procted route")
})


app.listen(3000,()=>{
  console.log("server is connected")
})