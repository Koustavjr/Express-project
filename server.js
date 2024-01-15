/*
const express=require('express');
const PORT=3000;
const app=express();

app.get('/',(req,res)=>{
res.send('First server');
});

app.get('/messages',(req,res)=>{

    res.send('<ul><li>Hello</li></ul>');
});

app.post('/messages',(req,res)=>{
console.log('Launching...');
});

app.listen(PORT,()=>{
console.log('Server is running');
});
*/

// Route parameters
/*
const express=require('express');
const PORT=3000;
const app=express();
const friends=[{
id:0,
name:"ronaldo"
},{
id:1,
name:"messi"
}];
app.get('/friends',(req,res)=>{
res.json(friends);
});
app.get("/friends/:friendID",(req,res)=>{
    const ID=Number(req.params.friendID);
    const friend=friends[ID];
    if(friend)
    {
    res.status(200).json(friend);
    }
    else{
        res.status(404).json("Friend doesn't exist");
    }
});
app.get('/messages',(req,res)=>{

    res.send('<ul><li>Hello</li></ul>');
});

app.post('/messages',(req,res)=>{
console.log('Launching...');
});

app.listen(PORT,()=>{
console.log('Server is running');
});

*/

// Middleware
/*
const express=require('express');
const PORT=3000;
const app=express();
const friends=[{
id:0,
name:"ronaldo"
},{
id:1,
name:"messi"
}];

app.use((req,res,next)=>{
    const start=Date.now();
    next();
    const delta=Date.now()-start;
    console.log(`${req.method} ${req.url} ${delta}`);
});
app.get('/friends',(req,res)=>{
res.json(friends);
});
app.get("/friends/:friendID",(req,res)=>{
    const ID=Number(req.params.friendID);
    const friend=friends[ID];
    if(friend)
    {
    res.status(200).json(friend);
    }
    else{
        res.status(404).json("Friend doesn't exist");
    }
});
app.get('/messages',(req,res)=>{

    res.send('<ul><li>Hello</li></ul>');
});

app.post('/messages',(req,res)=>{
console.log('Launching...');
});

app.listen(PORT,()=>{
console.log('Server is running');
});
*/

// post in express
/*
const express=require('express');
const PORT=3000;
const app=express();
const friends=[{
id:0,
name:"ronaldo"
},{
id:1,
name:"messi"
}];

app.use((req,res,next)=>{
    const start=Date.now();
    next();
    const delta=Date.now()-start;
    console.log(`${req.method} ${req.url} ${delta}`);
});
app.use(express.json());
app.post('/friends',(req,res)=>{
    const frnd=req.body.name;
    if(!frnd)
    {
        return res.status(400).json({
            error:"friend doesnot exist"
        })
    }
    const newFriend={
        name:frnd,
        id:friends.length
    }
    friends.push(newFriend);

    res.status(200).json(friends);
});
app.get('/friends',(req,res)=>{
res.json(friends);
});
app.get("/friends/:friendID",(req,res)=>{
    const ID=Number(req.params.friendID);
    const friend=friends[ID];
    if(friend)
    {
    res.status(200).json(friend);
    }
    else{
        res.status(404).json("Friend doesn't exist");
    }
});
app.get('/messages',(req,res)=>{

    res.send('<ul><li>Hello</li></ul>');
});

app.post('/messages',(req,res)=>{
console.log('Launching...');
});

app.listen(PORT,()=>{
console.log('Server is running');
});*/
/*
// Model View Controller(MVC)  
const express =require('express');
const messagesController=require('./controllers/messages.controllers');
const friendsController=require('./controllers/friends.controllers');
const PORT=3000;
const app=express();


// Middleware
app.use((req,res,next)=>{
const start=Date.now();
next();
const delta=Date.now()-start;
console.log(`${req.method} ${req.url} ${delta}`);
});

app.use(express.json());

// methods

app.post('/friends',friendsController.postFriend);

app.get('/friends',friendsController.getFriends);

app.get('/friends/:friendID',friendsController.getFriend);

app.get('/messages',messagesController.getMessages);

app.post('/messages',messagesController.postMessages);

app.listen(PORT,()=>{
console.log("Server launched...");
});*/


/*
// Router-- small application containing own set of middlewares and routes
const express =require('express');
const friendsRouter=require('./routes/friends.routes');
const messagesRouter=require('./routes/messages.router');
const PORT=3000;
const app=express();
const path=require('path');

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

// Middleware
app.use((req,res,next)=>{
const start=Date.now();
next();
const delta=Date.now()-start;
console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}`);
});


app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('index',{
        title:"ski mountain",
        caption:"France is beautiful"
    });
});

app.use('/friends',friendsRouter);

app.use('/messages',messagesRouter);

app.listen(PORT,()=>{
console.log("Server launched...");
});*/

// Layouts

const express =require('express');
const friendsRouter=require('./routes/friends.routes');
const messagesRouter=require('./routes/messages.router');
const PORT=3000;
const app=express();
const path=require('path');

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

// Middleware
app.use((req,res,next)=>{
const start=Date.now();
next();
const delta=Date.now()-start;
console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}`);
});


app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('index',{
        title:"ski mountain",
        caption:"France is beautiful"
    });
});

app.use('/friends',friendsRouter);

app.use('/messages',messagesRouter);

app.listen(PORT,()=>{
console.log("Server launched...");
});