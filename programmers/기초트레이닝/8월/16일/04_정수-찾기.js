// https://school.programmers.co.kr/learn/courses/30/lessons/181840

// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때,
// num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  return Number(num_list.includes(n));
}

console.log(solution([1, 2, 3, 4, 5], 3));

// filter써보면 좋음 공부해보자 !!
