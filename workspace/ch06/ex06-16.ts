// 인터페이스 선언 병합
// ex06-15.ts 복사

(() => {
  // 할일 등록시 사용
  interface Todo {
    // id: string;
    title: string;
    content: string;
  }

  interface Todo {
    id: number; // type이 다르다면 동일한 속성을 지정할 수 없음
    title: string; // type이 같다면 동일한 속성도 상관 없음
    createAt: Date;
    done: boolean;
  }

  const todo: Todo = {
    id: 1,
    title: "할일",
    createAt: new Date(),
    done: true,
    content: "내용",
  };
  console.log(todo);
})();
