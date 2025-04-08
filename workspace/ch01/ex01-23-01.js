/*
new Object() - 생성자 함수로 객체 생성
*/

// 회원의 속성
const userName = "몰라핑";
const userNo = 3;
const userGender = "female";
const userLevel = "diamond";
const userPassword = "1234";
const userAge = 30;
const userEmail = "love@gmail.com";

// 몰라핑 회원의 속성(객체, object)
const user1 = new Object();
user1.userName = "몰라핑";
user1.userNo = 3;
user1.userGender = "female";
user1.userLevel = "diamond";
user1.userPassword = "1234";
user1.userAge = 30;
user1.userEmail = "love@gmail.com";

// 예빈핑 회원의 속성(객체, object)
const user2 = new Object();
user2.userName = "예빈핑";
user2.userNo = 3;
user2.userGender = "female";
user2.userLevel = "diamond";
user2.userPassword = "12434";
user2.userAge = 8;
user2.userEmail = "rainbow@gmail.com";

console.log(user2.userName);
