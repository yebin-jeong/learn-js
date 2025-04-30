/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을수 있을까?
*/

let day = 1;
let count = 1;
let sum = 0;

while (sum < 1000_0000) {
  sum += count;
  count = 2 * count;
  day++;
}

console.log(
  `${--day}일 동안 받았더니 ${sum}개 됐다. 내일은 ${count}개 받을 수 있겠군.`
);

// 30일 동안 몇 개의 쌀알을 모을 수 있는가?
day = 1;
count = 1;
sum = 0;

while (day <= 30) {
  sum += count;
  count = 2 * count;
  day++;
}

console.log(
  `${--day}일 동안 받았더니 ${sum}개 됐다. 내일은 ${count}개 받을 수 있겠군.`
);
