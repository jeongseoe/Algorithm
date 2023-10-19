// https://school.programmers.co.kr/learn/courses/30/lessons/181918

// 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.

// 변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.

// 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
// 위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.

function solution(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      i -= 1;
    }
  }
  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));

function solution1(arr) {
  let stk = [];
  let i = 0;

  // false일때까지 반복해준다. break를 따로 걸어두지않았음에도!!!
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i += 1;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i += 1;
      } else {
        stk.pop();
      }
    }
    return stk;
  }
}

console.log(solution([1, 4, 2, 5, 3]));
