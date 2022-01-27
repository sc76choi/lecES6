


/////////////////////////////////////////



/////////////////////////////////////////



/////////////////////////////////////////



///////////////////////////////////////// Object Destruncturing #1
{
var exam = {
    kor:20,
    eng:30,
    math:40
};

// function printExam(exam) {
function printExam({kor, eng, math}) {
// 


    // // Destruncturing 
    // let kor = exam.kor;
    // let eng = exam.eng;
    // let math = exam.math;

    // let {kor, eng, math} = exam;

    console.log("---- print() ")
    console.log(`${kor}, ${eng}, ${math}`);
    // console.log(`${total}`);
}

printExam(exam);
}

///////////////////////////////////////// 5. 향상된 json 객체 표현식 #2

// let attr = "kor";
// let exam = {
//     [attr]:10
// };

// console.log(exam.kor);



///////////////////////////////////////// 5. 향상된 json 객체 표현식 #1
// {
// let kor = 30;
// let eng = 40;
// let math = 50;

// // var exam = {
// //     kor:kor,
// //     eng:eng,
// //     math:math
// // };

// let exam = {kor, eng, math, total(){
//     return 10;
// }};

// console.log(exam.kor)
// console.log(exam.total())


// }

///////////////////////////////////////// 4. Template String

// {
// let title = "ES6";
// let content = "새로운 기능 좋아";

// let template = ` ${title} 내려써도
// 괜찮아 ${content}`;


// // let template2 = "철산도서관 \
// //                      5층 노트북 \
// //                      31 번";


// console.log(template);

// // 문자열 그대로 출력
// let template2 = String.raw` ${title} 내려써도 \n\n\n
// 괜찮아 ${content}`;

// console.log(template2);

// }



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
