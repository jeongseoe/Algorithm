// https://school.programmers.co.kr/learn/courses/30/lessons/181843

// 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다.
// 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만,
// "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
// 문자열 my_string과 target이 매개변수로 주어질 때,
// target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

console.log(solution('banana', 'nana'));

// indexOf 는 인자로 전달된 문자열이 존재한다면 그 문자열이 위치한 index를 리턴합니다. 존재하지 않는다면 -1를 리턴합니다
// includes 는 해당 글자가 있는지를 확인해준다.

// 불리언 값을 Number로 변환해도 우리가 출력하려던 1과 0을 출력해낼 수 있다.
// Number(my_string.includes(target));
