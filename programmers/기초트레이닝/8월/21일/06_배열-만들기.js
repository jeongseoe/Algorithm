// https://school.programmers.co.kr/learn/courses/30/lessons/181901

// 정수 n과 k가 주어졌을 때,
// 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(n, k) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      answer.push(i);
    }
  }

  return answer;
}

console.log(solution(10, 3));
