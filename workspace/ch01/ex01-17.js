/*
if-else문
*/

/*
if-else문

if(조건식) {
    조건식이 참일 때 실행할 코드;
    조건식이 참일 때 실행할 코드;
    ......
} else {
    조건식이 거짓일 때 실행할 코드;
    조건식이 거짓일 때 실행할 코드;
    ......
}
*/

const num = 5;
if (num > 0) {
  console.log("양수");
} else {
  if (num < 0) {
    console.log("음수");
  } else {
    console.log(0);
  }
}

const password = 12334;
if (password === 1234) {
  console.log("로그인 성공!");
} else {
  console.log("로그인 실패");
}

const num2 = 342340;
if (num2 % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}
