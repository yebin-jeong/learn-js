/*

for 문을 이용해서 구구단 작성
*/

// const fs = require("fs");
// const fileData = fs.readFileSync(0).toString();

// const n = parseInt(fileData);

// for (let i = 1; i < 10; i++) {
//   let a = n * i;
//   console.log(`${n} * ${i} = ${a}`);
// }

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   console.log();
// }

for (let i = 1; i < 10; i++) {
  let arr = "";
  for (let j = 2; j < 10; j++) {
    arr += `${j} * ${i} = ${i * j}`.padEnd(12);
  }
  console.log(arr);
}
