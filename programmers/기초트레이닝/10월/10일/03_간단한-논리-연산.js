// https://school.programmers.co.kr/learn/courses/30/lessons/181917

// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때,
// 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

// (x1 ∨ x2) ∧ (x3 ∨ x4)

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

console.log(solution(false, true, true, true));

// .. 이부분은 이해가 안되서 찾아봤는데,
// 둘다 같아야지만 아니면 둘중 하나만 같다면을 이해햇다면 연산자로 풀 수 있는 문제였다.
