const express = require('express')
const router = express.Router()
const User = require('../models/user')

    module.exports.register = (req, res) => {
        const data = req.body
        const user = new User(data)
        user.save()
        .then(user => {
            console.log(user)
            res.send(user)
        })
        .catch( err => {
            // console.log("Error", err)
            res.send(err)
        })
    }
    
    
    
    
    // app.get('/register',)