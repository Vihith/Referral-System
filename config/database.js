const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect( 'mongodb://localhost:27017/referral', {useNewUrlParser : true, useUnifiedTopology : true  } )
.then( () => console.log('Connected to Database'))
.catch( () => console.log('Error connecting Database!'))

module.exports = mongoose