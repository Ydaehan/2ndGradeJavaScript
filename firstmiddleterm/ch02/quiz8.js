// 다음 배열에서 '라'를 모두 제거하세요. indexOf와 splice를 사용하세요.
const arr = ['가','라','다','라','마','라'];

while (arr.includes('라')){
  console.log(arr);
  console.log(arr.indexOf('라'));
  let startIndex = arr.indexOf('라');
  arr.splice(startIndex,'1');
}
console.log(arr);
