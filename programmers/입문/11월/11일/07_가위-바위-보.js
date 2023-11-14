// https://school.programmers.co.kr/learn/courses/30/lessons/120839

// 가위는 2 바위는 0 보는 5로 표현합니다.
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

function solution(rsp) {
  let arr = rsp.split('');
  let answer = '';

  // for (let i = 0; i < rsp.length; i++) {
  //   if (arr[i] === '2') {
  //     answer += '0';
  //   } else if (arr[i] === '0') {
  //     answer += '5';
  //   } else answer += '2';
  // }

  arr.map(a => {
    if (a === '2') answer += '0';
    if (a === '0') answer += '5';
    if (a === '5') answer += '2';
  });
  return answer;
}

console.log(solution('2'));

function solution1(numbers) {
  let lank = numbers.sort((a, b) => a - b);

  let 앞부분 = lank[0] * lank[1];
  let 뒷부분 = lank[lank.length - 1] * lank[lank.length - 2];

  return 앞부분 > 뒷부분 ? 앞부분 : 뒷부분;
}

console.log(solution1([1, 2, -3, 4, -5]));
