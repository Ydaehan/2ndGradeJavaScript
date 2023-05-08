// 반복문을 이용하여 별찍기를 해보자
// 각각 for 문 while 문 둘다 사용
let row,col;
const count = 5;

// 1. 정사각형

// while 을 사용한 방법
/* row = 0;
while (row < count) {
  col = 0;
  while (col < count){
    process.stdout.write("*");
    col++;
  }
  console.log();
  row++;
} */

// for 를 사용한 방법
/* for (let row = 0; row < count; row++){
  for (let col = 0; col < count; col++){
    process.stdout.write("*");
  }
  console.log();
} */

// 2. 평행사변형
// while 을 사용한 방법
// 1) =>
/* row = 0;
while(row < count) {
  col = 0;
  while (col < count+row) {
    while(col < row){
      process.stdout.write(" ");
      col++;
    }
    process.stdout.write("*");
    col++;
  }
  console.log();
  row++;
} */

// 2) <=
/* row = 0;
while(row < count) {
  col = 0;
  while (col < count*2-row) {
    while (col < count-row-1){
      process.stdout.write(" ");
      col++;
    }
    process.stdout.write("*");
    col++;
  }
  console.log();
  row++;
} */

// for 를 사용한 방법
// 1) =>
/* for (row = 0; row < count; row++) {
  for (col = 0; col < count+row; col++) {
    for(col; col < row; col++){
      process.stdout.write(" ");
    }
    process.stdout.write("*");
  }
  console.log();
} */

// 2) <=
/* for (row = 0; row < count; row++){
  for (col = 0; col < count*2-row-1; col++){
    for (col; col < count-row-1; col++){
      process.stdout.write(" ");
    }
    process.stdout.write("*");
  }
  console.log();
} */

// 3. 삼각형



// 4. 마름모 