// https://school.programmers.co.kr/learn/courses/30/lessons/181836

// 직사각형 형태의 그림 파일이 있고,
// 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
// 이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때,
// 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(picture, k) {
  let answer = [];

  for (let i = 0; i < picture.length; i++) {
    let string = picture[i];
    let 추가된글씨 = '';

    for (let j = 0; j < string.length; j++) {
      let str = string[j];

      for (let a = 0; a < k; a++) {
        if (str === '.') {
          추가된글씨 += '.';
        }
        if (str === 'x') {
          추가된글씨 += 'x';
        }
      }
    }
    for (let l = 0; l < k; l++) {
      answer.push(추가된글씨);
    }
  }

  return answer;
}

console.log(
  solution(
    [
      '.xx...xx.',
      'x..x.x..x',
      'x...x...x',
      '.x.....x.',
      '..x...x..',
      '...x.x...',
      '....x....',
    ],
    2
  )
);

// forEach 공부해서 풀어보기
// picture 배열을 forEach를 사용해서
// 배열의 각요소를 처리하고
// forEach 원소들이 한 행을나타내느데, 그거를 k번반복한 문자열을 저장하고
// 다시 for로 k 번 박복하고
function solution1(picture, k) {
  let answer = [];
  let 추가된문자 = '';

  picture.forEach(element => {
    const R = [...element].map(a => a.repeat(k)).join('');
    for (let i = 0; i < k; i++) {
      answer.push(R);
    }
  });
  return answer;
}

console.log(
  solution1(
    [
      '.xx...xx.',
      'x..x.x..x',
      'x...x...x',
      '.x.....x.',
      '..x...x..',
      '...x.x...',
      '....x....',
    ],
    2
  )
);
