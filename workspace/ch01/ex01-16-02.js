/*
if문을 사용하여 학점을 출력하세요.
*/

// score가 90 이상 100 이하이면 "A" 출력

// score가 80 이상 90 미만이면 "B" 출력

// score가 70 이상 80 미만이면 "C" 출력

// score가 60 이상 70 미만이면 "D" 출력

// score가 60 미만이면 "F" 출력

const fs = require("fs");
const fileData = fs.readFileSync(0).toString();

const score = parseInt(fileData);

if (score < 0 || score > 100) {
  console.log("0~100 사이의 값을 입력하세요.");
} else if (score < 60) {
  console.log("F");
} else if (score < 70) {
  console.log("D");
} else if (score < 80) {
  console.log("C");
} else if (score < 90) {
  console.log("B");
} else {
  console.log("A");
}
