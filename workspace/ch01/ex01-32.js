/*
매개변수를 가진 함수 - 도어락

올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.
*/

function doorLock(password = "") {
  // null, undefined 또는 숫자 등 비문자열 값 방지
  const pwd = "1234";
  const subPassword = password.slice(-pwd.length); // slice는 배열 또는 문자열만 가능
  if (subPassword === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("삐삐핑 출동");
  }
}
doorLock("54132141234");
doorLock();
