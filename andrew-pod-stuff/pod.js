function sum(a, b) {
   return a+b
}
let sum2 = (a, b) => a+b;


function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0;

function randomNumber(){
    return Math.random()
}

let randomNumber2 = () => Math.random;

document.addEventListener('click', () => console.log('click'));

let p = new Promise((resolve, reject) => {
    let a = 1+1
    if (a == 2) {
        resolve('success')
    }else {
        reject('failed')
    }
});

p.then((message) => {
    console.log('this is in the then ' + message);
} ).catch((message) => {
    console.log('this is in the catch ' + message);
});


const userLeft = false;
const userRight =  true;

function returnLorR (callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: 'You\'re A Lefty'
        })
    }else if (userRight){
        errorCallback({
            name: 'User Right',
            message: 'You\'re A Righty'
        })
    }else {
        callback('Good Job Bud!')
    }

}