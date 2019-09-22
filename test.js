  //var x function display(x) {
  //  console.log(x);
//};

//display(199);

var http = require('http');


var server = http.createServer(function(req,res){ 
res.writeHead(200,{'content-Type': 'text/plain'});
res.write('iiiiiiii');
res.end('Helloo world');

}).listen(5000)
///server.listen(5000);
console.log('node.js web server at portt 5ooo');
