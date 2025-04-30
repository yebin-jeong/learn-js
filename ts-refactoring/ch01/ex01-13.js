/*
논리 연산자 &&, ||, !
*/

//논리 합(or)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var id = "yebin";
var invalidId = id.length < 4 || id.length > 12;
console.log("id 입력 조건에 맞지 않음", invalidId);

// 앞의 값이 참이면 앞의 값을 반환
// 앞의 값이 거짓이면 뒤의 값을 반환
// falsy: number 0, string '', boolean false, null, undefined
// truthy: 100, 'hello', true, ' '

console.log("hello" || "world");
console.log(90 || 30);
console.log(null || "world");
console.log(undefined || "world");
console.log(0 || 100);
console.log("" || "예빈");

// 논리곱(AND):
// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

id = null; // type은 object
console.log("글자수", id && id.length);
console.log("글자수", id?.length);
