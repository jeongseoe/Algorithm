// https://school.programmers.co.kr/learn/courses/30/lessons/181927

// 정수 리스트 num_list가 주어질 때,
// 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let 마지막원소 = num_list[num_list.length - 1];
  let 그전원소 = num_list[num_list.length - 2];

  if (마지막원소 > 그전원소) {
    num_list.push(마지막원소 - 그전원소);
  } else num_list.push(마지막원소 * 2);

  return num_list;

  // return 마지막원소 > 그전원소
  //   ? num_list.push(마지막원소 - 그전원소)
  //   : num_list.push(마지막원소 * 2);
}

console.log(solution([2, 1, 6]));

// const [ a, b ] = [...num_list]
// 이건 찾아보고 공부해서 적용해보자...!!
