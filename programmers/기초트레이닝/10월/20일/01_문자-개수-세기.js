// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
// my_string에서 'A'의 개수, my_string에서 'B'의 개수,
// ..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,
// ..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  let answer = [];

  let 알파벳 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  // // 26개씩 총 52개임

  let arr = Array(52).fill(0);
  my_string.split('').map(a => (arr[알파벳.indexOf(a)] += 1));
  return arr;
}

console.log(solution('Programmers'));
