const express =require("express")
const app=express()

app.use(express.json())

app.get("/user/:data",(req,res)=>{
    const data=req.params.data
    res.json({
        "theuser data is ": data
    })
})

app.listen(3000,()=>{
    console.log("Server is riunning")
})

route parameters
-=---------------------------------
const express=require("express")
const app=express()

//i will parse my data into json 
app.use(express.json())

//we will implement the route parameter

app.get("/user/:id",(req,res)=>{
    const userid=req.params.id
    res.json(`user id is ${userid}`)
})

app.listen(3000,()=>{
    console.log("server is running at port number")
})


const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    throw new Error("kuch to gadbad haio ra baba")
})

// error-handling middleware 
app.use((err,req,res,next)=>{
    console.error(err.stack)    // error ko log karna 
res.status(500).send("kuch to gadbad hai re abab")
next()
})



app.listen(3000,()=>{
    console.log("server is started")
})

mongodb://localhost:27017