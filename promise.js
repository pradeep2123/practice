// var greeting = function(sayHello){
// console.log(sayHello); 
// }
// var greetingPromise = greeting();
// greetingPromise.then(function(greeting) {
//     console.log(greeting);    // 'hello world’
// }, function (error) {
//     console.error('uh oh: ', error);   // 'uh oh: something bad happened’
// });

// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
//   var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });

//   var promise3 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       reject('foo');
//     }, 300);
//   });

  
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
    // new Promise((resolve, reject) => setTimeout(() => reject(new Error('An error has ocurred')), 1000))
]).then(result => console.log(result))
.catch(err => console.log(err)) // An error has ocurred
