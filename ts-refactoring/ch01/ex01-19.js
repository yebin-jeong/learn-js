/*
switch문
*/

const pingName = "하츄핑";
let modifier = "";

switch (pingName) {
  case "하츄핑":
    modifier = "사랑의";
    break;
  case "포실핑":
    modifier = "포실포실";
    break;
  case "눈꽃핑":
    modifier = "얼음공주";
    break;
  case "꾸래핑":
    modifier = "긍정의";
    break;
  case "빛나핑":
    modifier = "반짝반짝";
    break;
  case "머핑":
    modifier = "달콤한";
    break;
  default:
    modifier = "모르는";
}

console.log(`${modifier} ${pingName}`);
