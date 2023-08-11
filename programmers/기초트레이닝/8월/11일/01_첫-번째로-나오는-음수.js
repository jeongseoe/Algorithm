// https://school.programmers.co.kr/learn/courses/30/lessons/181896

// 정수 리스트 num_list가 주어질 때,
// 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

function solution(num_list) {
  return num_list.findIndex(v => v * -1 > 0);
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));

// indexOf 는 그냥 괄호안에 있는 매개변수가 배열안에 존재한다면 그 값의 인덱스를 내보내줌 (포함된게 아니고 그 값 자체)

// find 는 조건에 해당하는 요소의 값을 출력 없으면 -1
// findIndex 는 find 랑 비슷한데 조건에 해당하는 요소의 인덱스를 출력해줌 없으면 -1

function solution1(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    return num_list[i] < 0 ? i : -1;
  }
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
