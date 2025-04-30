// 국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램

// 객체로 만들기
const score = {
  userName: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    // 총점을 반환하는 메서드(객체의 속성 > 메서드 / 아니면 함수)
    // TODO this = score, 메서드 내부에서 this가 사용될 때 this는 객체 자신을 가리킴
    // 객체의 메서드가 자신의 속성을 접근할 때 this 사용
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    // 평균을 반환하는 메서드
    return this.sum() / 3;
  },
};

console.log(score.kor, score.eng, score["math"]);
console.log("총점", score.sum());
console.log("평균", score.avg());
