const express = require('express') ; 
const users = require('./MOCK_DATA.json')
const app = express( ) ; 
const fs = require('fs') ; 
const mongoose = require('mongoose') ; 
const { timeStamp } = require('console');
const {connectMongoDb} = require('./connection')
const userRouter = require('./routes/user')

// connection 
connectMongoDb() ; 



app.use(express.urlencoded({extended : false }))



// making custom middleware 
// it have access to req ,res objects and next function 
// app.use((req , res , next ) =>  { 
//     console.log ("Hello from middleware 1 ")  
//     next ( ) ; 
// })

// app.use((req , res , next ) =>  { 
//     console.log ("Hello from middleware 2 ")  
//     next ( ) ; 
// })

app.use("/users" , userRouter)
app.listen( 8000 , ( ) => console.log("SERVER STARTED AT PORT 8000")) ; 
