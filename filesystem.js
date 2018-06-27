const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

//all asynchronous methods take a function as their last argument -- callback
const afiles = fs.readdir('./', function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});
