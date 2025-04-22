/*
 카운터 예제
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한 명 증가시킨다.
    this.count++; // this = myObj
    const that = this; // that = this = myObj
    const visit2 = function () {
      that.count++; // that = myObj
    };
    visit2();
  },
};

myObj.visit();
myObj.visit();
console.log("myObj", myObj.count);
console.log("window", count);
