// https://school.programmers.co.kr/learn/courses/30/lessons/120956

// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
// 문자열 배열 babbling이 매개변수로 주어질 때,
// 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(babbling) {
  let count = 0;
  let possible = ['aya', 'ye', 'woo', 'ma'];

  // for (let i = 0; i < babbling.length; i++) {
  // if (babbling[i].includes('aya')) {
  //   if (
  //     // aya 가 포함돼었을때, aya를 뺀 나머지가 Possible에 있는 단어인지 확인
  //     possible.includes(babbling[i].slice(babbling[i].indexOf('aya') + 3))
  //   ) {
  //     count += 1;
  //   }
  // }

  // if (babbling[i].includes('ye')) {
  //   console.log(babbling[i].slice(babbling[i].indexOf('ye') + 2));

  //   if (
  //     // aya 가 포함돼었을때, aya를 뺀 나머지가 Possible에 있는 단어인지 확인
  //     possible.includes(babbling[i].slice(babbling[i].indexOf('ye') + 2))
  //   ) {
  //     count += 1;
  //   }
  // }
  // }
  // return babbling.filter((item, i) => {
  //   for (let i = 0; i < possible.length; i++) {
  //     return possible[i].includes(item);
  //   }
  // });
  // return count;

  for (let i = 0; i < babbling.length; i++) {
    let item = babbling[i];

    for (let j = 0; j < possible.length; j++) {
      item = item.replaceAll(possible[j], ' ');
      // item = item.replaceAll(' ', '');
    }

    if (item.trim().length === 0) {
      count += 1;
    }
  }
  return count;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));

// trim() => 빈칸제거
