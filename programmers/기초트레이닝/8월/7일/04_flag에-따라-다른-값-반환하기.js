// https://school.programmers.co.kr/learn/courses/30/lessons/181933

// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때,
// flag가 true면 a + b를
// false면 a - b를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, falg) {
  return falg ? a + b : a - b;
}
console.log(solution(-4, 7, true));

// 조건에 === true 를 굳이 하지않아도 인정됨
