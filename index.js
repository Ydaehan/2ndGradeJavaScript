const f1 = () => {
    console.log();
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("2번 주문 완료");
        }, 3000);
    });
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.time('x');
// Promise.all
// 한번에 다 시작하고 모두 다 이행되면
// 값을 사용 할 수 있다.
// Promise.all([f1(), f2(), f3()]).then((res) => {
//     console.log(res);
//     console.timeEnd('x'); // 약 3초
// });

console.time('timeCheck');
f1().then(res => f2(res))
    .then(res => f3(res))
    .then(res => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.timeEnd('timeCheck'); // 약 6초
    });