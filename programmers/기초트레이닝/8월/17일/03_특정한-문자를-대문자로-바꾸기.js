// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때,
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, alp) {
  // return [...my_string].match(alp).toUpperCase();
  // my_string.map((str, i) => {
  //   return str.match(alp);
  // });

  // return console.log(my_string.indexOf(alp));

  // let array = [...my_string];
  // let 대문자변경 = String(array[my_string.indexOf(alp)].toUpperCase());

  // if (my_string.includes(alp)) {
  //   console.log(my_string.indexOf(alp));
  //   return array
  //     .splice(array.indexOf(alp), 0, 대문자변경)
  //     .splice(array.indexOf(alp), array.indexOf(alp))
  //     .join('');
  // } else {
  //   return my_string;
  // }

  // return console.log(
  //   [...my_string].map((a, i) => {
  //     if (a === alp) {
  //       console.log('대문자가 되는가', a.toUpperCase());
  //     } else a;
  //   })
  // );

  // map 으로 성공

  // return [...my_string]
  //   .map((a) => {
  //     if (a === alp) {
  //       a.toUpperCase();
  //     } else {
  //       a;
  //     }
  //     return a;
  //   })
  //   .join('');

  // map 삼항
  return [...my_string].map(a => (a === alp ? a.toUpperCase() : a)).join('');

  // replace, replaceAll 메서드 찾아서 공부해보기 (문자열치환 메서드)
}

console.log(solution('lowercase', 'x'));
