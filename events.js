const EventEmitter = require('events'); // cap letter denotes class

const emitter = new EventEmitter();

//Register a listener
//emitter.addListener
emitter.on('messageLogged', function(e){ //arg, eventArgument
  console.log('listener called', e);
});

emitter.on('messageLogged', (e) => { //arrow function
  console.log('listener called', e);
});

//Raise an event
emitter.emit('messageLogged', { id: 1, url: "#"});

//Raise: logging
logger = require('./logger.js');
var file = logger.File;
var folder = logger.Folder;
var url = logger.URL;
emitter.emit('messageSent', { file, folder, url });

emitter.on('messageSent', (e) => {
  console.log('message sent', e);
})

/*
//Using classes to split event and listener
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (e) => {
console.log('Listener Called', e);
});
logger.log('message');
*/
