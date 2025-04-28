"use strict";
// 기본 타입
(() => {
    let str = "hello";
    let age = 9;
    let done = true;
    // done = 'false'; // 컴파일 에러
    let nullVal = null;
    let emptyVal;
    let todo = { title: "TypeScript 공부", done: false };
    let todoList = ["JavaScript", "TypeScript"]; // 문자열로 구성된 배열
    let todoList2 = ["React", "Next.js"]; // 문자열로 구성된 배열
    // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입
    let items = ["타스핑", 10];
    let userName = "이일구";
    userName = 219; // tsc가 타입 체크를 하지 않음
    // unknown: 값을 저장할 때는 아무타입의 값이나 저장이 가능하지만 사용할 때 추가적인 타입 체크 코드를 요구
    let userName2 = "TSping";
    userName2 = 540;
    // console.log(userName.toUpperCase());
    if (typeof userName2 === "string") {
        // 타입 가드
        console.log(userName2.toUpperCase());
    }
})();
