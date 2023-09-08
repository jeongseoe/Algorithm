// https://school.programmers.co.kr/learn/courses/30/lessons/181865
// 문자열 binomial이 매개변수로 주어집니다.
// binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수,
// op는 '+', '-', '*' 중 하나입니다.

// 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

function solution(binomial) {
  var answer = new Function(`return ${binomial}`)();
  return answer;
}

console.log(solution('43 + 12'));

// switch
function solution1(binomial) {
  const 문자 = binomial.split(' ');

  const 문자1 = Number(문자[0]);
  const 문자2 = Number(문자[2]);

  switch (문자[1]) {
    case '-':
      return 문자1 - 문자2;
    case '+':
      return 문자1 + 문자2;
    case '*':
      return 문자1 * 문자2;
  }
}

console.log(solution1('0 - 7777'));
