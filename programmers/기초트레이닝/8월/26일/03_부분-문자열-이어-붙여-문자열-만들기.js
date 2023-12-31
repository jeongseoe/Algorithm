// https://school.programmers.co.kr/learn/courses/30/lessons/181911

// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
// parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
// 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, parts) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].slice(parts[i][0], parts[i][1] + 1);
  }

  return answer;
}
console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);

console.log('12345'.slice(1, 2));
// => 2 만 출력됨 2, 3 이 아니고

// 헤맸던 부분
// slice 가 start 인자는 포함하고 end 인자는 포함하지 않는다는 점
function solution3(my_string, parts) {
  return parts
    .map(([a, b], i) => {
      return my_string[i].slice(a, b + 1);
    })
    .join('');
}

console.log(
  solution3(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
