// https://school.programmers.co.kr/learn/courses/30/lessons/181892

// 정수 리스트 num_list와 정수 n이 주어질 때,
// n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  return num_list.slice(n - 1, num_list.length);
}

console.log(solution([2, 1, 6], 3));

// array.slice(시작점(인덱스), 끝점인덱스)
// 인덱스라는 걸 감안하고 n-1 을 적용했다.
// num_list.length 여기에 적용안한 이유는 어차피 없으니까 빈값으로 들어오기떄문이다
