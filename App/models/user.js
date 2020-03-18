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
    coupon : {
        type : String
    }
    
})

// userSchema.post('save', async function (next) {
//     try {
//         let user = this
//             const couponCode = await voucher_codes.generate({
//                 length: 6,
//                 count: 1,
//                 charset : voucher_codes.charset("alphanumeric")
//             })
//             console.log("Blah blah", user)
//             user.coupon = couponCode
//             console.log("Coupon", couponCode)
//             next();
//     } catch (error) {
//         throw newError(error)
//     }
// })

const User = mongoose.model('User', userSchema)

module.exports = User