// https://school.programmers.co.kr/learn/courses/30/lessons/181935

// 양의 정수 n이 매개변수로 주어질 때,
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
//  n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는
// solution 함수를 작성해 주세요.

function solution(n) {
  const result = [];

  if (n % 2 === 0) {
    for (let i = n; i > 0; i--) {
      if (i % 2 === 0) result.push(i);
    }
    return result.reduce((acc, cur) => acc + cur ** 2, 0);
  } else {
    for (let i = n; i > 0; i--) {
      if (i % 2 === 1) result.push(i);
    }
    return result.reduce((acc, cur) => acc + cur, 0);
  }
}

console.log(solution(7));

function solution1(n) {
  if (n % 2 === 0) {
    for (let i = n; i > 0; i--) {
      if (i % 2 === 0) return (i += i) ** 2;
    }
  } else {
    for (let i = n; i > 0; i--) {
      if (i % 2 === 1) return (i += i);
    }
  }
}

console.log(solution1(7));

function solution2(n) {
  let 짝수그릇 = 0;
  let 홀수그릇 = 0;

  for (let i = n; i > 0; i--) {
    if (i % 2 === 0) {
      짝수그릇 += Math.pow(i, 2);
    } else {
      홀수그릇 += i;
    }
  }

  return n % 2 === 0 ? 짝수그릇 : 홀수그릇;
}

console.log(solution2(10));
