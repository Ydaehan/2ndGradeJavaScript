// 다음 if 문을 switch 문과 조건부 연산자로 바꿔 보세요
let cond = true;
let value = '';
/* if (cond) {
  value = '참';
} else {
  value = '거짓';
} */

// switch 문으로 변환
/* switch (cond) {
  case true : 
    value = '참';
    break;
  default :
    value = '거짓';
} */

// 조건부 연산자로 변환
cond ? value = '참' : value = '거짓';
console.log(value);