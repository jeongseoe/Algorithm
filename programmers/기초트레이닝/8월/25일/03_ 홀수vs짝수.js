// https://school.programmers.co.kr/learn/courses/30/lessons/181887

// 정수 리스트 num_list가 주어집니다.
// 가장 첫 번째 원소를 1번 원소라고 할 때,
// 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중
// 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

function solution(num_list) {
  let 홀수합 = 0;
  let 짝수합 = 0;

  num_list.filter((num, i) => {
    return i % 2 === 1 ? (홀수합 += num) : (짝수합 += num);
  });

  return 홀수합 >= 짝수합 ? 홀수합 : 짝수합;
}

console.log(solution([4, 2, 6, 1, 7, 6]));

// 그치만 for문이 제일 성능이 좋다!
