const fs = require("fs");
console.log("before");

const promise = fs.promises.readFile("./f1.txt");

/***consumption of promise*/
// await only works inside a  function with async keyword
// async function fn() {
//     try {
//         const data = await promise;
//         console.log("Data inside the file is " + data);
//         console.log("After");
       
//     } catch (err) {
//         console.log("err: ", err);
//     }
// }
// fn();




/***consumption of promise*/
// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })

// promise
//     .catch(function (err) {
//         console.log("err", err);
// })

