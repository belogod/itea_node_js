function printNumbers() {
    let count = 1;
    const interval = setInterval(() => {
        console.log(count);
        count++;
        if (count > 20) {
            clearInterval(interval);
        }
    }, 100);
}

printNumbers();





// Завдання №1
// console.log('start');
// const promise1 = new Promise((resolve, reject)=> {
//     console.log(1)
// })
// console.log('end');
///////// Висновок: Спочатку виведеться "start" потім "1" потім "end"






// Завдання №2
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// })

// promise1.then(res => {
//     console.log(res);
// });
// console.log('end');
///////// Висновок: Спочатку виведеться "start" потім "1" потім "end" потім "2"


