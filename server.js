const express=require("express")
const session=require("express-session")
const app=express()

app.use(session({
  secret:"123456", // this secret key we will use to sign in 
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false}
}))

app.post("/login",(req,res)=>{
  req.session.user={id:1,username:'user'}
  req.send("login")
})

app.get("/protected",(req,res)=>{
  if(req.session.user){
    res.send("this is protected route")
  }else{
    res.status(400).send("not authorized")
  }
})

app.listen(3000,()=>{
  console.log("server is running at port numnber 3000 ")
})