var express= require('express');
var mongoose = require('mongoose');       
var db= require('mongodb');
mongoose.connect('mongodb://localhost:27017/loop');
var app =express();
var i, x;

var Schema= mongoose.Schema 

   var loopSchema= new Schema({
    x:Number,
  })

   loopSchema.methods.dudify =function(){

    for(i=0;i<=5;i++)
     { 
      x = i;
    console.log(x);
     }
     return x;
    }

var value= mongoose.model('value', loopSchema)

var pradeep = new value({
  x:i
})

console.log(pradeep);

pradeep.dudify(function(err,x){
  if(err) throw err;
  else
  
  console.log(x);
})

value.find({x:{i}}, function(err,x){

  if(err) throw err;
  else
  console.log('value got printed')
})

pradeep.save(function(err){
  if(err) throw err;
else
 console.log('stored in db');
});


 // console.log("check either before negative or positive ")
// setTimeout(()=>{
//   console.log('let checking using negative value')
// },2000);

// setImmediate(function(){
//   console.log('check when its working');
// })


   