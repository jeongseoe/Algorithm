// https://school.programmers.co.kr/learn/courses/30/lessons/181894

// 정수 배열 arr가 주어집니다.
// 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

function solution(arr) {
  let 첫번째 = arr.indexOf(2);
  let 마지막 = arr.lastIndexOf(2);

  // if (arr.includes(2)) return arr.slice(첫번째, 마지막 + 1);
  // else return [-1];

  return 첫번째 === -1 ? [-1] : arr.slice(첫번째, 마지막 + 1);
}

console.log(solution([1, 2, 1]));
