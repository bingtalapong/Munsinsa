// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here.

const mongoose = require('mongoose');

const distributionHubSchema = new mongoose.Schema({
    hubName: {
        type: String,
        enum: ["Ho Chi Minh", "Hanoi", "Da nang"],
        require: true,
        unique: true
    },
    hubAddress: {
        type: String,
        require: true,
        unique: true,
        minlength: 5,
    }
});
const DistributionHub = mongoose.model("DistributionHub", distributionHubSchema);
module.exports = DistributionHub;