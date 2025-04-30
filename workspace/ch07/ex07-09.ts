// 내장 객체 - Date

(() => {
  // 오늘 날짜
  const today = new Date();
  console.log(today);

  console.log(today.getFullYear());
  console.log(today.getMonth() + 1); // 0부터 시작
  console.log(today.getDate());
  console.log(today.getDay()); // 0: 일요일. 1: 월요일, ..., 6:토요일
  console.log(today.getHours());
  console.log(today.getMinutes());
  console.log(today.getSeconds());

  console.log(today.getTime()); // 1970년 1월 1일 00:00:00 UTC부터 현재까지의 시간 차이를 밀리초 단위로 반환
})();
