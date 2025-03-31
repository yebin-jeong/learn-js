/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

console.log(a > d);
console.log(a < d);
console.log(a <= d);
console.log(a >= d);

console.log(a == c);
console.log(a === c);

console.log("ch05" > "ch01"); // 사전 순으로 비교, true
console.log("ch12" >= "ch2"); // false
console.log("ch12" >= "ch123"); // false
