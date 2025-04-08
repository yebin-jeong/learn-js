/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notation
*/

const foo = {
  name: "제이슨핑",
  age: 7,
  job: "요정",
  married: true,
};

foo.email = "json@gmail.com";

console.log(foo["name"], foo["age"], foo.job, foo.married);
console.log(typeof foo, foo);
