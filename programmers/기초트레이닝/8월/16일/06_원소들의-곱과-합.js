// https://school.programmers.co.kr/learn/courses/30/lessons/181929

// 정수가 담긴 리스트 num_list가 주어질 때,
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let 곱한거 = 1;
  let 제곱 = 0;

  for (let i = 0; i < num_list.length; i++) {
    곱한거 *= num_list[i];
    제곱 += num_list[i];
  }
  return 곱한거 < 제곱 ** 2 ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]));
