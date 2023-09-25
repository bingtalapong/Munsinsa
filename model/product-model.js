
// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here.
const mongoose = require("mongoose");

// Define the product schema
const ProductSchema = new mongoose.Schema({

  id: {
    type: String,
    requried: true,
    unique: true
  },
  brand: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Hat', 'Tops', 'Shoes', 'Pants']
  },
  images: [String],
  colorOption: [String],
});




// Create the product model
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

