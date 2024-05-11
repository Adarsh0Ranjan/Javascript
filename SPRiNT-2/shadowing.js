//statement 1:

// var fruits = "apple";
// console.log(fruits); // apple
// {
//     console.log(fruits);  // apple
//     var fruits;
//     console.log(fruits); // apple (fruit should be undefine here but var will be accesed from oustide because ntw undefine and some value it will choose some value)
//     fruits = "orange";
//     {
//         console.log(fruits) // orange
//     }
//     console.log(fruits); // orange
// }
// console.log(fruits); // orange

// statement 2:

// let fruits = "apple";
// console.log(fruits); // apple
// {
//     console.log(fruits);  // TDZ
//     let fruits; // as soon as we add this, then fruits will accesed from block 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);

//  legal
let fruits = "apple";
console.log("21",fruits); // apple
{ 
    let fruits;
    console.log("25",fruits);
    fruits = "orange";
    {
        let fruits;
        console.log("28",fruits)
    }
    console.log(fruits);
}
console.log(fruits);

// var fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         let fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);

// illegal shadowing

// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         // let fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);
