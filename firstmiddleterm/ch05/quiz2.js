// forEach method를 사용한 코드를 for문으로 바꿔보아라
const array = [1, 3, 5, 7];
// array.forEach((number, index) => {
//   console.log(number,index);
// })

// for 문
for (let index = 0; index < array.length; index++){
  console.log(array[index], index);
}