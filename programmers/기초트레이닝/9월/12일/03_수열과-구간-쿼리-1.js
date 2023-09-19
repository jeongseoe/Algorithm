// https://school.programmers.co.kr/learn/courses/30/lessons/181883

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
// queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.

// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

function solution(arr, queries) {
  let 복사본 = [...arr];

  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    for (let j = s; j <= e; j++) {
      복사본[j] += 1;
    }
  }
  return 복사본;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
