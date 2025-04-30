// 1부터 10까지 홀수의 합계 출력

// 1부터 10까지 짝수의 합계 출력
let oddSum = 0;
let evenSum = 0;
let i = 1;

while (i <= 10) {
  if (i % 2 === 1) {
    // 홀수 체크
    oddSum += i;
  } else {
    // 짝수 체크
    evenSum += i;
  }
  i++;
}

console.log("홀수합계:", oddSum);
console.log("짝수합계:", evenSum);
