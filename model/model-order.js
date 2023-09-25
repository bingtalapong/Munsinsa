// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({

  hub: {
    type: String,
    requried: true,
  },
  address: {
    type: String,
    requried: true,
    unique: true,
  },
  price: {
    type: Number,
    requried: true,
  }
});

// Create the order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
