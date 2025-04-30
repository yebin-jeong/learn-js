/*
증감 연산자 a++, a--, ++a, --a
*/

var cnt = 0;
console.log(cnt);

cnt = cnt + 1;
cnt += 1;
cnt++;

console.log(cnt);
console.log(cnt++);
console.log(++cnt);

var sum = cnt++ + 10;
console.log(sum);

sum = ++cnt + 10;
console.log(sum);
