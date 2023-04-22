// 1부터 100 까지 출력하는 코드를 for문으로 바꿔보세요.
for(let i = 0; i < 100; i++){
  process.stdout.write(i+1+'\t');
  if((i+1) % 5== 0){
    console.log();
  }
}