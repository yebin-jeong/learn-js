/*
제목: A+B
설명: 두 수를 입력받고 합을 출력하는 문제
제출: https://www.acmicpc.net/submit/1000

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A+B를 출력한다.

예제 입력 1
1 2

예제 출력 1
3
*/


const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);

const a = parseInt(fileData[0]);
const b = parseInt(fileData[1]);

console.log(a + b);