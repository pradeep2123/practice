console.log(" user 1 give" );
setTimeout(cb, 7111, 'idiot',"pradeep");
console.log("user 2 give");
setTimeout(cb, 6111 , 'ravi',"chithi");
var  p ='hi'
setImmediate((ar)=> {
    console.log(`executing immediate: ${ar} ${p}`); // use esc ~ for colon
},
'so immediate');
console.log("user 3 give");
setTimeout( cb, 2111, 'hacker','hiiii' );
setTimeout(function(){
    (console.log('hikkkk'));
},5111); 

function cb(arg, ar){
    console.log(`arg isss => ${arg} ${ar}`)
    console.log(" queried the db and deliveredmm");
}


