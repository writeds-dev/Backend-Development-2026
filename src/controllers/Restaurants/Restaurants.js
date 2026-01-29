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

//get the data 
const getAllRestaurants=async(req,res)=>{
    try{
        const restarurant=await Restaurant.find()
        res.status(200).json({
            success:true,
            count:restarurant.length,
            data:restarurant
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error in fetching the data",
            error:error.message
        })
    }
}

//update the data

const updateRestaurant= async(req,res)=>{
    try{
        const restaurant=await Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true     
            }
        );
        if(!restaurant){
            return res.status(404).json({
                success:false,
                message:"the data is not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"data updated successfully....",
            data:restaurant
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error in fetching the data",
            error:error.message
        })
    }

}


module.exports={createRestaurant,getAllRestaurants,updateRestaurant}