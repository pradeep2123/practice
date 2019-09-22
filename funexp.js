
function hi(){
    console.log('hello')  // normal fun
}
hi();


function cb(fun){
    console.log('iam exp ')   // arg passed as function
    
}
function fun(t){
    t();
}
fun(cb)

cb();

var bye = function(){ 
                   //anonymus fun
console.log('byepooo');
};
setTimeout(bye,1111);
