// https://school.programmers.co.kr/learn/courses/30/lessons/181874

// 문자열 myString이 주어집니다.
// myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고,
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

function solution(my_string) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i].match(/a/gi)) {
      answer += my_string[i].toUpperCase();
    } else {
      answer += my_string[i].toLowerCase();
    }
  }
  return answer;
}

console.log(solution('abstract algebra'));

function solution1(my_string) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    my_string[i].match(/a/gi)
      ? (answer += my_string[i].toUpperCase())
      : (answer += my_string[i].toLowerCase());
  }
  return answer;
}

console.log(solution1('abstract algebra'));

function solution3(myString) {
  return [...myString]
    .map(a => (a === 'a' || a === 'A' ? a.toUpperCase() : a.toLowerCase()))
    .join('');
}
console.log(solution3('PrOgRaMmErS'));

// replace / replaceAll 차이 찾아보기
function solution3(myString) {
  let 에이 = /a/g;

  return myString.toLowerCase().replace(에이, 'A');
}
console.log(solution3('PrOgRaMmErS'));
