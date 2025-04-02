/*
반복문 - while문
*/

// 대입 연산자 +=을 이용해서 1부터 10까지 모든 수의 합계를 출력하세요.

// 출력 결과
// 55

let i = 1;
let sum = 0;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);
