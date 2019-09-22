var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true  // methods to easy
}));
//app.use(express.static(path.join(__dirname, 'views')));
app.set('views',path.join(__dirname,'views'));
app.
set('view engine', 'ejs');

app.get('/',(req,res) =>
 res.sendFile(__dirname + '/public/bubble.html'));

    
app.listen(10,() =>

console.log('value gonna printed'));

