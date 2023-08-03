// https://school.programmers.co.kr/learn/courses/30/lessons/181936
// if 문에서 꼭 return 이 필요는 없다.
// 조건문에 어차피 그 조건에 맞을경우 실행해주는 것인데, 굳이 해도 안해도 상관없다.

function solution(number, n, m) {
  var answer = 0;

  if (number % n === 0 && number % m === 0) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

console.log(solution(55, 10, 5));

// 삼항으로 변경해보면 ->
// return 되는 부분에서 조건문을 넣고싶을때 써야한다.
// 변수도 굳이 지정하지않아도 답을 추출해낼수 있다.
function solution2(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

console.log(solution2(55, 10, 5));
