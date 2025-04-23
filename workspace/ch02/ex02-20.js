/**
 * 국어,영어, 수학 점수를 받아서 총점과 평균을 계산할 수 있는 객체를 생성
 * @param {number} kor
 * @param {number} eng
 * @param {number} math
 */
const Score = function (kor, eng, math) {
  this.kor = kor;
  this.eng = eng;
  this.math = math;

  this.sum = function () {
    return this.kor + this.eng + this.math;
  };
  this.avg = function () {
    return this.sum() / 3;
  };
};
const baro = new Score(100, 90, 80);
const rara = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하세요.
console.log(baro.sum(), baro.avg()); // 270 90
console.log(rara.sum(), rara.avg()); // 230 76.666

// 수학점수를 10점 올린 후 총점과 평균을 출력하세요.
baro.math += 10;
rara.math += 10;

console.log(baro.sum(), baro.avg()); // 280 93.333
console.log(rara.sum(), rara.avg()); // 240 80
