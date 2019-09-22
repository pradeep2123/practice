var users = ["1","2"];

function addUser(name, callback){
   // setTimeout(function() {
        users.push(name);
        callback();
   // },5000);
}
function getUser() {
   // setTimeout(function() {
        console.log(users);
   // },100);
}
// console.log(users);
addUser("3",getUser);

