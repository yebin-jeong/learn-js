/*
나머지 매개변수(Rest parameters)
*/

function fn(...args) {
  console.log(args);
  for (let arg of args) {
    console.log(arg);
  }
}

fn();
fn(1);
fn(1, 2);
fn(1, 2, 3);
fn(1, 2, 5, 465, 324654, 34654, 65465321, 654, 21354);
