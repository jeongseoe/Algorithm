// https://school.programmers.co.kr/learn/courses/30/lessons/181879
// 정수가 담긴 리스트 num_list가 주어질 때,
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을
// 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

// index는 0부터 시작이고 length는 1부터 시작인 점을 생각해야한다.
// 변수가 2개이기때문에 연산자 ||(or)을 사용해서 반환하게 하였다.

function solution(num_list) {
  let answer1 = 0;
  let answer2 = 1;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list.length >= 11) {
      answer1 += num_list[i];
    } else {
      answer2 *= num_list[i];
    }
  }
  return answer1 || answer2;
}

console.log(solution([2, 3, 4, 5]));

// 다른 방안
// 리듀서를 공부해야함.(공부)

function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((a, c) => a + c)
    : num_list.reduce((a, c) => a * c);
}

console.log(solution([2, 3, 4, 5]));

// 리듀서

function solution(num_list) {
  return num_list.reduce((a, c) => a + c);
}

console.log(solution([2, 3, 4, 5]));
