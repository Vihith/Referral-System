const express = require('express')
const router = express.Router()
const User = require('../models/user')
let voucher_codes = require('voucher-code-generator')


    // module.exports.register = async function(req, res){
    //     try{
    //         const data = req.body
    //         const user = new User(data)
    //         user.save()
    //             .then(user => {
    //             const couponCode = voucher_codes.generate({
    //                 length: 6,
    //                 count: 1,
    //                 charset : voucher_codes.charset("alphanumeric")
    //             })
    //             console.log(user)
    //             res.send(user)
    //         })
    //         .catch( err => {
    //             // console.log("Error", err)
    //             res.send(err)
    //         })
    //     }
    //     catch(error){
    //         throw error;   
    //     }
    // }

    module.exports = {
        register: async (req, res) => {
            try {
                const data = req.body
                const user = new User(data)
                const saveUser = await user.save()
                const couponCode = await voucher_codes.generate({
                    length : 6,
                    count : 1,
                    charset : voucher_codes.charset("alphanumeric")
                })
                let id = saveUser._id
                const saveCouponCode = await User.findByIdAndUpdate(id, { $set : {coupon : couponCode[0]} }, {new : true})
                console.log("LOL", saveCouponCode)
                res.send(saveCouponCode)
            } catch (error) {
                res.send(error)
            }
        }
    }
    
    
    
    
    // app.get('/register',)