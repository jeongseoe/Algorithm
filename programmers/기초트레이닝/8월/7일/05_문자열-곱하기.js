// https://school.programmers.co.kr/learn/courses/30/lessons/181940

// 문자열 my_string과 정수 k가 주어질 때,
//  my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

// repeat() 반복 메서드 공부하기
// 다른방식있는지 찾아보기 (for문으로도 되긴하는데, 방법을 찾아보자)

function solution(my_string, k) {
  return my_string.repeat(k);
}
console.log(solution('string', 4));
