// https://school.programmers.co.kr/learn/courses/30/lessons/181905

// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, s, e) {
  let 자른거 = [...my_string]
    .slice(s, e + 1)
    .reverse()
    .join('');

  return my_string.replace(my_string.slice(s, e + 1), 자른거);
}

console.log(solution('Progra21Sremm3', 6, 12));

// 배열화 말고 문자열에서 변해보자!
// substring 으로 도 가능하니까 그걸로도 해보자
