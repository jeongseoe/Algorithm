// https://school.programmers.co.kr/learn/courses/30/lessons/181920?language=javascript
// i는 선언하는 변수다.
// 가운데는 조건문
// 마지막은 늘어나거나 줄어들게 설정할 수 있다. ( 다른방법도 있으니 찾아보기 )
// -> 끝쪽은 증감 증가로만 설정할 수 있따!!!!!!

function solution(start, end) {
  var answer = [];
  for (let i = start; i <= end; i++) {
    // 만약 곱하기하거나 하면 i 부분에 설정하면됨
    answer.push(i);
  }
  return answer;
}

console.log(solution(3, 10));
