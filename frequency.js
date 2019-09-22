// var arr = [1,2,34,4,5,6,7,7,78,2];
// function foo(arr){
//     console.log(arr,"Arr");
//     var a=[],b=[],prev;
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]!== prev){
//             a.push(arr[i]);
//             b.push(1);
//         }else{
//             b[b.length-1]++;
//             console.log(b,"b[b.length-1]++")
//         }
//         prev = arr[i];
//     }
//     return [a,b];
// }
// foo();


const promise = new Promise(function(res,rej){

})
/* ////////////////////// ASYNC NOTES /////////////////////// */
//async function vs promises ////////////
//await keyword used in an async function to ensure all promises returned in async functions are synchronized , 
//async is prepended when returning a promise, await is prepended when calling a promise. 
// prepend -> before , append ->after
//async func will return a promise

// function date() {
//     console.log("date")
//     return '2017 Dodge Charger';
// }
// function orderUber(x){
//     console.log("order")
//     return x
// }


// //async - await try catch
// async function mydate(){
//     try {
//         let dateDetails = await date();
//         console.log(dateDetails,"-------")
//         let message     = await orderUber(date,function(x){
//         });
//         console.log(message,"mmm");
//     }
//     catch (err){
//         console.log(err,"errr")
//     }
// }
// mydate();

function createQuote(quote, callback){ 
    console.log("1111")
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
    // console.log("33333333333")
}
  
  function logQuote(quote){
    console.log("22222")
    console.log(quote);
  }
  
  createQuote("eat your vegetables!",(log)=>{
    console.log(log,"----")
  }); // 1
  
  