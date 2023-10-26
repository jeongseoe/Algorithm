// https://school.programmers.co.kr/learn/courses/30/lessons/181830

// 이차원 정수 배열 arr이 매개변수로 주어집니다.
// arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
// 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록
// 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  let answer = arr;
  let 열 = arr[0].length;
  let 행 = arr.length;

  // 행이 열보다 길경우
  if (행 > 열) {
    // for (let i = 0; i < 행; i++) {
    //   for (let j = 0; j < 행 - 열; j++) {
    //     answer[i].push(0);
    //   }
    // }
    let 차이 = 행 - 열;
    let 차이배열 = Array(차이).fill(0);
    return arr.map(a => [...a, ...차이배열]);
  }

  // 행이 열보다 짧은 경우
  if (행 < 열) {
    let 차이 = 열 - 행;
    let 차이배열 = Array(열).fill(0);

    for (let i = 0; i < 차이; i++) {
      arr.push(차이배열);
    }
  }
  return answer;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);

// 전형적인 행렬 ...!
// 행열의 차이를 알아야함

// 1행 :  [572, 22, 37]
// 2행 : [287,726,384] ...
// 1열 [572,287,85,487]
// 2열 [22,726,137,13] ..
