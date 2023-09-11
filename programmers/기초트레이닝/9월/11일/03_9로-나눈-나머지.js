// https://school.programmers.co.kr/learn/courses/30/lessons/181914

// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때,
// 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

function solution(number) {
  return [...number].reduce((a, c) => a + +c) % 9;
}

console.log(solution('123'));

function solution1(number) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    answer += Number(number[i]);
  }
  return answer % 9;
}

console.log(solution1('78720646226947352489'));

// 정수 크기 제한 늘려주는 메소드
//
const solution3 = number => BigInt(number) % 9n;

console.log(solution3('78720646226947352489'));
