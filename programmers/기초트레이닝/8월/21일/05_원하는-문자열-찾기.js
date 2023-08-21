// https://school.programmers.co.kr/learn/courses/30/lessons/181878

// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다.

// myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.
// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

function solution(my_string, pat) {
  let 동일하게변경1 = my_string.toUpperCase();
  let 동일하게변경2 = pat.toUpperCase();

  return +동일하게변경1.includes(동일하게변경2);
}

console.log(solution('AbCdEfG', 'aBc'));

// 일단 대소문자 상관없이 확인한다고해서
// 전부 대문자로 변경한 후 확인했습니당
