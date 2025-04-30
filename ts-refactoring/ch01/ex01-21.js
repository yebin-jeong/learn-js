/*
반복문 - for문
*/

// 1부터 10까지 모든 수의 합계를 출력

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("합계", sum);

// 1부터 몇까지 더하면 10000이 넘을까?
sum = 0;
let count = 1;
while (sum < 10000) {
  sum += count;
  count++;
}
console.log(--count, sum);

// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1부터 10까지 홀수의 합계 출력 25
// 1부터 10까지 짝수의 합계 출력 30
let oddSum = 0;
let evenSum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log("짝수합: ", evenSum);
console.log("홀수합: ", oddSum);
