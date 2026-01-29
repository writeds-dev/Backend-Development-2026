const express=require("express")
//with the help of this Router Part we can create the routes in the express js
const router=express.Router()
const{createRestaurant,getAllRestaurants,updateRestaurant}=require("../controllers/Restaurants/Restaurants")
router.post("/",createRestaurant)
router.get("/",getAllRestaurants)
//params -- based on the id 
router.put("/:id",updateRestaurant)



module.exports=router
