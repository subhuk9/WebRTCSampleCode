const express  = require('express');
const default_router = express.Router();
var appRoot = require('app-root-path');

// default_router.use(express.static("/sample_website"));

default_router.get('/home*',function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/Home.html'));
});

default_router.get('/about*',function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/about.html'));
});

default_router.get('/login*', function(req,res){
    console.log(req.path, req.url, req.query.uname);
    // console.log(req.body);
    // if(req.body){
    //     res.sendFile(path.join(__dirname+'/sample_website/view/signup.html'));
    // }
    res.sendFile(path.join(__dirname+'/sample_website/view/login.html'));
})

default_router.get('/signup*', function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/signup.html'));
})

default_router.get('/contactus*', function(req,res){
    res.sendFile(path.join(__dirname+'/sample_website/view/contactus.html'));
})

default_router.get('/*/',function(req,res){ 
    console.log('approot:'+appRoot+'/sample_website/view/Home.html   Direcory:' +__dirname+'/sample_website/view/contactus.html');   
    res.sendFile(path.join(appRoot+'/sample_website/view/Home.html'));
});

module.exports = default_router;