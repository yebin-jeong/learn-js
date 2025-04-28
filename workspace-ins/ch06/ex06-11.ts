// 인터페이스 사용 - 클래스의 타입 지정

(()=>{

  // 자바스크립트 클래스 선언
  // class HighSchool {
  //   constructor(kor, eng) {
  //     this.kor = kor;
  //     this.eng = eng;
  //   }
  //   sum() {
  //     return this.kor + this.eng;
  //   }
  //   avg() {
  //     return this.sum() / 2;
  //   }
  // }

  // FIXME HighSchool 클래스가 구현해야 하는 Score 인터페이스 선언
  interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  // FIXME 타입 스크립트 클래스 선언(인터페이스 지정)
  class HighSchool {
    kor: number;
    eng: number;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    sum(): number {
      return this.kor + this.eng;
    }
    avg() { // 타입을 생략할 경우 타입 추론에 의해서 리턴값을 파악하고 적절한 타입을 추론
      return this.sum() / 2;
    }
  }
  
  // 총점과 평균을 출력하는 함수
  function printScore(score: Score) {
    console.log(score.sum(), score.avg());
  }

  const haru: Score = new HighSchool(100, 90);
  printScore(haru);
  
})();