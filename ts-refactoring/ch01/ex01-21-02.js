/*
for문
*/

/*
 *
 **
 ***
 ****
 *****
 */

const lines = 5;
for (let i = 0; i < lines; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

/*
 *****
 ****
 ***
 **
 *
 */

for (let i = 5; i >= 1; i--) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "❤️ ";
  }
  console.log(star);
}

/* 
    *
   **
  ***
 ****
***** 
*/

for (let i = 0; i < lines; i++) {
  let space = "";
  let star = "";
  for (let j = 0; j < lines-i-1; j++) {
    space += " ";
  }
  for (let j=0; j <= i; j++){
    star += "*";
  }
  console.log(space + star);
}
