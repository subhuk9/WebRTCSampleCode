
const connection = new WebSocket("ws://localhost:8080");

connection.onopen = () => {
  console.log("Connected");
};

connection.onclose = () => {
  console.error("disconnected");
};

connection.onerror = error => {
    console.error('failed to connect with: ' + error);
}

connection.onmessage = event => {
    console.log('Received message', event.data);
    let li = document.createElement('li');
    li.innerText = event.data;
    document.querySelector('#chat').append(li);
    document.querySelector('#ChatDiv').style.visibility = 'visible';
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    let message = document.querySelector('#message').value;
    console.log('Sending message from UI', message, new Date().getMinutes()+':'+new Date().getSeconds()+':'+new Date().getMilliseconds());
    console.log(message);
    connection.send(message);
    document.querySelector('#message').value= "";
});
