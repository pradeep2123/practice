var fs = require('fs');
var dataString;
async function synFunc() {
    console.log('it enters');
    await fs.readFile('msg.txt', function(err,data) {
        if(err) {
            console.log(err); 
        }
        console.log(data.toString());
        dataString = data.toString();
    });
}

synFunc();

console.log(dataString);