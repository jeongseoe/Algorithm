// https://school.programmers.co.kr/learn/courses/30/lessons/181937

//정수 num과 n이 매개 변수로 주어질 때,
// num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num, n) {
  return Number(num % n === 0);
}

console.log(solution(34, 3));

// 간단하다. num나머지 n이 0이면 배수이고 1아니면 배수가 아닌 식을 쓰면된다.
