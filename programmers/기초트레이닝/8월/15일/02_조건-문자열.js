// https://school.programmers.co.kr/learn/courses/30/lessons/181934

// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
//"<", "!" : n < m

//두 문자열 ineq와 eq가 주어집니다.
// ineq는 "<"와 ">"중 하나고,
// eq는 "="와 "!"중 하나입니다.
// 그리고 두 정수 n과 m이 주어질 때,
// n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

function solution(ineq, eq, n, m) {
  return Number(eq === '!' ? eval(n + ineq + m) : eval(n + ineq + eq + m));
}

console.log(solution('>', '!', 41, 78));

// eval은 내장함수다.
// 수학식이 문자열 형식으로 들어오면 해당 수식을 계산한 결과값을 반환한다.
// 값이 없다면 undefined를 반환한다.
// eval 은 전역객체의 함수 속성이다.
// 인자는 문자열로 들어와야한다.

// 자바스크립트로  eval을 쓰면 보안이 굉장히 안좋아진다
// if문으로 변경필요 .........
// new Function('a','b', 'return a+b') 써보기

// new도 알아보기!

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function
