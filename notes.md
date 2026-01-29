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
