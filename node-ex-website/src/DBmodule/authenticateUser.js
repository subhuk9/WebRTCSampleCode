exports.authenticateUser = function(userName, Password){
    if(userName === 'admin' && Password === 'admin'){
        return true;
    }else{
        return false;
    }

}