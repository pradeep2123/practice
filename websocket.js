var wss = require('ws');
var express = require('express');
ws.on('message', (message:string) => {

    //log the received message and send it back to the client
    console.log('received: %s', message);

    const broadcastRegex = /^broadcast\:/;

    if (broadcastRegex.test(message)) {
        message = message.replace(broadcastRegex, '');

        //send back the message to the other clients
        wss.clients
            .forEach(client => {
                if (client != ws) {
                    client.send(`Hello, broadcast message -> ${message}`);
                }    
            });
        
    } else {
        ws.send(`Hello, you sent -> ${message}`);
    }
});
