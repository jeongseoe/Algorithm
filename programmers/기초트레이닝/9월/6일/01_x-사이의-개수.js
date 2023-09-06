// https://school.programmers.co.kr/learn/courses/30/lessons/181867

// 문자열 myString이 주어집니다.
// myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  return myString.split('x').map(a => a.length);
}

console.log(solution('oxooxoxxox'));

// split() 문자열을 일정한 구분자로 잘라서 배열로 저장해주는 함수다.
// 'x' 로 구분자로 정해서 배열로 나눈 후 map 을 이용해서 length 값을 구하면된다.
