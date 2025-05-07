"use strict";
// 비동기 함수
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// ex08-06.ts 복사
(() => {
    function f1() {
        console.log("\t\t3. f1 호출됨.");
        const delay = Math.floor(Math.random() * 1000 * 10);
        console.log(`\t\t4. ${delay}ms 동안 작업중...`);
        setTimeout(() => {
            console.log("\t\t f1 작업 완료.", delay);
        }, delay);
        console.log("\t\t5. f1 리턴됨.");
    }
    function test() {
        console.log("\t2. test 호출됨.");
        f1();
        console.log("\t6. test 리턴됨");
    }
    // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
    console.log("1. 작업 시작.");
    test();
    console.log("7. 작업 종료.");
})();
