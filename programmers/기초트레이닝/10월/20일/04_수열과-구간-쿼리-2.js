// https://school.programmers.co.kr/learn/courses/30/lessons/181923

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

function solution(arr, queries) {
  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];

    for (let j = s; j <= e; j++) {
      // console.log(Math.min(arr.slice(s, e + 1).filter(a => a > k)));

      if (k < j) {
        answer.push(Math.min(arr.slice(s, e).filter(a => a > k)));
      } else {
        answer.push(-1);
      }
    }
    return answer;
  }
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);

function solution1(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter(el => el > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
// omg 오름차순 정
// 구조분해 다시공부하자 ..(map 안에 구조분해 할당...?)

console.log(
  solution1(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
