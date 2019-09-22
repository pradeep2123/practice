var a, b;
function hello(name){
    console.log('hiii' + name);
}
hello ("cssss");   
 
var x = function(a,b) {
    
    return a+b;
} 
console.log(x(2,4));
 
//using function Each1

var add= (a,b)=>{
    var tot = a+b;
    return tot;
}

var sum = add(2,2)

   console.log(sum);

var p = 'cat';     
function my(p){
    var p = 'dogg';
    console.log(p);  
}
my();
//my();// method has to call to read function
console.log(p);

    
