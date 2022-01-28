/////////////////////////////////////////
// 
/////////////////////////////////////////

/////////////////////////////////////////
// 
/////////////////////////////////////////

/////////////////////////////////////////
// 
/////////////////////////////////////////

/////////////////////////////////////////
// 
/////////////////////////////////////////


/////////////////////////////////////////
// 
/////////////////////////////////////////


///////////////////////////////////////// 14 - Map 콜렉션
// https://youtu.be/wP4oHNylsvM
/////////////////////////////////////////

// let map = new Map();
// map.set("id", 1);

// console.log(map.size);
// console.log("---------------");

// map.set("title", "map이란?");
// console.log(map.size);
// console.log("---------------");
// console.log(map.get("title"));


let exam = new Map([[1, "hello"], [2, "hi"], [4, "ok"]]);
// exam.set("kor", 10);
// exam.set("eng", 10);
// exam.set("math", 10);


for(let [k, v] of exam) {
    console.log(typeof v)
    console.log(k + " : " + v);
}


///////////////////////////////////////// 13 - Set 콜렉션
// https://youtu.be/tUXMrY1nNqw
/////////////////////////////////////////

// Set - List - Map

// let set = new Set();
// // set.add(5);
// // set.add("5");
// // set.add(2);
// // set.add(5);

// set.add(5).add("5").add(2).add(5);

// console.log(set.size)


// let arr = [10, 20, 30, 20, 30, 40, 30, 40, 50];
// let set = new Set(arr);

// // console.log(set.size);

// // 값 나열하기
// set.forEach(function(value, key, ownerSet) {
//     console.log(key + " : " + value);
// })

// // // for-of를 이용한 값 나열
// // let set2 = new Set([2, 10, 7, 45, 23]);
// // for(let v of set2) {
// //     console.log(v);
// // }

// // for-of를 이용한 값 나열
// let set3 = new Set([2, 10, 7, 45, 23]);
// for(let [key, value] of set3.entries()) {
//     console.log(key + " : " +  value);
// }

// let set4 = new Set();
// set4.add(4).add(5);

// console.log("----" + set4.size);
// console.log(set4.has(4));
// console.log(set4.has("4"));

// set4.delete(5);
// console.log("----" + set4.size);

// set4.add(6).add(7);
// console.log("----" + set4.size);

// set4.clear();
// console.log("----" + set4.size);

///////////////////////////////////////// 12 - Array Destructuring #2

// let notice = {
//     title : "공지사항",
//     files : ["img1.png", "img3.png"]
// };

// let {files:[first]} = notice;

// console.log(first);

// console.log(`---------------------------------`);

// let notices = {
//     title : "공지사항",
//     list : [
//         {title:"오~", content:"내용무"},
//         {title:"하~", content:"ㅋㅋ"}
//     ]
// };

// let {list:[notice1]} = notices;
// let {list:[,notice2]} = notices;

// console.log(notice1.title);
// console.log(notice2.title);






///////////////////////////////////////// 11 - Array Destructuring #2

// let kors = [10, 20, 30];
// let [kor1, kor2, kor3, kor4=40] = kors;

// console.log(kors);
// console.log(kor4);

// // Nested Array
// let exam = [10, 20, 30, [40, 50]];
// let [kor, eng, math, [com, history]] = exam;

// console.log(com);

///////////////////////////////////////// 11 - Array Destructuring #1

// let kors = [10, 20, 30];
// let [kor1, kor2] = kors;


// console.log(kor1);
// console.log(kor2);

// let [,, kor3] = kors;
// console.log(kor3);

// let kors = [10, 20, 30];
// let [kor1, kor2, kor3] = kors;


// console.log(kor1);
// console.log(kor2);
// console.log(kor3);

// console.log(`------------------------`);
// let temp = [40, 50, 60];
// // kors = temp; // 잘못된 복사
// [kor1, kor2, kor3] = temp;


// console.log(kor1);
// console.log(kor2);
// console.log(kor3);


// // 순서 재배열
// let x  = 2;
// let y  = 3;
// let z  = 5;

// console.log(`${x}, ${y}, ${z}`);



// console.log(`------------------------`);
// [z, x, y] = [x, y, z];
// console.log(`${x}, ${y}, ${z}`);




///////////////////////////////////////// 7. Object Destruncturing #3(뽀개기 중첩과 적응)
{
// 객체의 속성과 다른 이름을 지정하려면?

// var exam = {
//     kor:20,
//     eng:30,
//     math:40
// };

// // Destructuring
// let {kor, eng} = exam;
// let {kor:korean, eng:english} = exam; // 속성:{별칭}

// console.log(korean); // kor, eng는 사용 못함
// console.log(english);

// // 객체가 중첩된 경우
// var exam = {
//     kor:20,
//     eng:30,
//     math:40,
//     student:{
//         name : "sc",
//         phone : "010-123-4567"
//     }
// };

// // let kor = exam.kor;
// // let eng = exam.eng;
// // let name = exam.student.name;
// // let phone = exam.student.phone;

// let {kor, eng, student:{name, phone}} = exam;

// console.log(kor);
// console.log(eng);
// console.log(name);
// console.log(phone);


}

///////////////////////////////////////// 6. Object Destruncturing #2(속성확장과 기본값)

// var exam = {
//     kor:20,
//     eng:30,
//     math:40
// };

// let {kor, eng, math, total=kor+eng+math} = exam;

// console.log(`${kor}, ${math}, ${total}`)
// console.log(exam)


// exam.kor = 200;
// exam.math = 400;
// ({kor, eng, math} = exam); // 객체 속성값 재정의 가능 소괄호

// console.log(`${kor}, ${math}`)
// console.log(exam)

///////////////////////////////////////// 6. Object Destruncturing #1
// {
// var exam = {
//     kor:20,
//     eng:30,
//     math:40
// };

// // function printExam(exam) {
// function printExam({kor, eng, math}) {
// // 


//     // // Destruncturing 
//     // let kor = exam.kor;
//     // let eng = exam.eng;
//     // let math = exam.math;

//     // let {kor, eng, math} = exam;

//     console.log("---- print() ")
//     console.log(`${kor}, ${eng}, ${math}`);
//     // console.log(`${total}`);
// }

// printExam(exam);
// }

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
