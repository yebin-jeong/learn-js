/* 

if문의 다양한 사용 예제
연산자는 +, -, *, / 만 입력가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
*/

// 지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램

const operator = "+";
const n1 = 10;
const n2 = 20;

if (operator === "+") {
  console.log(n1 + n2);
} else if (operator === "-") {
  console.log(n1 - n2);
} else if (operator === "*") {
  console.log(n1 * n2);
} else if (operator === "/") {
  console.log(n1 / n2);
} else console.log("잘못된 입력");

/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const day = 4;

if (day == 1) {
  console.log("월요일");
} else if (day == 2) {
  console.log("화요일");
} else if (day == 3) {
  console.log("수요일");
} else if (day == 4) {
  console.log("목요일");
} else if (day == 5) {
  console.log("금요일");
} else if (day == 6) {
  console.log("토요일");
} else if (day == 7) {
  console.log("일요일");
} else console.log("잘못된 입력");

/*
1 ~ 12 사이의 월을 받아서 게절을 출력하는 프로그램
봄: 3 ~ 5월, 여름: 6 ~ 8월, 가을: 9 ~ 11월, 겨울: 12 ~ 2월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const month = 1;

if (month >= 3 && month <= 5) {
  console.log("봄");
} else if (month >= 6 && month <= 8) {
  console.log("여름");
} else if (month >= 9 && month <= 11) {
  console.log("가을");
} else if (month == 12 || (month > 0 && month <= 2)) {
  console.log("겨울");
} else console.log("잘못된 입력");
