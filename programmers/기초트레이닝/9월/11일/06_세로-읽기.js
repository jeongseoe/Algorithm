// https://school.programmers.co.kr/learn/courses/30/lessons/181904

// 문자열 my_string과 두 정수 m, c가 주어집니다.
// my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, m, c) {
  let answer = '';

  for (let i = 0; i < my_string.length / m; i++) {
    answer += my_string[i * m + c - 1];
  }
  return answer;
}

console.log(solution('ihrhbakrfpndopljhygc', 4, 2));

// 첫 칭찬(아무 뒤에 얘기없는)
