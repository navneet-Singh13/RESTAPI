const express = require('express') ; 
const User = require('../models/user');
const router = express.Router( ) ; 

const { getAllUsers, getUserById, addUser, UpdateUserById, DeleteUserById } = require('../controllers/user')

router.get('/' , getAllUsers) ; 
router.get('/:id' , getUserById) ; 
router.post('/'  , addUser) ; 
router.patch('/:id' , UpdateUserById)
router.delete('/:id' , DeleteUserById )



module.exports  = router