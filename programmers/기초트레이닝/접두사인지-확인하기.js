// https://school.programmers.co.kr/learn/courses/30/lessons/181906

// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때,
// is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 문자열도 반복문이 가능하다.
// 반복문 for문 재공부하기
// for while for-while 종류 확인해서 공부하기

function solution(my_string, is_prefix) {
  if (my_string.length < is_prefix.length) {
    0;
  }
  for (let i = 0; i < is_prefix.length; i++) {
    return is_prefix[i] === my_string[i] ? 1 : 0;
  }
}
console.log(solution('banana', 'bananan'));

function solution(my_string, is_prefix) {
  for (let i = 0; i < is_prefix.length; i++) {
    if (my_string[i] !== is_prefix[i]) {
      return 0;
    }
  }
  return 1;
}

// 왜 반대로하면 ? !== === 1을 추출하면 왜 안되는건지 반복문 공부해오기
// 연산자 등호 중에 != , = , == , === 공부해보면 알수잇을수도~?
