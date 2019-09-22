
function createQuote(quote, callback){ 
    console.log("1111")
    var myQuote = "Like I always say, " + quote;
    //log(myQuote), it will pass to the createQuote, line no:15 ...
    callback(myQuote); // 2
    // console.log("33333333333")
}
  // this instead of log function ...

//   function logQuote(quote){
//     console.log("22222")
//     console.log(quote);
//   } 
  
  createQuote("eat your vegetables!",(log)=>{
    console.log(log,"----1")
    //"eat your vegetables! and log will pass as parameters.... "
  }); 


function main_fun(name,p_fun){
    var p = name ;
    p_fun(p);
}

main_fun("iam Pradeep",(pradeep)=>{
    console.log(pradeep,"pradeep")
});


function p1(val)
{
    console.log(val,"val")
}
function main_test(f,s1){
    console.log("main_tets")
    f(s1);
}

main_test(p1,"r");