const express= require('express');
const router=express.Router();
const  userscontroller=require('../controlers/userContoller')

router.get('/', userscontroller.getUsers)
router.get('/:id', userscontroller.getUser)
router.put('/:id', userscontroller.updateUser)
router.delete('/:id', userscontroller.deleteUser)
router.post('/', userscontroller.addUser)
module.exports=router