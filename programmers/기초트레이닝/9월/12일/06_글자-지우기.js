// https://school.programmers.co.kr/learn/courses/30/lessons/181900

// 문자열 my_string과 정수 배열 indices가 주어질 때,
// my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고
// 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join('');
}

console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3]));

// indices 를 반복문으로 돌려서 문자열로 넣으면어떨지?
// join메서드를 따로 쓰지않아도된다.
function solution1(my_string, indices) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer += my_string[i];
    }
  }
  return answer;
}

console.log(solution1('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3]));
