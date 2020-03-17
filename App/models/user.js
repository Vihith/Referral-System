const mongoose = require('mongoose')
const Schema = mongoose.Schema
let voucher_codes = require('voucher-code-generator')

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    // couponCode : {
    //     type : String
    // },
    coupon : 
    voucher_codes.generate({
        length: 8,
        count: 1,
        charset : voucher_codes.charset("alphanumeric")
    })
})


const User = mongoose.model('User', userSchema)

module.exports = User