const User = require("../models/user")

async function getAllUsers(req , res ) { 
    const allDbUsers = await User.find({})
    res.setHeader( "MyNAME" , "NAVNEET SINGH ")
    res.json(allDbUsers)
}

async function getUserById ( req , res ) { 
    const user = await User.findById(req.params.id);
    return res.json( user ) ; 
}

async function addUser ( req , res ) { 
    const body = req.body ; 
    console.log(req.body) ; 
    if ( !body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ) { 
        return res.status( 400 ).json( { msg : "all fields are required"}) ; 

    }
    const result  =  await User.create({
        firstName : body.first_name , 
        lastName : body.last_name , 
        email : body.email , 
        gender : body.gender , 
        jobTitle : body.job_title ,
    })
    return res.status( 201 ).json({msg : "success"});
}
async function UpdateUserById ( req , res ) { 
    await User.findByIdAndUpdate(req.params.id , {lastName : "Navi" })
    return res.json({status : 'updated'})
}
async function DeleteUserById ( req , res ) { 
    await User.findByIdAndDelete(req.params.id) ;
    return res.json({status : "deleted"}) ; 
}
module.exports = { 
     getAllUsers , 
     getUserById , 
     addUser , 
     UpdateUserById , 
     DeleteUserById
}