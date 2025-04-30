/*
배열 생성, 읽기, 쓰기
*/

// const arr = new Array(1, 2, 3); // Array 생성자 함수
const arr = [1, 2, 3]; // JSON 표기법
// 지정한 배열의 마지막 요소를 추가
arr.push(10); // [ 1, 2, 3, 10 ]
arr[4] = 20; // [ 1, 2, 3, 10, 20 ]
arr[5] = 30; // [ 1, 2, 3, 10, 20, 30 ]
arr[1] = 100; // [ 1, 100, 3, 10, 20, 30 ]
arr[9] = 200; // [ 1, 100, 3, 10, 20, 30, , , , 200 ]

// 배열의 마지막에 새로운 데이터 추가
arr[arr.lenth] = 300;

console.log("배열의 길이", arr.length);
console.log("배열의 마지막 값", arr[arr.length - 1]);
console.log(typeof arr, arr);
