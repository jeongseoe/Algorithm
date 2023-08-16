// https://school.programmers.co.kr/learn/courses/30/lessons/181910

// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  return my_string.substr(my_string.length - n);
}

console.log(solution('ProgrammerS123', 11));

// str.substr(start[, length])
// substr("시작 위치", "길이") 또는 substr("시작 위치")
// https://gent.tistory.com/414
// 블로그 참고해보기

function solution1(my_string, n) {
  return my_string.slice(-n);
}
console.log(solution1('ProgrammerS123', 11));
