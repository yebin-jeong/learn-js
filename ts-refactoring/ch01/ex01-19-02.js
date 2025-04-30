/*
switch-case문을 사용하여 학점을 출력하세요.
*/

// score가 90 이상 100 이하이면 "A" 출력

// score가 80 이상 90 미만이면 "B" 출력

// score가 70 이상 80 미만이면 "C" 출력

// score가 60 이상 70 미만이면 "D" 출력

// score가 60 미만이면 "F" 출력

const score = 88;

if (score < 0 || score > 100) {
  console.log("잘못된 입력값");
} else {
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      console.log("A");
      break;
    case 8:
      console.log("B");
      break;
    case 7:
      console.log("C");
      break;
    case 6:
      console.log("D");
      break;
    default:
      console.log("F");
  }
}
