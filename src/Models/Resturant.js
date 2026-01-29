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
    },
  },
  {
    timestamps: true, 
  }
);

const Restaurant = mongoose.model("restaurant", restaurantSchema);
//this resturant is called as on constructor function

module.exports = Restaurant;

