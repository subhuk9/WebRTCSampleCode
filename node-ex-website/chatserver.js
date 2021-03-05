const WebSocket = require('ws');

//***chat code***
const webSocketServer = new WebSocket.Server({port : 8080});

webSocketServer.on('connection', webSocket => {
    console.log('Websocket connection established:', new Date().getMinutes()+':'+new Date().getSeconds()+':'+new Date().getMilliseconds());
    webSocket.on('message', message => {
        console.log(message);
        broadcast(message);
    })
})

function broadcast(data) {
    webSocketServer.clients.forEach(client => {
        if(client.readyState === WebSocket.OPEN){
            console.log('ClientDetails: ',client);
            client.send(data);
        }
    });
}

console.log('Chat server started...');