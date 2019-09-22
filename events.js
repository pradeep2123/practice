var events = require('events');// import event module
var eventEmitter = new events.EventEmitter();//created eventemitter obj
var listner1= function(){
    console.log('listner 1 arrives');
}
var listner2 = function(){
    console.log(" listner 2 arrives")
}
var myEventHandler = function() {
    console.log('i hear a stream');
}
eventEmitter.addListener('connection',listner1);
eventEmitter.on('connection', listner2);
var eventlisteners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventlisteners +   " listners listening to conn count");
eventEmitter.emit('connection');  // after event ready, fire the event by use emit
//eventEmitter.on('scream', myEventHandler);
//eventEmitter.emit('scream'); 
eventEmitter.removeListener('connection', listner1);
console.log('removed 1')
 eventEmitter.emit('connection');// again fire after each events
 eventlisteners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
 console.log(eventlisteners + ' listners continues ')

//setTimeout (myEventHandler, 1111);
//console.log('before myevent it emits') 
//setTimeout(listner1,2221);