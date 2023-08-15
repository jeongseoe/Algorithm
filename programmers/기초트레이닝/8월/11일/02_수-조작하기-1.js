// https://school.programmers.co.kr/learn/courses/30/lessons/181926

// 정수 n과 문자열 control이 주어집니다.
// control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

function solution(n, control) {
  let 나눈것 = control.split('');
  let 답 = n;

  for (let i = 0; i < 나눈것.length; i++) {
    if (나눈것[i] === 'w') 답 += 1;
    else if (나눈것[i] === 's') 답 -= 1;
    else if (나눈것[i] === 'd') 답 += 10;
    else 답 -= 10;
  }
  return 답;
}

// console.log(solution(0, 'wsdawsdassw'));

// {key : value}
// forEach로 풀어봐야함
// forEach 공부하기

function solution1(n, control) {
  let answer = n;

  const A = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  control.split('').forEach(c => (answer += A[c]));
  return answer;
}

console.log(solution1(0, 'wsdawsdassw'));

// A의 key값이 인덱스로 작동된다.
