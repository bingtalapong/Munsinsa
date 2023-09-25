// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here.

const mongoose = require("mongoose");


const shipperSchema = new mongoose.Schema({
    hubName:{
        type: String,
        enum: ["Ho Chi Minh","Hanoi","Da nang"],
        required :true,
        // unique: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 8,
        maxlength: 15,
    },
    password: {
        type: String,
        required:true,
    },
    profileImagePath: {
        type: String,
        required:true,
    },
  
  
});

const Shipper = mongoose.model('Shipper', shipperSchema);

module.exports = Shipper;