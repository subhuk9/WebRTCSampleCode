const http = require('http');
const express = require('express');
const path = require('path');
const validateUser = require('./src/DBmodule/authenticateUser');
const url = require('url');
const querystring = require('querystring');
// const router = require('./src/routes/default_router');
// const WebSocket = require('ws');


// //***chat code***
// const webSocketServer = new WebSocket.Server({port:8080});

// webSocketServer.on('connection', webSocket => {
//     console.log('Websocket connection established:', new Date().getMinutes()+':'+new Date().getSeconds()+':'+new Date().getMilliseconds());
//     webSocket.on('message', message => {
//         console.log(message);
//         broadcast(message);
//     })
// })

// function broadcast(data) {
//     webSocketServer.clients.forEach(client => {
//         if(client.readyState === WebSocket.OPEN){
//             client.send(data);
//         }
//     });
// }

const app = express();
// app.use(express.json());
// app.use('/', router);
app.use(express.static("sample_website"));

app.get('/home*',function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/Home.html'));
});

app.get('/about*',function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/about.html'));
});

app.route('/login*').get(function(req,res){
    console.log('Get method:'+ req.path, req.url, req.query.uname);
    // console.log(req.body);
    // if(req.body){
    //     res.sendFile(path.join(__dirname+'/sample_website/view/signup.html'));
    // }
    res.sendFile(path.join(__dirname+'/sample_website/view/login.html'));
}).post(function(req,res){
        console.log('Post method: '+req.path, req.url, req.body);
        console.log(req.body);
        res.sendFile(path.join(__dirname+'/sample_website/view/login.html'));
});

app.get('/signup*', function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/signup.html'));
})

app.get('/chat*', function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/chat.html'));
})

app.get('/contactus*', function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/contactus.html'));
})

app.get('/*/',function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/Home.html'));
});

const port= 8000;
app.listen(port);
console.log('server running on: '+ port );