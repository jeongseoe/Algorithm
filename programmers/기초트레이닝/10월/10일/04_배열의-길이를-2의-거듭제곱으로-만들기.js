// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 정수 배열 arr이 매개변수로 주어집니다.
// arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다.
// arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  // 제한사항이 1000 아래 숫자라서 2의 9승까지밖에 안됨
  const pow2 = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512];

  let idx;
  for (let i = 0; i < pow2.length; i++) {
    if (arr.length < pow2[i]) break;
    idx = pow2[i];
  }
  const zeroArray = Array(idx).fill(0);

  return [...arr, ...zeroArray.slice(0, idx - arr.length)];
}

// console.log(solution([1, 2, 3, 4, 5, 6]));

function solution1(arr) {
  let idx = 0;
  let arrLength = arr.length;

  while (true) {
    const number = 2 ** idx;
    if (arrLength > number) {
      idx++;
    } else {
      for (let i = 0; i < number - arrLength; i++) {
        arr.push(0);
      }
      return arr;
    }
  }
}

console.log(solution1([1, 2, 3, 4, 5, 6]));
// while 문으로도 가능
// 왜 length를 변수로 담아야하는지 ..? => 무한반복 속 length를 계속 호출하면 중복이 생길 수 있다.
// Math.log ???? 이걸로되는지
