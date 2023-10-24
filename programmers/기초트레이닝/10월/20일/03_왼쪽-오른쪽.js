// https://school.programmers.co.kr/learn/courses/30/lessons/181890

// 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다.
// str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를,
// 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
// "l"이나 "r"이 없다면 빈 리스트를 return합니다.

function solution(str_list) {
  if (str_list.includes('l') || str_list.includes('r')) {
    for (let i = 0; i < str_list.length; i++) {
      if (str_list[i] === 'l') {
        return str_list.slice(0, i);
      } else if (str_list[i] === 'r') {
        return str_list.slice(i + 1, str_list.length);
      }
    }
  } else {
    return [];
  }
}

console.log(solution(['u', 'u', 'l', 'r']));

// 굳이 ..... if 를 밖에 또 할 필요가 없다 ..!
function solution1(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') {
      return str_list.slice(0, i);
    }

    if (str_list[i] === 'r') {
      return str_list.slice(i + 1);
    }
  }
  return [];
}

console.log(solution(['u', 'u', 'l', 'r']));
