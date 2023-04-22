// 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해 보세요, continue 문을 사용하세요
for(let row = 1; row <= 9 ; row++) {
  console.log('-------------');
  for (let col = 1; col <= 9; col++) {
    if(row % 2 == 0 || col % 2 == 0){
      continue;
    }
    console.log(row + " X " + col + " = " + row*col)
  }
  console.log('-------------');
}