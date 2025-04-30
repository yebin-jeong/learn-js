// 주요 내장 함수 - setTimeout

(()=>{

  console.log('시작');

  const timerId = setTimeout((a: number, b: number) => {
    console.log('3초 후에 실행됩니다.', a + b);
  }, 1000*3, 10, 20);

  console.log('종료');

  // timeout 작업 취소
  clearTimeout(timerId);
  
})();


