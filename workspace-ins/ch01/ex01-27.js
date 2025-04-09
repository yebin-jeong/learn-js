/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

// const arr = [1, 2, 3, 4];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 배열의 모든 요소 출력(for)
console.log('for');
for (let i = 0; i < arr.length; i++) { // i=0, i=1, i=2 경우에 for 문이 실행됨
  const elem = arr[i]; // arr[0], arr[1], arr[2]
  console.log(i, elem); // 0 10, 1 20, 2 30
}

// 배열 모든 요소의 합계, 홀수값의 합계, 짝수값의 합계를 출력
let sum = 0;
let oddSum = 0;
let evenSum = 0;

for (let i=0; i < arr.length; i++){
  const num = arr[i];
  sum += num; // 0 + 1 + 2 + 3 + 4
  if (num % 2 === 0) { // 짝수
    evenSum += num;
  } else { // 홀수
    oddSum += num;
  }
}

console.log('합계', sum);
console.log('홀수 합계', oddSum);
console.log('짝수 합계', evenSum);