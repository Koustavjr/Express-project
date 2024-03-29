const express=require('express');

const friendsController=require('../controllers/friends.controllers');
const friendsRouter=express.Router();

friendsRouter.use((req,res,next)=>{
    console.log(req.ip);
    next();
});
friendsRouter.post('/',friendsController.postFriend);

friendsRouter.get('/',friendsController.getFriends);

friendsRouter.get('/:friendID',friendsController.getFriend);

module.exports=friendsRouter;