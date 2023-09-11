// https://school.programmers.co.kr/learn/courses/30/lessons/181931

// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다.
// 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때,
// 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

function solution(a, d, included) {
  let answer = [a];

  for (let i = 0; i < included.length; i++) {
    answer.push(answer[i] + d);
  }
  return answer.filter((_, i) => (a = included[i])).reduce((a, c) => a + c);
}

console.log(solution(3, 4, [true, false, false, true, true]));

function solution1(a, d, included) {
  let answer = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + i * d;
    }
  }
  return answer;
}
console.log(solution1(3, 4, [true, false, false, true, true]));

//reduce 복습
function solution2(a, d, included) {
  return included.reduce((acc, cur, idx) => (cur ? acc + a + idx * d : acc), 0);
}
console.log(solution2(3, 4, [true, false, false, true, true]));
