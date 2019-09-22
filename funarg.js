
function tryme(){
    console.log("hi dude" )

}
function calltest()
{
    console.log("hi dudsfjshfgsdjfe" )
}

function cb(t,c){
    t();
    c();
}
cb(tryme,calltest);