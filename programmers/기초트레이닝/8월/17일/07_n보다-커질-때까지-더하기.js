// https://school.programmers.co.kr/learn/courses/30/lessons/181884

// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다.
// numbers의 원소를 앞에서부터 하나씩 더하다가
// 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(numbers, n) {
  let 모든원소합 = 0;

  for (let i = 0; i < numbers.length; i++) {
    모든원소합 += numbers[i];

    if (모든원소합 > n) {
      break;
    }
  }
  return 모든원소합;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));

// 모든 조건문에 break 사용가능함
// return 과 비슷하다고 생각하면댐
// while 문으로도 한번 써보자.

function solution1(numbers, n) {
  let 모든합 = 0;

  let i = 0;
  while (i < numbers.length) {
    모든합 += numbers[i];
    i++;

    if (모든합 > n) {
      break;
    }
  }
  return 모든합;
}
console.log(solution1([34, 5, 71, 29, 100, 34], 123));
