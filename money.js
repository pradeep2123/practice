// var array = require('array');
// var a  = [1,2,5,10,20,50,100,200,500,1000,2000];
// a.sort(function(a,b){
//     return a - b;      
// });
// console.log(a.slice(-1 to 1));

// how CALL BACK WORKS....
function wish(name){
    console.log(`helloo , ${name} , Welcomes you to the party`);
}
function scold(firstname,secondname,cb){
    const fullname = firstname + '' + secondname;
    var full = `${fullname} full is called`
    cb(full);
    console.log('checking');
    cb(fullname);
}
scold('K.pradeep','Sathish',wish);