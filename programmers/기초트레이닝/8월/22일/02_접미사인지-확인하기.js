// https://school.programmers.co.kr/learn/courses/30/lessons/181908

// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때,
// is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_suffix) {
  if (my_string.length < is_suffix.length) {
    return 0;
  }

  for (let i = 1; i <= is_suffix.length; i++) {
    return is_suffix[is_suffix.length - i] === my_string[my_string.length - i]
      ? 1
      : 0;
  }
}

console.log(solution('banana', 'ana'));

// slice 의 방법
function solution1(my_string, is_suffix) {
  return +(my_string.slice(-is_suffix.length) === is_suffix);
}

console.log(solution1('banana', 'ana'));
