// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here.
const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
    username: {
        type: String,
        require:true,
        unique: true,
        minlength:8,
        maxlength: 15,
    },
    password: {
        type: String,
        require:true,
    },
    phoneNumber: {
        type: Number,
    },
    profileImagePath: {
        type: String
    },
    businessName: {
        type: String,
        require:true,
        minlength: 5,
        unique: true,
    },
    businessAddress: {
        type: String,
        require:true,
        minlength: 5,
        unique: true,
    }
});


const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;


