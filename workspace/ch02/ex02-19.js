/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
*/

// window.name='global'; // window - 브라우저가 가지고 있는 전역 객체
// global.name = 'global' // gloabal - Node.js가 가지고 있는 전역 객체
globalThis.name = "global"; // 브라우저는 window,  Node.js는 global 객체

const getPingName = function () {
  return this.name;
};
// const baro = new Object();
// baro.name='바로핑';
// baro.age=9;
// baro.getName=getPingName;

// const rara = {
//   name : '라라핑',
//   age:8,
//   getName:getPingName
// }

// const copyPing = {
//     name : '복사핑',
//     age:8,
//     getName:getPingName
//   }

//객체를 생성해서 반환하는 함수 (생성자함수)
function Ping(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };
}

/**
 * new의 동작
 * 1. 빈 객체를 가리키는 this 생성
 * 2. this를 생성자 함수에 전달
 * 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
 */

const baro = new Ping("바로핑", 9);
const rara = new Ping("라라핑", 5);
const copyPing = new Ping("카피핑", 4);

// 함수 호출하는 방법 1 : 일반 함수로 호출 ( 이 때 this는 window 객체)
console.log(getPingName());

// 함수 호출하는 방법 2 : 메서드로 호출 ( 이 때 this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName()); // getName()의 this는 baro
console.log(rara.age, rara.getName()); // getName()의 this는 rara
console.log(copyPing.age, copyPing.getName()); // getName()의 this는 copyPing

console.log(getPingName()); //this = window
console.log(getPingName.call(baro)); //this = baro
console.log(baro.getName.apply(rara)); //this = rara
console.log(rara.getName.apply(globalThis)); //this = window

//call, apply 디스의 명시적변환
