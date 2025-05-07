/*
첫번째 구매 항목 출력(두부)하고 그 값을 양파로 수정
document.getElementById(id): id 속성으로 요소 선택
텍스트 노드의 nodeValue: 문자열 값
*/

// getElementById: id 속성으로 요소 선택
const shoppingList = document.getElementById('purchases'); // ul 요소 선택

// getElementsByTagName 사용: 모든 li 태그를 배열로 가져온 후 첫 번째 요소 선택
const liList = shoppingList.getElementsByTagName('li'); // 모든 li 요소를 배열로 가져옴
const firstElem = liList[0]; // 첫 번째 li 요소 선택

// firstChild를 사용하여 텍스트 노드 선택 (요소 노드의 실제 텍스트 내용)
const firstTextNode = firstElem.firstChild; // 텍스트 노드 객체 선택
console.log('제일 먼저 구매할 항목', firstTextNode.nodeValue); // nodeValue로 실제 텍스트 값 출력

// nodeValue를 사용하여 텍스트 내용 수정
firstTextNode.nodeValue = '양파';