const express = require('express')
const mongoose = require('./config/database')
const routes = require('./config/routes')

const app = express()
app.use(express.json())

const port = 3005

app.use('/', routes)


app.get('/', (req, res) => {
    res.json({"message": "Hello! You're in referral App."});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})