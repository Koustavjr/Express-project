const friends =require('../models/friends.models')
function postFriend(req,res){
    const frnd=req.body.name;
    if(!frnd)
    {
    return res.status(400).json({
            error:'Friend doesnot exist '
        });

    }
    const newFriend={
        name:frnd,
        id:friends.length
    }

    friends.push(newFriend);
    res.json(friends);
}

function getFriend(req,res){
    const ID=+req.params.friendID;
    const friend=friends[ID];
    if(friend)
    {
        res.json(friend);
    }
    else{
        res.status(400).json("Friend doesn't exist");
    }
}

function getFriends(req,res){
    res.json(friends);
   }

   module.exports={
    getFriend,
    getFriends,
    postFriend
   }