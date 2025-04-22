/*
* 변수 호이스팅
  - 호이스팅 단계에서 var로 선언한 변수의 경우 선언만 되고 그 값은 undefined로 초기화 됨
  - let, const로 선언한 변수의 경우 호이스팅 단계에서 선언은 되지만 초기화가 되지 않기 때문에 
    선언 전에 접근하면 에러 발생 (undefined 값도 할당되지 않은 상태)
*/

// 호이스팅 단계에서 var 로 선언한 변수의 선언부만 처리됨
var add; // undefined


// 본 코드 실행 단계
console.log(add(10, 20));

// 표현식 방식의 함수 정의
add = function(x, y){
  return x + y;
};

console.log(add(10, 20));