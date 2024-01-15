const express=require('express');
const messagesController=require('../controllers/messages.controllers');
const messagesRouter=express.Router();
messagesRouter.get('/',messagesController.getMessages);
//messagesRouter.get('/:pic',messagesController.getPic);
messagesRouter.post('/',messagesController.postMessages);
module.exports=messagesRouter;
