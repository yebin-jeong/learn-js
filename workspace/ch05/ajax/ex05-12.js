import { appendImages } from "./utils.js";
// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용
const url = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector("button");
btn?.addEventListener("click", getImages);
function getImages() {
    // Ajax 프로그래밍 순서
    // 1. XMLHttpRequest 객체 생성
    const xhr = new XMLHttpRequest();
    // 2. 요청 준비(open)
    xhr.open("GET", url, true);
    // 4. 응답 데이터 처리
    xhr.addEventListener("load", function () {
        const result = this.responseText; // xhr.responsText 쓰면 클로저가 생성됨
        console.log(result);
        const data = JSON.parse(result);
        console.log(data);
        appendImages(data);
    });
    // 3. 서버에 요청(send)
    xhr.send();
}
