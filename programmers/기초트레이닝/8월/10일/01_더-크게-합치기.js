// https://school.programmers.co.kr/learn/courses/30/lessons/181939

//연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
// 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

// `${a}` 이름뭐지
// mdm Math.max 찾아보기

function solution(a, b) {
  return String(a) + String(b) >= String(b) + String(a)
    ? Number(String(a) + String(b))
    : Number(String(b) + String(a));
}

console.log(9 + 91);
console.log(solution(89, 8));

// 와 우
// toString 을 쓰려면 변수에 담거나 arry 거나 boolean 이면 바로 담기는데,
// 그냥 숫자를 넣으려면 앞에도 괄호에 담아야한다.
// (5).toString()  처럼;;
// String() 은 괄호안에 그냥 변경하고 싶은 값을 매개변수로 넣어주면된다 ....

// 수 비교할 때 Math 를 먼저 떠올려서 해보기
// Math 로 다시 풀어보기!!!!!!!
