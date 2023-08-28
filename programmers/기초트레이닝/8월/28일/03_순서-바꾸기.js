// https://school.programmers.co.kr/learn/courses/30/lessons/181891

// 정수 리스트 num_list와 정수 n이 주어질 때,
// num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을
// n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  let 뒤에거 = num_list.slice(n);
  let 앞에거 = num_list.slice(0, n);

  return 뒤에거.concat(앞에거);
  // return [...뒤에거, ...앞에거];
}

console.log(solution([5, 2, 1, 7, 5], 3));

// n을 기준으로 뒤에랑 앞에를 나눠서 변수에 담은 후
// 배열합치는 concat 메서드를 사용해서 합쳤습니다.

// 스프레드로도 가능합니다.
