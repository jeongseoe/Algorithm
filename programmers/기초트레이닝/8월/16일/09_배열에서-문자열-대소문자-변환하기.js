// https://school.programmers.co.kr/learn/courses/30/lessons/181875

// 문자열 배열 strArr가 주어집니다.
// 모든 원소가 알파벳으로만 이루어져 있을 때,

// 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로,
// 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  let answer = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      answer.push(strArr[i].toLowerCase());
    } else {
      answer.push(strArr[i].toUpperCase());
      ㅌ;
    }
  }
  return answer;
}

console.log(solution(['AAA', 'BBB', 'CCC', 'DDD']));
