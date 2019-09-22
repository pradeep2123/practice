//var fs = require('fs');


// function mainFunction (callback){
var mainFunction= function(callback){
    var someData = 'here some data';
    callback(someData);
}

mainFunction(function(a){
    console.log(a);
});
 
mainFunction(function(bb) {
   console.log(bb);
}); 

   

