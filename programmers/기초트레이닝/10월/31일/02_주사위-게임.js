// https://school.programmers.co.kr/learn/courses/30/lessons/181916

// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.

// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.

// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.

// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c, d) {
  let numArr = [a, b, c, d];
  let 중복제거 = new Set(numArr);
  console.log('중복제거:', 중복제거);

  const result = {};
  numArr.forEach(x => {
    result[x] = (result[x] || 0) + 1;
  });

  console.log('result ', result);

  function getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  let 중복숫자 = Object.values(result).sort((a, b) => b - a)[0];
  let 주사위수 = Object.keys(result);
  let 중복중제일많은주사위수 = getKeyByValue(result, 중복숫자);
  let 나머지주사위 = Number(주사위수.filter(a => a !== 중복중제일많은주사위수));

  console.log('중복중제일많은주사위수', 중복중제일많은주사위수);
  console.log('나머지주사위', 나머지주사위);
  console.log('중복숫자', 중복숫자);

  if (중복숫자 === 4) {
    return 1111 * a;
  } else if (중복숫자 === 3) {
    return (10 * 중복중제일많은주사위수 + 나머지주사위) ** 2;
  } else if (중복숫자 === 2) {
    if ([...중복제거].length === 2) {
      return (
        (Number(주사위수[0]) + Number(주사위수[1])) *
        Math.abs(Number(주사위수[0]) - Number(주사위수[1]))
      );
    } else {
    }
  } else if (중복숫자 === 1) {
    return [...중복제거][0] * [...중복제거][1];
  } else return [...중복제거].sort((a, b) => a - b)[0];
}

console.log(solution(2, 5, 2, 6));

function solution2(a, b, c, d) {
  const dices = [a, b, c, d];
  const numFrequency = dices.reduce((acc, cur) => {
    acc[cur] = acc[cur] ?? 0;
    acc[cur]++;
    return acc;
  }, {});
  const valueInfo = Object.values(numFrequency);
  const keyInfo = Object.keys(numFrequency);
  const countVal = Math.max(...valueInfo);
  switch (countVal) {
    case 4:
      return a * 1111;
    case 3: {
      const threeKey = keyInfo.find(a => numFrequency[a] === 3);
      const oneKey = keyInfo.find(a => numFrequency[a] === 1);
      console.log(threeKey, oneKey);
      return (10 * Number(threeKey) + Number(oneKey)) ** 2;
    }
    case 2: {
      if (keyInfo.length === 2) {
        if (a === b) return (a + c) * Math.abs(a - c);
        return (a + b) * Math.abs(a - b);
      } else {
        return keyInfo.reduce(
          (acc, cur) => (numFrequency[cur] === 1 ? acc * cur : acc),
          1
        );
      }
    }
    default: {
      return Math.min(a, b, c, d);
    }
  }
}
console.log(solution2(2, 5, 2, 6));

function solution3(a, b, c, d) {
  const diceCounts = new Map();

  [a, b, c, d].forEach(die => {
    diceCounts.set(die, (diceCounts.get(die) || 0) + 1);
  });

  const sortedValues = Array.from(diceCounts.values()).sort();
  const sortedKeys = Array.from(diceCounts.keys()).sort(
    (x, y) => diceCounts.get(x) - diceCounts.get(y)
  );

  const valuesStr = sortedValues.toString();

  switch (valuesStr) {
    case '4':
      return 1111 * sortedKeys[0];
    case '1,3':
      const [smaller, larger] = sortedKeys;
      return Math.pow(10 * larger + smaller, 2);
    case '2,2':
      const [first, second] = sortedKeys;
      return (first + second) * Math.abs(first - second);
    case '1,1,2':
      const [min1, min2] = sortedKeys;
      return min1 * min2;
    default:
      return Math.min(...sortedKeys);
  }
}

console.log(solution3(2, 5, 2, 6));
