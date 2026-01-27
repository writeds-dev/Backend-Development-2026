const mongoose=require("mongoose")
// mongoos.schema()
// new mongoos.schema -- schema -- class or constructor 
// new --- iam creating one new object 
const restaurantSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"Name is required"],
    trim:true,
    minlength:[5,"minimum length will be 5"]
},
cuisine:{
type:String,
required:true,
enum:['Indian','chinese',"italian","mexican","panjabi"]
},
locaitons:{
    type:String,
    city:String,
    pincode:String
},
rating:{
type:Number,
min:0,max:5,
default:0
},
isopen:{
type:Boolean,
default:true
},
phonenumber:{
type:String,
required:true,
match:[""]
}
},
{
   timestamps:true   //automatically it will add and update the time in this 

})

const Resturant= mongoose.model("resturant",restaurantSchema)
//this resturant is called as on constructor function 

module.exports=Resturant