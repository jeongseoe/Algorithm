// https://school.programmers.co.kr/learn/courses/30/lessons/181928
// 일을 효율적으로 처리하기 위해 알고리즘을 공부한다.
// 문자열앞에 +를 붙였을때 왜 ...number로 타입이 변경되는지?
// 자바스크립트 문자열->숫자타입 자동변경 찾아보기 (자바스크립트 형변환)

// var let const 재공부 (다시 암기해)

function solution(num_list) {
  let 홀수 = "";
  let 짝수 = "";

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      홀수 += num_list[i];
    } else {
      짝수 += num_list[i];
    }
  }
  return +홀수 + +짝수;
}

console.log(solution([3, 4, 5, 2, 1]));
