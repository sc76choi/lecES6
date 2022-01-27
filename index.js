


///////////////////////////////////////// Template String

let template = `내려써도
괜찮아`;

console.log(template);




///////////////////////////////////////// 3. const 변수

// {
//     const N = 1;
//     const S = 5;

//     var walkTo = 5;
//     // S = 3; // Uncaught TypeError: Assignment to constant variable.

//     const add = function(a, b) {
//         return a + b;
//     }

//     add = 3; // Uncaught TypeError: add is not a function
//     // const add : Assignment to constant variable.

//     console.log(add(3, 4));
// }


/////////////////////////////////////////


// {
//     let a = 30;
// }

// console.log(a);

// function getValue(condition) { 
//     if(condition) {
//         var value = "ok";
//         return value;
//     }
//     else {
//         return value;
//     }
// }


// function getValue(condition) { 
//     if(condition) {

//         {
//             let value = "ok";
//         }

//         return value;
//     }
//     else {
//         return value;
//     }
// }

// false case : undefined -> 변수는 선언은 되었다. 값(undefined)
// console.log(getValue(true)); 



/////////////////////////////////////////

// {
//     // var x = 30;
//     let x = 30; // Uncaught ReferenceError: x is not defined
// }

// console.log(x);

///////////////////////////////////////// 
// let x = 30;
// console.log(x);

// var x = 40; //  Identifier 'x' has already been declared
// console.log(x);