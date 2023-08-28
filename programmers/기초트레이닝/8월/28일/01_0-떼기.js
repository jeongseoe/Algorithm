// https://school.programmers.co.kr/learn/courses/30/lessons/181847

// 정수로 이루어진 문자열 n_str이 주어질 때,
// n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  return String(Number(n_str));
}

console.log(solution('0010'));

// 문자열을 숫자로 변경하면 앞에있는 숫자 0들은 사라지고 정수만 남기때문에
// 일단 숫자로 변환해서 0을제거하고 그 후에 문자열로 출력하게 함
