
const mongoose = require ('mongoose') ; 






// connection 
async function connectMongoDb ( ){ 
    return mongoose.connect('mongodb://127.0.0.1:27017/users')
.then(()=> console.log("Mongodb Connected"))
.catch(err => console.log("Mongo error ",err))
}

module.exports = { 
    connectMongoDb , 
}

