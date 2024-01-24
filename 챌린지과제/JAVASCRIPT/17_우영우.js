/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/* 💡문제 출제
 *
 * 기러기 토마토 스위스 인도인 별똥별은 앞으로 읽어도 뒤로 읽어도 말이 같습니다.
 * 이것을 팰린드롬이라고 하는데 앞에서부터 읽어도 뒤에서부터 읽어도 같은 문자열을 의미합니다.
 * str: 팰린드롬 여부를 확인할 문자열 (1 이상 100 이하의 길이)
 * 주어진 문자열이 팰린드롬이면 true, 그렇지 않으면 false를 반환하세요.
 *
 *
 * ❗️ 제한 조건 ❗️
 * 문자열을 정제할 때 알파벳 이외의 문자는 제거하세요.
 * 함수는 대소문자를 구분하지 않아야 합니다.
 *
 * 👉 예시 결과
 * "A man, a plan, a canal: Panama" // true
 * "race a car" // false
 */
function question(str) {
  // 여기에서 코드 작성해주세요!
  const stripped = str.replaceAll(/[^\w]/gi, ''); // 정규표현식을 통해 알파벳 이외의 모든 문자를 제거
  const array = stripped.split(''); // 문자열을 배열로 변환
  const center = parseInt(array.length / 2); // 가운데 위치를 찾기 위해 길이/2 후 정수형으로 변환

  // 시작과 끝부터 순회하기 위해 배열의 길이 -1로 마지막 인덱스 저장
  let startIndex = 0;
  let lastIndex = array.length - 1;
  let result = true; // 결과 초기값은 true

  // startIndex 는 가운데 값보다 작을 때까지, lastIndex 는 가운데 값보다 클 때까지 while 문 순회
  while (startIndex < center || lastIndex > center) {
    // 시작과 끝값을 하나씩 순회하면서 비교하고 toLowerCase() 를 통해 모두 소문자 치환함으로서 대소문자 구분하지 않게 처리
    if (array[startIndex].toLowerCase() !== array[lastIndex].toLowerCase()) {
      // 일치하지 않는 경우 결과값을 false 로 변경하고 순회 종료
      result = false;
      break;
    }

    // 증감 처리
    startIndex++;
    lastIndex--;
  }

  return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
  question,
  [
    ['A man, a plan, a canal: Panama'],
    ['race a car'],
    ['Was it a car or a cat I saw?'],
    ["No 'x' in Nixon"],
    ['No lemon, no melon'],
    ['A Santa at NASA'],
    ['Palindrome example'],
  ],
  [true, false, true, true, true, true, false]
);

function Test(question, conditions, results) {
  for (let index in results) {
    const result = question(...conditions[index]) === (results[index] === true);
    console.log(`테스트 ${+index + 1}`, result);
    if (!result) {
      console.log('테스트에 통과하지 못했습니다.');
      return;
    }
  }

  console.log('테스트에 통과하셨습니다!');
}
