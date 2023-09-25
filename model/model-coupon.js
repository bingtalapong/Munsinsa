// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here.


const { mongoose } = require("mongoose");

const CouponSchema = new mongoose.Schema({
  id: { type: String, required: true },
  detail: {
    type: String,
    required: true,
  },
});
const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
