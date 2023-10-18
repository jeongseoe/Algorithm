// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// 문자열 배열 strArr이 주어집니다.
// strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  let 그룹 = strArr.map(a => a.length);
  let count = {};

  for (let i = 0; i < 그룹.length; i++) {
    count[그룹[i]] = count[그룹[i]] ? count[[그룹[i]]] + 1 : 1;
  }
  return Object.values(count).sort((a, b) => b - a)[0];
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi']));

// Array 메서드로 배열로 풀기
function solution1(strArr) {
  let answer = Array(31).fill(0);
  // console.log(answer);
  for (let str of strArr) {
    answer[str.length]++;
    console.log(answer);
  }
  return Math.max(...answer);
}

console.log(solution1(['a', 'bc', 'd', 'efg', 'hi']));

// let of 반복문 공부하기
// Array 메서드
// Object.value랑 count {}..?
// new Map ????
