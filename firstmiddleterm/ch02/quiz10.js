// 다음과 같이 객체 안에 객체가 있을 때 '조' 값에 접근하는 방법은 무엇일까? 두 가지
const zerocho = {
  name : {
    first: '현영',
    last : '조',
  },
  gender : 'm',
};

let a = zerocho.name.last;
let b = zerocho['name']['last'];
console.log(a === b);
console.log(a);
console.log(b);
