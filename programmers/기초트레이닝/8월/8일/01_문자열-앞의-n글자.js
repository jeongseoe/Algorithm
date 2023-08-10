// https://school.programmers.co.kr/learn/courses/30/lessons/181907

// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
/// my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  return my_string.slice(0, n);
}

console.log(solution('ProgrammerS123', 11));

// 내 생각 순서
// 일단.. slice쓰면 될거같아서 slice 를 찾아보고 (공부해볼계획)
// 전개연산자로 배열로 한 후 slice (배열 특정범위 짤라서 새 배열로만들어주는 메서드)
// 써서 join으로 합치기~

// 다른사람 풀이보니까 .. 그냥 문자열에 slice 를 써도됩니다 ㅎㅎ. .
// 굳이 전개연사자~ slice~ join~ 이러지 않아도 됬던겁니다 ㅎㅎ
