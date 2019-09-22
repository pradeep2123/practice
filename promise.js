var greeting = function(sayHello){
console.log(greeting); 
}
var greetingPromise = sayHello();
greetingPromise.then(function(greeting) {
    console.log(greeting);    // 'hello world’
}, function (error) {
    console.error('uh oh: ', error);   // 'uh oh: something bad happened’
});
