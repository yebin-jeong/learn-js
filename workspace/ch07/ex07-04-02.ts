// 내장 객체 - Math

(() => {
  // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
  function rollDice(): number {
    // Math.random()은 0.0 이상 1.0 미만의 랜덤한 실수를 반환합니다.
    // Math.floor()는 소수점 이하를 버리고 정수 부분만 반환합니다.
    // Math.random() * 6은 0.0 이상 6.0 미만의 랜덤한 실수를 생성합니다.
    // Math.floor(Math.random() * 6) + 1은 1부터 6까지의 랜덤한 정수를 생성합니다.
    return Math.floor(Math.random() * 6) + 1;
  }

  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력

  // 로또 번호를 생성하는 함수
  function generateLottoNumbers(): number[] {
    const numbers = new Set<number>();
    while (numbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  console.log(generateLottoNumbers()); // 1부터 45까지의 숫자 중 6개의 랜덤 숫자 출력
  console.log(generateLottoNumbers()); // 1부터 45까지의 숫자 중 6개의 랜덤 숫자 출력
  console.log(generateLottoNumbers()); // 1부터 45까지의 숫자 중 6개의 랜덤 숫자 출력
})();
