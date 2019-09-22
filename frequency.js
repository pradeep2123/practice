var arr = [1,2,34,4,5,6,7,7,78,2];
function foo(arr){
    console.log(arr,"Arr");
    var a=[],b=[],prev;
    for(var i=0;i<arr.length;i++){
        if(arr[i]!== prev){
            a.push(arr[i]);
            b.push(1);
        }else{
            b[b.length-1]++;
            console.log(b,"b[b.length-1]++")
        }
        prev = arr[i];
    }
    return [a,b];
}
foo();


const promise = new Promise(function(res,rej){

})
/* ////////////////////// ASYNC NOTES /////////////////////// */
//async function vs promises ////////////
//await keyword used in an async function to ensure all promises returned in async functions are synchronized , 
//async is prepended when returning a promise, await is prepended when calling a promise. 
// prepend -> before , append ->after
//async func will return a promise
async function myRide() {
    return '2017 Dodge Charger';
}
function your_ride(){
    return Promise.resolve('2017 dodge charger')
}


//async - await try catch
async function mydate(){
    try {
        let dateDetails = await date;
        let message     = await orderUber(dateDetails);
        console.log(message);
    }
    catch (err){

    }
}