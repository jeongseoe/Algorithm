// https://school.programmers.co.kr/learn/courses/30/lessons/181849

// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때,
// 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_str) {
  let sum = 0;
  let answer = num_str.split('');

  for (let i = 0; i < answer.length; i++) {
    sum += Number(answer[i]);
  }
  return sum;
}

console.log(solution('100000000'));

// 이것도 맞기는 한데, 다른 메서드가 있지않을까해서 찾아봤다.

function solution1(num_str1) {
  let sum = 0;

  num_str1.split('').forEach(num => {
    sum += Number(num);
  });
  return sum;
}

console.log(solution1('100000000'));

// 와.. 다른사람 풀이 보니까 reduce로도 가능하다.
function solution2(num_str2) {
  return [...num_str2].reduce((acc, cur) => acc + Number(cur), 0);
}
// 전개연산자 자체가 객체, 배열을 하나하나 넘기는 용도로 쓴다고 알고있는데,
// 문자열에 사용할 경우 하나하나 나눠서 배열에 담아줄 수 있다고한다..!
// 얕은복사-깊은복사 좀 찾아보기
// initialValue로 문자열을 숫자로 변환해준것이다.

console.log(solution2('231234'));
