/*
반환값이 있는 함수
*/

add();
add();

add100(10);
add100(20);

sum(10, 20);
sum(30, 40);

// 10 + 100의 결과를 출력하는 함수 (add)
function add() {
  console.log(100 + 10);
}

// 전달받은 숫자와 100의 합계를 출력하는 함수 (add100)
function add100(num) {
  console.log(num + 100);
}

// 전달받은 두 숫자의 합계를 출력하는 함수 (sum)
function sum(x, y) {
  console.log(x + y);
}

function getSum(n1, n2) {
  const result = n1 + n2;
  return result;
}

let returnVal = getSum(40, 50);
console.log(returnVal);
