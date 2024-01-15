const path=require('path');
function getMessages(req,res){
  //  res.send('<ul><li>Hello</li></ul>');
 // res.sendFile(path.join(__dirname,'..','public','images','skimountain.jpg'));
 res.render('messages',{
    title:"Friends",
    name:"Steve Jobs"
 });
}
/*function getPic(req,res)
{
   
    res.sendFile( path.join(__dirname,'..','public','skimountain.jpg'));
}*/
function postMessages(req,res){
    console.log("messages");
}

module.exports={
    getMessages,
    postMessages,
    //getPic
}