// https://school.programmers.co.kr/learn/courses/30/lessons/181882

// 정수 배열 arr가 주어집니다.
// arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고,
//  50보다 작은 홀수라면 2를 곱합니다.
// 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(arr) {
  return arr.map(a => {
    if (a >= 50 && a % 2 === 0) return a / 2;
    if (a < 50 && a % 2 === 1) return a * 2;
    return a;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98]));
