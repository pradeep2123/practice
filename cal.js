function po (ordernum){
    console.log("customer order", ordernum);
    cook(function() {
        console.log('deliver food', ordernum+2);

    });
}
function cook(callback)
{
    setTimeout(callback, 4444);
}
cook();
po(1);
po(2);
po(3);
console.log('calling fun overed');

