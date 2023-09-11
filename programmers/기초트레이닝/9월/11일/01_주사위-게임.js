// https://school.programmers.co.kr/learn/courses/30/lessons/181930

// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다.
// 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a제곱2 + b제곱2 + c제곱2 ) × (a제곱3 + b제곱3 + c제곱3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c) {
  let 다더한거 = a + b + c;
  let 제곱 = a ** 2 + b ** 2 + c ** 2;
  let 세제곱 = a ** 3 + b ** 3 + c ** 3;

  if (a !== b && b !== c && c !== a) {
    return 다더한거;
  } else if (a === b && b === c) {
    return 다더한거 * 제곱 * 세제곱;
  } else {
    return 다더한거 * 제곱;
  }
}

console.log(solution(4, 4, 4));
