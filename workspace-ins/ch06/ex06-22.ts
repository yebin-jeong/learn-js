// 타입 단언

(()=>{
  // number 타입이나 string 타입을 받아서 그대로 리턴하는 함수
  // 리턴값은 string | number 타입으로 추론
  function getMsg(msg: string | number) {
    return msg;
  }

  // FIXME 리턴값이 number가 되도록 타입 단언을 사용해서 에러를 없애세요.
  const msg1: number = getMsg(123.456) as number;
  console.log(msg1.toFixed(2));

  // FIXME 리턴값이 string이 되도록 타입 단언을 사용해서 에러를 없애세요.
  const msg2 = getMsg('hello') as string;
  console.log(msg2.toUpperCase());

})();