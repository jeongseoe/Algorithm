// https://school.programmers.co.kr/learn/courses/30/lessons/181864

// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다.
// myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.
// 칭찬스티커 (replaceAll 찾아보기)

function solution(my_string, pat) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i] === 'A' ? 'B' : 'A';
  }

  return +answer.includes(pat);
}

console.log(solution('ABBAA', 'AABB'));
