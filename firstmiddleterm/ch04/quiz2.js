// 1분퀴즈 2
// 다음 if문의 중첩을 줄여 보세요
/* function test() {
  let result = '';
  if (a) {
    if (!b) {
      result = 'c';
    }
  }else {
    result = 'a';
  }
  result += 'b';
  return result;
} */

// 중첩 제거
function test() {
  let result = '';
  if (!a) {
    result = 'a';
    result += 'b';
    return result;
  }
  if (!b) {
    result = 'c';
  }
  result += 'b';
  return result;
}