// 국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
let userName = "차차핑";
let kor = 100;
let eng = 90;
let math = 85;

let sum = kor + eng + math;
let avg = sum / 3;

console.log("총점", sum);
console.log("평균", avg);

// 객체로 만들기
const score = new Object();
score.userName = "차차핑";
score.kor = 100;
score.eng = 90;
score.math = 85;

score.sum = score.kor + score.eng + score.math;
score.avg = score.sum / 3;

console.log("총점", score.sum);
console.log("평균", score.avg);

// 하츄핑 만들기
const heart = new Object();
heart.userName = "하츄핑";
heart.kor = 100;
heart.eng = 97;
heart.math = 92;

heart.sum = heart.kor + heart.eng + heart.math;
heart.avg = heart.sum / 3;

console.log("총점", heart.sum);
console.log("평균", heart.avg);
