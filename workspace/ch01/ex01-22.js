/*
반복문 - break, continue
*/

// n부터 m까지의 정수 중에서 첫번째 짝수를 찾아서 출력하세요

const n = 1;
const m = 10;

for (let i = n; i < m; i++) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
}

// n부터 m까지 홀수만 출력하세요
for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log("홀수", i);
  }
}

// n부터 m까지 홀수와 짝수를 구분해서 출력하세요
for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log("홀수", i);
  }
  console.log("짝수", i);
}
