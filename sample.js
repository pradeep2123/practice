var fs = require("fs");
var data = fs.readFileSync('msg.txt'); // blocking, wait and go to nxt until past procces complete
console.log(data.toString());
//var data1 = fs.readFileSync('hi.txt'); // blocking

fs.readFile('msg.txt', function(err,data) {
if(err) return console.error(err);                 // async, non-blocking, it will not wait for request
console.log(data.toString());
});


//console.log(data1.toString());
//console.log (data.toString());
console.log("prog end");