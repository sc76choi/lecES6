
///////////////////////////////////////// 22 - 속성 은닉화를 위한 쉬운 Getters/Setters 지원
// https://youtu.be/cw5WNsfonhg
/////////////////////////////////////////

{
    // class Exam {

    //     #kor; // private 선언(#)
    //     #eng;
    //     #math;
    //     static #info = "안녕하세요. Exam 클래스 입니다."  // static 전역변수;

    //     constructor(kor, eng, math) {
    //         this.#kor = kor; // 인스턴스 속성(필드)
    //         this.#eng = eng;
    //         this.#math = math;
    //     }

    //     get kor() {
    //         return this.#kor
    //     }

    //     set kor(value) {
    //         this.#kor = value;
    //     }

    //     #total() {
    //         return this.#kor + this.#eng + this.#math;
    //     }

    //     avg() {
    //         return this.#total() / 3.0;
    //     }

    //     // static 전역변수
    //     static info() {
    //         return Exam.#info; 
    //     }
    // }


    // let exam1 = new Exam();
    // exam1.kor = 30;
    // console.log(exam1.kor);
}

///////////////////////////////////////// 21 - static 멤버 정의하기
// https://youtu.be/AipNBFZQJTQ
/////////////////////////////////////////

{
    // 외부에 노출하지 않기

    // class Exam {

    //     #kor; // private 선언(#)
    //     #eng;
    //     #math;
    //     static #info = "안녕하세요. Exam 클래스 입니다."  // static 전역변수;

    //     constructor(kor, eng, math) {
    //         this.#kor = kor; // 인스턴스 속성(필드)
    //         this.#eng = eng;
    //         this.#math = math;
    //     }

    //     #total() {
    //         return this.#kor + this.#eng + this.#math;
    //     }

    //     avg() {
    //         return this.#total() / 3.0;
    //     }

    //     // static 전역변수
    //     static info() {
    //         return Exam.#info; 
    //     }
    // }

    // // let exam = new Exam(10, 20, 30);

    // let exam1 = new Exam(10, 20, 30);
    // // let exam2 = new Exam(1, 2, 3);
    // // let exam3 = new Exam(1, 22, 33);


    // console.log("info : " + Exam.info());

    // console.log("total : " + exam.avg());
    // console.log("info : " + exam.info());
    // console.log("total : " + exam.total());
    // Uncaught TypeError: exam.total is not a function


    // console.log(exam.kor); // undefined
    // Private field '#kor' must be declared in an enclosing class

}

///////////////////////////////////////// 20 - class 멤버 은닉하기
// https://youtu.be/GOjtMeodZiY
/////////////////////////////////////////

{

    // 외부에 노출하지 않기

    // class Exam {

    //     #kor; // private 선언(#)
    //     #eng;
    //     #math;

    //     constructor(kor, eng, math) {
    //         this.#kor = kor;
    //         this.#eng = eng;
    //         this.#math = math;
    //     }

    //     #total() {
    //         return this.#kor + this.#eng + this.#math;
    //     }

    //     avg() {
    //         return this.#total() / 3.0;
    //     }
    // }

    // let exam = new Exam(10, 20, 30);
    // console.log("total : " + exam.avg());
    // console.log("total : " + exam.total());
    // Uncaught TypeError: exam.total is not a function


    // console.log(exam.kor); // undefined
    // Private field '#kor' must be declared in an enclosing class


}

///////////////////////////////////////// 19 - class를 이용한 객체 정의
// https://youtu.be/e-OsENI4m7Q
/////////////////////////////////////////

/**
 * 기존 함수로 정의하던 방법과의 차이점
 * - class 블록 안의 코드는 strict 모드로 실행된다.
 * - class 블록 안의 모든 메소드는 열거할 수 없다.
 * - class 생성자는 new를 통하지 않고는 호출할 수 없다.
 */

{
    // // 기존
    // let proto = {kor:10, eng:30};

    // function Exam() {

    // }

    // Exam.prototype = proto;
    // let exam = new Exam();
    // console.log(exam.kor);

    // class Exam {
    //     constructor(kor, eng, math) {
    //         this.kor = kor;
    //         this.eng = eng;
    //         this.math = math;
    //     }

    //     total() {
    //         return this.kor + this.eng + this.math;
    //     }

    //     avg() {
    //         return this.total() / 3.0;
    //     }
    // }

    // let exam = new Exam(10, 20, 30);
    // console.log("total : " + exam.total());
}

///////////////////////////////////////// 18 - Arrow Functions와 그 특징
// https://youtu.be/DpIoo-oNQBs
/////////////////////////////////////////

{
    // No this
    // No arguments
    // No super
    // No new.target

    // function print() {
    //     this.kor = 10;
    //     console.log("print : " + window.kor);
    // }


    // function Exam() {
    //     this.kor = 0;
    //     this.eng = 0;
    //     this.math = 0;
    // }

    // print();
    // let exam = new Exam();
    // console.log(exam.kor);
    // console.log(kor);


    // // 함수를 즉석에서 정의해서 넘기는 경우가 많다.
    // let nums = [13, 4, 6, 1, 3, 26];

    // // nums.sort();

    // // 
    // // function compare(x, y) {
    // //     return x-y;
    // // }
    // // nums.sort(compare);

    // nums.sort((x, y) => x-y);
    // console.log(nums);

}


///////////////////////////////////////// 17 - Default Value의 이전방식과 현재방식
// https://youtu.be/i2WoD5BvDEs
/////////////////////////////////////////

{
    // {
    //     console.log("hi - 5" || 2 || 5); // null, 빈값(""), undefined 등의 false로 인식
    // }

    // function add(x = 0, y = 0) {
    //     // x = x || 0;
    //     // y = y || 0;
    //     return x + y;
    // }

    // // console.log(add(2, 3));
    // // console.log(add(1));


    // function add2(x, y = 10) {
    //     console.log("length : " + arguments.length);
    //     return x + y;
    // }


    // console.log(add2(1));
    // console.log(add2(1, 2));
    // console.log(undefined);
}

///////////////////////////////////////// 16 - Spread Operator
// https://youtu.be/Qxh55yYk1bU
/////////////////////////////////////////

{
    // function print(x, y, z) {
    //     console.log(x);
    //     console.log(y);
    //     console.log(z);
    // }

    // let map = new Map();
    // map.set("id", 333);
    // map.set("title", "hello");

    // let temp = [...map];
    // // console.log(temp[0][1]);
    // // console.log(temp[1][1]);
    // print(...temp);


    // let set = new Set([2, 4, 6]);
    // let nums = [...set];

    // print(...nums);
}

///////////////////////////////////////// 15 - Rest Parameters
// https://youtu.be/mIolXUjF3f4
/////////////////////////////////////////

{
    // function print(x, y, ...values) {

    //     console.log("value size : " + values.length);

    //     // console.log(x);
    //     // console.log(y);

    //     console.log(arguments[0]);
    //     console.log(arguments[1]);
        
    //     for(let i=0; i < values.length; i++) {
    //         console.log(values[i]);
    //     }
    // }

    // print(2, 3, 5, 6, 7);
    // // print(2, 3, "hello", 5);
}

///////////////////////////////////////// 14 - Map 콜렉션
// https://youtu.be/wP4oHNylsvM
/////////////////////////////////////////

{
    // let map = new Map();
    // map.set("id", 1);

    // console.log(map.size);
    // console.log("---------------");

    // map.set("title", "map이란?");
    // console.log(map.size);
    // console.log("---------------");
    // console.log(map.get("title"));


    // let exam = new Map([[1, "hello"], [2, "hi"], [4, "ok"]]);
    // exam.set("kor", 10);
    // exam.set("eng", 10);
    // exam.set("math", 10);


    // for(let [k, v] of exam) {
    //     console.log(typeof v)
    //     console.log(k + " : " + v);
    // }
}

///////////////////////////////////////// 13 - Set 콜렉션
// https://youtu.be/tUXMrY1nNqw
/////////////////////////////////////////
{
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
}

///////////////////////////////////////// 12 - Array Destructuring #2
// https://youtu.be/ksLga2iigCk
/////////////////////////////////////////

{
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
}

{
    // let kors = [10, 20, 30];
    // let [kor1, kor2, kor3, kor4=40] = kors;

    // console.log(kors);
    // console.log(kor4);

    // // Nested Array
    // let exam = [10, 20, 30, [40, 50]];
    // let [kor, eng, math, [com, history]] = exam;

    // console.log(com);

}

 ///////////////////////////////////////// 11 - Array Destructuring #1
 // https://youtu.be/0KRWqVWmhi0
 /////////////////////////////////////////

{
    // let kors = [10, 20, 30];
    // let [kor1, kor2] = kors;


    // console.log(kor1);
    // console.log(kor2);

    // let [,, kor3] = kors;
    // console.log(kor3);

    // // let kors = [10, 20, 30];
    // // let [kor1, kor2, kor3] = kors;


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

}


///////////////////////////////////////// 10 - Object Destructuring #3 중첩과 적응
// https://youtu.be/3EcJlwFyZ18
/////////////////////////////////////////

{
    // // 객체의 속성과 다른 이름을 지정하려면?

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
    // let name = exam.student.name;
    // let phone = exam.student.phone;

    // // let {kor, eng, student:{name, phone}} = exam;

    // console.log(kor);
    // console.log(eng);
    // console.log(name);
    // console.log(phone);

}

///////////////////////////////////////// 09 - Object Destructuring #2
// https://youtu.be/PElZVuzUP74
/////////////////////////////////////////

{
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
}

///////////////////////////////////////// 08 - Object Destructuring #1
// https://youtu.be/17pLb57eMlU
/////////////////////////////////////////

{
    // var exam = {
    //     kor:20,
    //     eng:30,
    //     math:40
    // };

    // // function printExam(exam) {
    // function printExam({kor, eng, math}) {

    //     // Destruncturing 
    //     // let kor = exam.kor;
    //     // let eng = exam.eng;
    //     // let math = exam.math;
    //     // let {kor, eng, math} = exam;

    //     console.log("---- print() ")
    //     console.log(`${kor}, ${eng}, ${math}`);
    //     // console.log(`${total}`);
    // }

    // printExam(exam);
}

///////////////////////////////////////// 07 - 향상된 JSON 객체 표현식 #2 : 변수형 속성
// https://youtu.be/ZsFJ7lgZfDA
/////////////////////////////////////////

{
    // let style = {
    //     background-color:"red",
    //     width:"100px"
    // };

    // // ""로 묶어준다.
    // let style = {
    //     "background-color":"red",
    //     width:"100px"
    // };


    // let attr = "kor";
    // let exam = {
    //     // attr:10 // error
    //     [attr]:10
    // };

    // console.log(exam.kor);
}

///////////////////////////////////////// 06 - 향상된 JSON 객체 표현식 #1
// https://youtu.be/gCp8cgGjjYs
/////////////////////////////////////////

{
    // let kor = 30;
    // let eng = 40;
    // let math = 50;

    // // 객체 만들기1
    // // var exam = {
    // //     kor:kor,
    // //     eng:eng,
    // //     math:math
    // // };

    // // 객체 만들기2
    // // var exam = {
    // //     kor,
    // //     eng,
    // //     math
    // // };

    // // 객체 만들기3
    // let exam = {kor, eng, math, total(){
    //     return 10;
    // }};

    // console.log(exam.kor)
    // console.log(exam.total())

}

///////////////////////////////////////// 05 - Template String
// https://youtu.be/RFRoC3dv6vo
/////////////////////////////////////////

{

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

}


///////////////////////////////////////// 04 - const 키워드
// https://youtu.be/dZlc2T2s9ow
/////////////////////////////////////////

{
    // const N = 1;
    // const S = 5;

    // var walkTo = 5;
    // // S = 3; // Uncaught TypeError: Assignment to constant variable.

    // const add = function(a, b) {
    //  return a + b;
    // }

    // add = 3; // Uncaught TypeError: add is not a function
    // // const add : Assignment to constant variable.
    // console.log(add(3, 4));
}


///////////////////////////////////////// 03 - let 키워드 #2: 이젠 지역변수가 생겼다.
// https://youtu.be/P4ZmQZx0iyA
/////////////////////////////////////////

{
    // // 에러가 안남
    // {
    //     var a = 30;
    // }
    // console.log(a);

    // {
    //     let a = 30;
    //     console.log(a);
    // }


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
    
    // console.log(getValue(false));  // false case : undefined -> 변수는 선언은 되었다. 값(undefined)
}

///////////////////////////////////////// 02 - let 키워드 #1:변수 선언이 무의미한 문제
// https://youtu.be/MfqA3WWsM6g
/////////////////////////////////////////

{
    // {
    //     // var x = 30;
    //     let x = 30; // Uncaught SyntaxError: Identifier 'x' has already been declared
    //     console.log(x);
    // }
}

///////////////////////////////////////// 01 - 학습 개요
// https://youtu.be/ibPteaKu3C8
/////////////////////////////////////////

/**
 * 
 * ES6에서 큰 변화 (ES7, 8, 9 등 나옴)
 * 
 */
{
    
}