// https://school.programmers.co.kr/learn/courses/30/lessons/181856

// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때,
// 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(arr1, arr2) {
  let arr1모든원소합 = arr1.reduce((a, c) => a + c);
  let arr2모든원소합 = arr2.reduce((a, c) => a + c);

  if (arr1.length === arr2.length) {
    if (arr1모든원소합 > arr2모든원소합) {
      return 1;
    } else if (arr1모든원소합 === arr2모든원소합) {
      return 0;
    } else {
      return -1;
    }
  } else if (arr1.length > arr2.length) {
    return 1;
  } else {
    return -1;
  }
}

console.log(solution([49, 13], [70, 11, 2]));

// 줄여보자

function solution(arr1, arr2) {
  let arr1모든원소합 = arr1.reduce((a, c) => a + c);
  let arr2모든원소합 = arr2.reduce((a, c) => a + c);

  if (
    (arr1.length === arr2.length && arr1모든원소합 > arr2모든원소합) ||
    arr1.length > arr2.length
  ) {
    return 1;
  } else if (
    (arr1.length === arr2.length && arr1모든원소합 < arr2모든원소합) ||
    arr1.length < arr2.length
  ) {
    return -1;
  } else if (arr1.length === arr2.length && arr1모든원소합 === arr2모든원소합) {
    return 0;
  }
}

// 더 줄일수 있는지는 모르겠당..
