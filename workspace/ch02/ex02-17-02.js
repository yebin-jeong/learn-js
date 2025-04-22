/*
 카운터 예제
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한 명 증가시킨다.
    this.count++; // this = myObj
    const visit2 = function () {
      this.count++; // this = myObj
    };
    visit2.call(this);
  },
};

myObj.visit();
myObj.visit();
console.log("myObj", myObj.count);
console.log("window", count);
