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


const Restaurant=require("../../Models/Resturant")


// creating the new restaurants 
const createRestaurant=async(req,res)=>{
    try{
        const restaurant= new Restaurant(req.body)
        await restaurant.save()
        res.status(201).json({
            success:true,
            message:"restarurant added successfully",
            data:restaurant
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:"the user is not created",
            error:error.message
        })
    }
}

module.exports=createRestaurant

---------------------------------------------------------------------------
const mongoose = require("mongoose");
// mongoos.schema()
// new mongoos.schema -- schema -- class or constructor
// new --- iam creating one new object
const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [5, "minimum length will be 5"],
    },
    cuisine: {
      type: String,
      required: true,
      enum: ["Indian", "chinese", "italian", "mexican", "panjabi"],
    },
    locaitons: {
      type: String,
      city: String,
      pincode: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    isopen: {
      type: Boolean,
      default: true,
    },
    phonenumber: {
      type: String,
      required: true,
      match: [""],
    },
  },
  {
    timestamps: true, //automatically it will add and update the time in this
  }
);

const Restaurant = mongoose.model("restaurant", restaurantSchema);
//this resturant is called as on constructor function

module.exports = Restaurant;



{
                new:true,
                runValidators:true     
            } 

            run validatior will valiadte the value and match with the schema


            const express=require("express")
//with the help of this Router Part we can create the routes in the express js
const router=express.Router()
const{createRestaurant,getAllRestaurants,updateRestaurant}=require("../controllers/Restaurants/Restaurants")
router.post("/",createRestaurant)
router.get("/",getAllRestaurants)
router.put("/",updateRestaurant)



module.exports=router


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

const express =require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const app=express()
app.use(express.json())

const user=[
  {id:1,username:"dev",password:'12121212'}
]

app.post("/login",async(req,res)=>{
  const {username,password}=req.body

  //tofind the user
const users=user.find(u=>u.username===username);
if(!users) return res.status(400).send("invalid username or password")

  //match the password
  const isMatch= await bcrypt.compare(password,user.password)
  if(!isMatch) return res.status(400).send("invalid username or password")

    //jwt token 
    const token =jwt.sign({id:user.id,username:user.username},"key",{expiresIn:"1h"})
    res.json({token})
})
//protected routes 
app.get("/protected",(req,res)=>{
  const token =req.headers["authorization"]
  if(!token) return res.status(403).send("token is requried")
  
  jwt.verify(token,"key",(err,decoded)=>{
    if(err) return res.status(401).send("Invalid token")
      res.send("Protected routes")
  })
})

app.listen(3000,()=>{
  console.log("server is runinng")
})


const express =require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const app=express()
app.use(express.json())

const user=[
  {id:1,username:"dev",password:'12121212'}
]

app.post("/login",async(req,res)=>{
  const {username,password}=req.body

  //tofind the user
const users=user.find(u=>u.username===username);
if(!users) return res.status(400).send("invalid username or password")

  //match the password
  const isMatch= await bcrypt.compare(password,user.password)
  if(!isMatch) return res.status(400).send("invalid username or password")

    //hashpassword
  bcrypt.hash(password,10,(err,hashedpassword)=>{
    if(err) console.log(err)
      else console.log("hashed password",hashedpassword)
  })

    //jwt token 
    const token =jwt.sign({id:user.id,username:user.username},"key",{expiresIn:"1h"})
    res.json({token})
})
//protected routes 
app.get("/protected",(req,res)=>{
  const token =req.headers["authorization"]
  if(!token) return res.status(403).send("token is requried")
  
  jwt.verify(token,"key",(err,decoded)=>{
    if(err) return res.status(401).send("Invalid token")
      res.send("Protected routes")
  })
})

app.listen(3000,()=>{
  console.log("server is runinng")
})

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Error</title>
</head>

<body>
    <pre>Error: Illegal arguments: string, undefined<br> &nbsp; &nbsp;at _async (D:\Backend\node_modules\bcryptjs\umd\index.js:305:15)<br> &nbsp; &nbsp;at D:\Backend\node_modules\bcryptjs\umd\index.js:335:11<br> &nbsp; &nbsp;at new Promise (&lt;anonymous&gt;)<br> &nbsp; &nbsp;at Object.compare (D:\Backend\node_modules\bcryptjs\umd\index.js:334:16)<br> &nbsp; &nbsp;at D:\Backend\server.js:31:31<br> &nbsp; &nbsp;at Layer.handleRequest (D:\Backend\node_modules\router\lib\layer.js:152:17)<br> &nbsp; &nbsp;at next (D:\Backend\node_modules\router\lib\route.js:157:13)<br> &nbsp; &nbsp;at Route.dispatch (D:\Backend\node_modules\router\lib\route.js:117:3)<br> &nbsp; &nbsp;at handle (D:\Backend\node_modules\router\index.js:435:11)<br> &nbsp; &nbsp;at Layer.handleRequest (D:\Backend\node_modules\router\lib\layer.js:152:17)</pre>
</body>

</html>


const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const user = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  //password hashing

  const hashedpassword = await bcrypt.hash(password, 10);

  // create the new user
  const newuser = { id: 1, username, password: hashedpassword };
  user.push(newuser);

  res.status(201).send("user register successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //tofind the user
  const users = user.find((u) => u.username === username);
  if (!users) return res.status(400).send("invalid username or password");

  //match the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send("invalid username or password");

  //jwt token
  const token = jwt.sign({ id: user.id, username: user.username }, "key", {
    expiresIn: "1h",
  });
  res.json({ token });
});
//protected routes
app.get("/protected", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).send("token is requried");

  jwt.verify(token, "key", (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    res.send("Protected routes");
  });
});

app.listen(3000, () => {
  console.log("server is runinng");
});
