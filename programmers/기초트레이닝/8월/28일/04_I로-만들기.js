// https://school.programmers.co.kr/learn/courses/30/lessons/181834

// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다.
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  return [...myString].map(a => (a.match(/^[l-z]/g) ? a : 'l')).join('');
}

console.log(solution('abcdevwxyz'));

// 문자열 부등호 비교 가능....;;;;; why?
function solution1(myString) {
  return [...myString].map(a => (a < 'l' ? 'l' : a)).join('');
}

console.log(solution1('abcdevwxyz'));
