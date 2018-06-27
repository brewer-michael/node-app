var url = '#'; //log url host
exports.URL = url;

var file = __filename //name of module
var path = __dirname //location of module
exports.File = file;
exports.Folder = path;
console.log(url);

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports.log = log;


/*
//extends class to log event and send to events.js listener
const EventEmitter = require('events'); // cap letter denotes class

var url = '#'; //log url host

class Logger extends EventEmitter {
//function in class = method
  log(message) {
  // Send an HTTP request
  console.log(message);
  //Raise an event
this.emit('messageLogged', { id: 1, url: "#"});
  }
}

module.exports = Logger;
*/
