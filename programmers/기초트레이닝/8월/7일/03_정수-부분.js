// https://school.programmers.co.kr/learn/courses/30/lessons/181850

// 실수 flo가 매개 변수로 주어질 때,
// flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

// parseInt (소수점 버리고 실수를 정수로 변환)
// Math.round() ( 반올림해주는 메소드 )
// roundXL(숫자, 자릿수) (지정한 소수점 이하에서 반올림을 한다.)

// Math.ceil() 얘는 올림 메서드
// Math.floor() 얘는 내림

// Math 메서드좀 찾아보고 공부해보면좋다.

function solution(flo) {
  return Math.floor(flo);
}
console.log(solution(1.42));
