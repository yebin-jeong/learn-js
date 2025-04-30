/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 배열의 모든 요소 출력(for)
console.log("for");
for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  console.log(i, elem);
}

// 배열 모든 요소의 합계, 홀수/짝수 값의 합계
let sum = 0;
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (arr[i] % 2 == 0) {
    evenSum += arr[i];
  } else {
    oddSum += arr[i];
  }
}
console.log("총 합계: ", sum);
console.log("홀수 값의 합계: ", oddSum);
console.log("짝수 값의 합계: ", evenSum);

// for-of (index는 사용하지 않고 배열 요소의 값만 꺼내고 싶을 때)
for (let elem of arr) {
  console.log(elem);
}

// for
for (let i = 0; i < arr.length; i++) {
  let elem = arr[i];
  console.log(elem);
}

// for-in 굳이?
for (let prop in arr) {
  console.log(prop, arr[prop]);
}
